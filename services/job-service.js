module.exports = JobService;

var Happner = require('happner-2');
var dateFormat = require('dateformat');

var jobBuilder = new (require('../builders/job-builder'))();
var happnerConfig = require('../happner-config');

function JobService() {
}

JobService.prototype.getJobs = function (protocol, version) {

    var now = new Date();

    return [
        jobBuilder
            .withHeading('happner protocol specification')
            .withStep('start happner server')
            .withParameters({
                config: happnerConfig
            })
            .withDoFunc(function (params, cb) {

                var _this = this;

                Happner.create(params.config, function (e, service) {

                    _this.output.push('##PROTOCOL VERSION: ' + protocol);
                    _this.output.push('###HAPPN VERSION: ' + version);
                    _this.output.push('####RUN: ' + dateFormat(now, "yyyy mmmm dd hh:MM"));

                    cb(null, _this.output);
                });
            })
            .build()
    ];
};