var layerService = require('./../services/layer-service');

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
                            filename: __dirname + '/db/testnode_db.nedb'
                        }
                    },
                    protocol: {
                        config: {
                            inboundLayers: layerService.getInboundLayers(currentJob),
                            outboundLayers: layerService.getOutboundLayers(currentJob)
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