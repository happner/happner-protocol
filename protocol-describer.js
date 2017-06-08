var async = require('async');
var path = require('path');

var jsonUtil = require('./utils/json-util');
var outputType = require('./constants/constants').OUTPUT_TYPE;

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

    outputs.push({name: '# HAPPNER PROTOCOL', value: null, type: outputType.INFO});
    outputs.push({name: '* __PROTOCOL VERSION: ' + self.__protocol + '__', value: null, type: outputType.INFO});
    outputs.push({name: '* __HAPPNER VERSION:  ' + self.__version + '__', value: null, type: outputType.INFO});
    outputs.push({
        name: '* __RUN: ' + dateFormat(now, "yyyy mmmm dd hh:MM") + '__',
        value: null,
        type: outputType.INFO
    });

    async.eachSeries(jobs, function (job, jobCB) {

        if (job.heading)
            outputs.push({name: '## ' + job.heading + '\r\n', value: null, type: outputType.INFO});

        if (job.text)
            outputs.push({name: '### ' + job.text + '\r\n', value: null, type: outputType.INFO});

        if (job.description)
            outputs.push({name: '* ' + job.description + '*\r\n', value: null, type: outputType.INFO});

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

    var writeDetails = function (name, action, label, content) {

        if (name)
            self.__protocolReport.push('#### ' + name);

        if (action)
            self.__protocolReport.push('#### ' + action);

        self.__protocolReport.push('<details>\r\n');
        self.__protocolReport.push('<summary>' + label + '</summary>\r\n');
        self.__protocolReport.push('<p>\r\n');

        if (content)
            self.__protocolReport.push(content);

        self.__protocolReport.push('</p>\r\n');
        self.__protocolReport.push('</details>\r\n');
    };

    // iterate through outputs and filter
    outputs.forEach(function (item) {

        var content = item.format ? jsonUtil.cleanJSON(item.value, null, 2) : jsonUtil.cleanJSON(item.value);

        switch (item.type) {
            case outputType.INFO:
                self.__protocolReport.push(item.name + ' ' + (item.value != null ? item.value : ''));
                break;
            case outputType.CLIENT_SERVER:
                writeDetails(item.name, item.value.action, 'client -> server', content);
                break;
            case outputType.SERVER_CLIENT:
                writeDetails(item.name, item.value.action, 'server -> client', content);
                break;
            case outputType.CLIENT_ONLY:
                writeDetails(item.name, item.value.action, 'client', content);
                break;
            default:
                writeDetails(item.name, item.value.action, 'unknown', null)

        }

    });

    return self.__reportUtil.writeReportToFile(self.__protocolReport, self.__protocol, self.__version);

};
