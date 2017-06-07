var Happner = require('happner-2');
var HappnerClient = require('happner-client');

module.exports = JobUtil;

function JobUtil(jobBuilder) {
    this.__jobBuilder = jobBuilder != null ? jobBuilder : new (require('../builders/job-builder'))();
}

JobUtil.prototype.getJobs = function (protocol, version) {

    var self = this;

    /*
     create Happner server
     */
    var happnerServerJob = this.__jobBuilder
        .withHeading('start Happner server')
        .withStep('start happner server')
        .withDoFunc(function (params, cb) {

            var __this = this;

            Happner.create(params.config, function (e, service) {
                self.__happner = service;
                cb(null, __this.output);
            });
        })
        .build();

    /*
     create mesh client and api model
     */
    var meshClientJob = this.__jobBuilder
        .clear()
        .withHeading('create happner client')
        .withStep('create happner client and construct api')
        .withDoFunc(function (params, cb) {
            var __this = this;

            self.__client = new HappnerClient();

            self.__model = {
                componentName: {
                    version: '^1.0.0',
                    methods: {
                        methodName: {},
                        causeEventMethod: {},
                        erroringMethodName: {},
                        missingMethodName: {}
                    }
                },
                missingComponentName: {
                    version: '^1.0.0',
                    methods: {
                        missingMethodName: {}
                    }
                }
            };

            self.__addToOutput(__this, 'creating model: ', self.__model, false);

            self.__api = self.__client.construct(self.__model);
            cb(null, __this.output);
        })
        .build();

    /*
     login
     */
    var clientConnectJob = this.__jobBuilder
        .clear()
        .withHeading('connect happner client to happner server')
        .withStep('connect happner client to happner server')
        .withDoFunc(function (params, cb) {

            var __this = this;

            self.__client.connect({secure: false, port: 50505})
                .then(function () {
                    self.__clientToken = self.__client.token;
                    cb(null, __this.output);
                });
        })
        .build();

    /*
     event subscribe
     */
    var eventSubscribeJob = this.__jobBuilder
        .clear()
        .withHeading('subscribe to mesh event')
        .withStep('subscribe to mesh event')
        .withDoFunc(function (params, cb) {

            var __this = this;

            self.__api.event.componentName.on('event/name', function () {
            }, function (err) {
                /*
                 initiate the event
                 */
                self.__api.exchange.componentName.causeEventMethod(function () {
                    setTimeout(function () {

                        cb(null, __this.output);
                    }, 500);
                });
            })
        })
        .build();

    /*
     disconnect client
     */
    var disconnectClientJob = this.__jobBuilder
        .clear()
        .withHeading('disconnect from happner server')
        .withStep('disconnect from happner server')
        .withDoFunc(function (params, cb) {

            var __this = this;

            self.__client.disconnect(function (err, result) {

                if (err)
                    return cb(err);

                cb(null, __this.output);
            })
        })
        .build();

    /*
     stop happner server
     */
    var happnerServerStopJob = this.__jobBuilder
        .clear()
        .withHeading('stopping happner server')
        .withStep('stopping happner server')
        .withDoFunc(function (params, cb) {

            var _this = this;

            self.__happner.stop(function (e) {

                if (e)
                    return cb(e);

                cb(null, _this.output);
            })
        })
        .build();

    return [
        happnerServerJob,
        meshClientJob,
        clientConnectJob,
        eventSubscribeJob,
        disconnectClientJob,
        happnerServerStopJob
    ];
};

JobUtil.prototype.__addToOutput = function (scope, name, value, isText) {
    scope.output.push({name: name, value: value, isText: isText});
};
