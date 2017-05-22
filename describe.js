var async = require('async');
var path = require('path');

var pkg = require([__dirname, 'node_modules', 'happner-2', 'package.json'].join(path.sep));
var protocol = pkg.protocol;
var version = pkg.version;

var jobUtil = require('./utils/job-util');
var reportUtil = require('./utils/report-util');

var protocolReport = [];

function processJobs(jobs) {

    async.eachSeries(jobs, function (job, jobCB) {

        job.do(job.parameters, function (e, output) {

            if (e)
                return jobCB(e);

            if (job.heading)
                protocolReport.push('#' + job.heading + '\r\n');

            if (job.text)
                protocolReport.push('###' + job.text + '\r\n');

            if (job.description)
                protocolReport.push('*' + job.description + '*\r\n');

            if (job.output) {
                job.output.forEach(function (line) {
                    protocolReport.push(line);
                });
            }

            jobCB();
        });

    }, function (e) {

        if (e)
            return console.log('protocol describe failed:::', e);

        var reportFile = reportUtil.writeReportToFile(protocolReport, protocol, version);

        console.log('protocol described in file: ' + reportFile);
        process.exit();
    });
}

var jobs = jobUtil.getJobs(protocol, version);

//console.log(jobs);
processJobs(jobs);

