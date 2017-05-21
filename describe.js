var async = require('async');
var path = require('path');

var pkg = require([__dirname, 'node_modules', 'happner-2', 'package.json'].join(path.sep));
var protocol = pkg.protocol;
var version = pkg.version;

var jobService = new (require('./services/job-service'))();
var reportUtil = require('./utils/report-util');

var protocolReport = [];
var currentJob;

function processJobs(jobs) {

    async.eachSeries(jobs, function (job, jobCB) {

        job.output = [];//reset this

        currentJob = job;

        currentJob.do(currentJob.parameters, function (e, output) {

            if (e) return jobCB(e);

            if (currentJob.output) {

                if (currentJob.heading)
                    protocolReport.push('#' + currentJob.heading + '\r\n');

                if (currentJob.text)
                    protocolReport.push('###' + currentJob.text + '\r\n');

                if (currentJob.description)
                    protocolReport.push('*' + currentJob.description + '*\r\n');

                currentJob.output.forEach(function (line) {
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

var jobs = jobService.getJobs(protocol, version);

console.log('JOBS: ', jobs);
processJobs(jobs);

