var jsonUtil = require('./json-util');
var TestError = require('../errors/test-error');
var ephemeralUtil = require('./ephemeral-util');
var ephemerals = ephemeralUtil.getEpehemerals();
var outputType = require('../constants/constants').OUTPUT_TYPE;

module.exports = {

    getInboundLayers: function (currentJob) {

        return [

            function (message, cb) {

                if (!currentJob)
                    return cb(null, message);

                currentJob.output.push({
                    type: outputType.CLIENT_SERVER,
                    value: message.raw,
                    format: false
                });

                if (['throw/an/error', '/ALL@/subscription/error', 'remove/failed'].indexOf(message.raw.path) > -1)
                    return cb(new TestError('a fly in the ointment'));
                else
                    cb(null, message);
            }
        ];
    },

    getOutboundLayers: function (currentJob) {

        return [

            function (message, cb) {

                if (!currentJob)
                    return cb(null, message);

                var result = {type: outputType.SERVER_CLIENT, value: null, format: false};

                if (message.response)
                    result.value = message.response;
                else {

                    if (message.request && message.request.publication)
                        result.value = message.request.publication;
                    else
                        result.value = message.raw;

                    result.format = true
                }

                currentJob.output.push(result);

                cb(null, message);
            }
        ];
    }
};

