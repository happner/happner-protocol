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

    var jobObj = self.__jobUtil.getJobs();
    var jobs = jobObj.jobs;
    var outputs = jobObj.outputs;

    outputs.push({name: '# HAPPNER PROTOCOL', value: null, isText: true});
    outputs.push({name: '* __PROTOCOL VERSION: ' + self.__protocol + '__', value: null, isText: true});
    outputs.push({name: '* __HAPPNER VERSION:  ' + self.__version + '__', value: null, isText: true});
    outputs.push({name: '* __RUN: ' + dateFormat(now, "yyyy mmmm dd hh:MM") + '__', value: null, isText: true});

    async.eachSeries(jobs, function (job, jobCB) {

        if (job.heading)
            outputs.push({name: '## ' + job.heading + '\r\n', value: null, isText: true});

        if (job.text)
            outputs.push({name: '### ' + job.text + '\r\n', value: null, isText: true});

        if (job.description)
            outputs.push({name: '* ' + job.description + '*\r\n', value: null, isText: true});

        job.do(job.parameters, function (e, output) {

            if (e)
                return jobCB(e);

            jobCB();
        });

    }, function (e) {

        if (e) {
            console.log('protocol describe failed:::', e);
            return callback(e);
        }

        var reportFile = self.__generateDocs(outputs);

        console.log('protocol described in file: ' + reportFile);
        callback();
    });
};

DescribeProtocol.prototype.__generateDocs = function (outputs) {

    var self = this;

    // iterate through outputs and filter
    outputs.forEach(function (item) {

        if (item.isText) {
            self.__protocolReport.push(item.name + ' ' + (item.value != null ? item.value : ''));
        } else {

            if (item.name)
                self.__protocolReport.push('#### ' + item.name);

            switch (item.type) {
                case 'inbound':
                    self.__protocolReport.push('#### ' + item.value.action);
                    self.__protocolReport.push('<details>\r\n');
                    self.__protocolReport.push('<summary>client -> server</summary>\r\n');
                    break;
                case 'outbound':
                default:
                    self.__protocolReport.push('<details>\r\n');
                    self.__protocolReport.push('<summary>server -> client</summary>\r\n');
            }

            self.__protocolReport.push('<p>\r\n');

            if (item.format)
                self.__protocolReport.push(jsonUtil.cleanJSON(item.value, null, 2));
            else
                self.__protocolReport.push(jsonUtil.cleanJSON(item.value));

            self.__protocolReport.push('</p>\r\n');
            self.__protocolReport.push('</details>\r\n');


        }
    });

    return self.__reportUtil.writeReportToFile(self.__protocolReport, self.__protocol, self.__version);

};
