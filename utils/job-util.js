var Happner = require('happner-2');
var HappnerClient = require('happner-client');
var outputType = require('../constants/constants').OUTPUT_TYPE;

module.exports = JobUtil;

function JobUtil(jobBuilder) {
    this.__jobBuilder = jobBuilder != null ? jobBuilder : new (require('../builders/job-builder'))();
}

JobUtil.prototype.getJobs = function () {

    var self = this;

    var result = {outputs: [], jobs: []};

    /*
     create Happner server
     */
    var happnerServerJob = this.__jobBuilder
        .withHeading('start happner server')
        .withStep('start happner server')
        .withDoFunc(function (params, cb) {

            Happner.create(params.config, function (e, service) {
                self.__happner = service;
                cb(null);
            });
        })
        .withOutput(result.outputs)
        .build();

    /*
     create mesh client and api model
     */
    var meshClientJob = this.__jobBuilder
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

            self.__addToOutput(__this, 'creating model: ', self.__model, outputType.CLIENT_ONLY);

            self.__api = self.__client.construct(self.__model);

            cb(null);
        })
        .withOutput(result.outputs)
        .build();

    /*
     login
     */
    var clientConnectJob = this.__jobBuilder
        .withHeading('connect happner client to happner server')
        .withStep('connect happner client to happner server')
        .withDoFunc(function (params, cb) {

            self.__client.connect({secure: false, port: 50505})
                .then(function () {
                    self.__clientToken = self.__client.token;
                    cb(null);
                });
        })
        .withOutput(result.outputs)
        .build();

    /*
     event subscribe
     */
    var eventSubscribeJob = this.__jobBuilder
        .withHeading('subscribe to mesh event')
        .withStep('subscribe to mesh event')
        .withDoFunc(function (params, cb) {

            self.__api.event.componentName.on('event/name', function () {
            }, function (err) {
                if (err)
                    return cb(err);

                cb(null);
            })
        })
        .withOutput(result.outputs)
        .build();

    /*
     invoke remote function
     */
    var functionInvokeJob = this.__jobBuilder
        .withHeading('invoke remote function')
        .withStep('invoke remote function')
        .withDoFunc(function (params, cb) {

            self.__api.exchange.componentName.causeEventMethod(function () {
                setTimeout(function (err) {

                    if (err)
                        return cb(err);

                    cb(null);
                }, 500);
            });
        })
        .withOutput(result.outputs)
        .build();

    /*
     disconnect client
     */
    var disconnectClientJob = this.__jobBuilder
        .withHeading('disconnect from happner server')
        .withStep('disconnect from happner server')
        .withDoFunc(function (params, cb) {

            self.__client.disconnect(function (err, result) {

                if (err)
                    return cb(err);

                cb(null);
            })
        })
        .withOutput(result.outputs)
        .build();

    /*
     stop happner server
     */
    var happnerServerStopJob = this.__jobBuilder
        .withHeading('stopping happner server')
        .withStep('stopping happner server')
        .withDoFunc(function (params, cb) {

            self.__happner.stop(function (e) {

                if (e)
                    return cb(e);

                cb(null);
            })
        })
        .withOutput(result.outputs)
        .build();

    result.jobs = [
        happnerServerJob,
        meshClientJob,
        clientConnectJob,
        eventSubscribeJob,
        functionInvokeJob,
        disconnectClientJob,
        happnerServerStopJob
    ];

    return result;
};

JobUtil.prototype.__addToOutput = function (scope, name, value, outputType) {
    scope.output.push({name: name, value: value, type: outputType});
};
