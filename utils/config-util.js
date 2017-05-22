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
                    data: {
                        config: {
                            filename: path.join(__dirname, '..', path.sep, 'db', path.sep, 'testnode_db.nedb')
                        }
                    },
                    protocol: {
                        config: {
                            inboundLayers: layerUtil.getInboundLayers(currentJob),
                            outboundLayers: layerUtil.getOutboundLayers(currentJob)
                        }
                    }
                }
            },
            modules: {},
            components: {},
            web: {
                //routes: {
                //    '/': serveStatic(__dirname + '/www')
                //}
            }
        }
    }
};