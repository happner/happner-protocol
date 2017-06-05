var async = require('async');
var path = require('path');

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

    var jobs = self.__jobUtil.getJobs(self.__protocol, self.__version);

    async.eachSeries(jobs, function (job, jobCB) {

        job.do(job.parameters, function (e, output) {

            if (e)
                return jobCB(e);

            if (job.heading)
                self.__protocolReport.push('#' + job.heading + '\r\n');

            if (job.text)
                self.__protocolReport.push('###' + job.text + '\r\n');

            if (job.description)
                self.__protocolReport.push('*' + job.description + '*\r\n');

            if (job.output) {
                job.output.forEach(function (line) {
                    self.__protocolReport.push(line);
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
        //process.exit();
    });
};
