var layerUtil = require('./../utils/layer-util');
var path = require('path');

module.exports = {

    getConfig: function (currentJob) {

        return {
            name: 'TestNode',
            happn: {
                port: 50505,
                persist: true,
                secure: false,
                //adminPassword: 'password',
                log_level: 'info|error|warning',
                services: {
                    security: {
                        config: {
                            adminUser: {
                                password: 'password'
                            }
                        }
                    },
                    //data: {
                    //    config: {
                    //        filename: path.join(__dirname, '..', path.sep, 'db', path.sep, 'testnode_db.nedb')
                    //    }
                    //},
                    protocol: {
                        config: {
                            inboundLayers: layerUtil.getInboundLayers(currentJob),
                            outboundLayers: layerUtil.getOutboundLayers(currentJob)
                        }
                    }
                }
            },
            modules: {
                componentName: {
                    instance: {
                        methodName: function (callback) {
                            callback(null, {
                                key: 'value'
                            });
                        },
                        causeEventMethod: function ($happn, callback) {

                            console.log('ABOUT TO EMIT...');
                            $happn.emit('event/name', {key: 'value'});

                            callback(null, {
                                key: 'value'
                            });
                        },
                        erroringMethodName: function (callback) {
                            callback(new Error('There has been an error calling this function!'));
                        }
                    }
                }
            },
            components: {
                componentName: {}
            },
            web: {
                //routes: {
                //    '/': serveStatic(__dirname + '/www')
                //}
            }
        }
    }
};