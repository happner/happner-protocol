module.exports = {
    name: 'TestNode',
    happn: {
        port: 50505,
        persist: true,
        //secure: true,
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
};