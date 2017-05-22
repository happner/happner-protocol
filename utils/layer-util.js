var jsonUtil = require('json-util');
var TestError = require('../errors/test-error');
var ephemeralUtil = require('./ephemeral-util');
var ephemerals = ephemeralUtil.getEpehemerals();

module.exports = {

    getInboundLayers: function (currentJob) {

        console.log('CURRENT JOB: ', currentJob);

        return [

            function (message, cb) {

                if (!currentJob)
                    return cb(null, message);

                currentJob.output.push('###client -> server');

                currentJob.output.push(jsonUtil.cleanJSON(message.raw));

                if (['throw/an/error', '/ALL@/subscription/error', 'remove/failed'].indexOf(message.raw.path) > -1)
                    return cb(new TestError('a fly in the ointment'));

                else cb(null, message);
            }
        ];
    },

    getOutboundLayers: function (currentJob) {
        return [

            function (message, cb) {

                if (!currentJob) return cb(null, message);

                currentJob.output.push('###server -> client');

                if (message.response)
                    currentJob.output.push(jsonUtil.cleanJSON(message.response));

                else {

                    if (message.request && message.request.publication)
                        currentJob.output.push(jsonUtil.cleanJSON(message.request.publication, null, 2));

                    else currentJob.output.push(jsonUtil.cleanJSON(message.raw, null, 2));
                }

                cb(null, message);
            }
        ];
    }
};

