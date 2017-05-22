var Happner = require('happner-2');
var HappnerClient = require('happner-client');

var jobBuilder = new (require('../builders/job-builder'))();

module.exports = {

    getJobs: function (protocol, version) {

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
            /*
             create Happner server
             */
            jobBuilder
                .withHeading('happner protocol specification')
                .withStep('start happner server')
                .withDoFunc(function (params, cb) {

                    var __this = this;

                    Happner.create(params.config, function (e, service) {
                        self.__happner = service;
                        cb(null, __this.output);
                    });
                })
                .build(),
            /*
             create mesh client and api model
             */
            jobBuilder
                .clear()
                .withHeading('create happner client')
                .withStep('create happner client and construct api')
                .withDoFunc(function (params, cb) {

                    var __this = this;

                    self.__client = new HappnerClient();

                    self.__model = {
                        testApi: {
                            version: '1.0.0',
                            methods: {
                                getWidget: {}
                            }
                        }
                    };

                    self.__api = self.__client.construct(self.__model);

                    cb(null, __this.output);
                })
                .build(),
            /*
             login
             */
            jobBuilder
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
                .build(),
            /*
             disconnect client
             */
            jobBuilder
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
                .build(),
            /*
             stop happner server
             */
            jobBuilder
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
                .build()
        ];
    }
};
