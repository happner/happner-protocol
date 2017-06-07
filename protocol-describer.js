var async = require('async');
var path = require('path');

var jsonUtil = require('./utils/json-util');

module.exports = DescribeProtocol;

function DescribeProtocol(pkg, jobUtil, reportUtil) {

    this.__package = pkg != null ? pkg : require([__dirname, 'node_modules', 'happner-2', 'package.json'].join(path.sep));
    this.__protocol = this.__package.protocol;
    this.__version = this.__package.version;

    this.__jobUtil = jobUtil != null ? jobUtil : new (require('./utils/job-util'))();
    this.__reportUtil = reportUtil != null ? reportUtil : new (require('./utils/report-util'))();

    this.__protocolReport = [];
}

DescribeProtocol.prototype.processJobs = function (callback) {

    var self = this;
    var now = new Date();
    var dateFormat = require('dateformat');

    var jobs = self.__jobUtil.getJobs(self.__protocol, self.__version);

    self.__protocolReport.push('# HAPPNER PROTOCOL');
    self.__protocolReport.push('* __PROTOCOL VERSION: ' + self.__protocol + '__');
    self.__protocolReport.push('* __HAPPNER VERSION:  ' + self.__version + '__');
    self.__protocolReport.push('* __RUN: ' + dateFormat(now, "yyyy mmmm dd hh:MM") + '__');

    async.eachSeries(jobs, function (job, jobCB) {

        job.do(job.parameters, function (e, output) {

            if (e)
                return jobCB(e);

            if (job.heading)
                self.__protocolReport.push('## ' + job.heading + '\r\n');

            if (job.text)
                self.__protocolReport.push('### ' + job.text + '\r\n');

            if (job.description)
                self.__protocolReport.push('* ' + job.description + '*\r\n');

            if (job.output) {
                // iterate through outputs and filter
                job.output.forEach(function (item) {

                    if (item.isText)
                        self.__protocolReport.push(item.name + ' ' + (item.value != null ? item.value : ''));
                    else {

                        switch (item.type) {
                            case 'inbound':
                                self.__protocolReport.push('#### ' + item.value.action);
                                self.__protocolReport.push('*client -> server*' + '\r\n');
                                break;
                            case 'outbound':
                            default:
                                self.__protocolReport.push('*server -> client*' + '\r\n');
                        }

                        self.__protocolReport.push('<details>\r\n');
                        self.__protocolReport.push('<summary>expand</summary>\r\n');
                        self.__protocolReport.push('<p>\r\n');

                        if (item.format)
                            self.__protocolReport.push(jsonUtil.cleanJSON(item.value, null, 2));
                        else
                            self.__protocolReport.push(jsonUtil.cleanJSON(item.value));

                        self.__protocolReport.push('</p>\r\n');
                        self.__protocolReport.push('</details>\r\n');
                    }
                });
            }

            jobCB();
        });

    }, function (e) {

        if (e) {
            console.log('protocol describe failed:::', e);
            return callback(e);
        }

        var reportFile = self.__reportUtil.writeReportToFile(self.__protocolReport, self.__protocol, self.__version);

        console.log('protocol described in file: ' + reportFile);

        callback();
    });
};
