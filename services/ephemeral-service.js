module.exports = {
    getEpehemerals: function () {

        return {

            timestamp: 'number, utc',
            _id: 'matches path if nedb, generated if mongo',
            eventId: 'number, matches handler in client',
            name: {
                condition: function (name, property, message) {

                    if (message && message._meta && message._meta.status == 'error') {
                        //do nada, we want to see the error
                    }
                    else if (message && message._meta && message._meta.action == 'describe')
                        name = '{{string, server name - silly if not configured}}';
                    else if (property.parent && property.parent.node && property.parent.node.name == 'happn')
                        name = '{{string, server name - silly if not configured}}';
                    else name = '{{string}}';

                    return name;
                }
            },
            publicKey: 'ECDSA public key',
            id: 'guid',
            created: 'number, utc',
            modified: 'number, utc',
            token: 'string, jwt token',
            sessionId: 'guid',
            path: {
                condition: function (path, property, message) {

                    if (path.indexOf('set/sibling/data') > -1 && message && message.action == null)
                    //coming from server
                        path = 'set/sibling/data/[unique generated id]';

                    if (path.indexOf('/_TAGS/set/some/data/') > -1)
                        path = '{{/_TAGS/set/some/data/[unique generated id]}}';

                    return path;
                }
            }
        }
    }
};