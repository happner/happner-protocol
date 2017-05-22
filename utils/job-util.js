module.exports = JobService;

var Happner = require('happner-2');

var dateFormat = require('dateformat');

var jobBuilder = new (require('../builders/job-builder'))();
var configService = require('config-util');

function JobService() {
}

JobService.prototype.getJobs = function (protocol, version) {

    var self = this;
    var now = new Date();

    /*
     jobs to return:
     - create Happner service
     - mesh events:
     - 'endpoint-reconnect-scheduled'
     - 'endpoint-reconnect-successful'
     - 'connection-ended'
     - client:
     - connect to server
     - disconnect from server
     - define model
     -> existing server component
     -> non-existent server component
     - subscribe to events
     - unsubscribe from events
     - receive events
     - call remote functions
     - set data

     */

    return [
        jobBuilder
            .withHeading('happner protocol specification')
            .withStep('start happner server')
            .withDoFunc(function (params, cb) {

                var __this = this;

                Happner.create(params.config, function (e, service) {

                    // keep happner in scope of the JobService
                    self.__happner = service;

                    __this.output.push('##PROTOCOL VERSION: ' + protocol);
                    __this.output.push('###HAPPN VERSION: ' + version);
                    __this.output.push('####RUN: ' + dateFormat(now, "yyyy mmmm dd hh:MM"));

                    cb(null, __this.output);
                });
            })
            .build(),
        jobBuilder
            .withHeading('create happner client')
            .withStep('create happner client')
            .withDoFunc(function (params, cb) {

                var __this = this;
                self.__client = new Happner.MeshClient({secure: false, port: 50505});

                self.__client.login()

                    .then(function () {

                        var token = self.__client.token;

                        self.__client.disconnect({revokeSession: true}, function (e) {
                            if (!e) console.log('disconnection went fine, we have revoked the token ' + token);

                            cb(null, __this.output);
                        });

                    });
            })
            .build()
    ];
};