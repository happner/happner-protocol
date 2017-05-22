module.exports = JobBuilder;

var configUtil = require('../utils/config-util');

function JobBuilder() {
}

JobBuilder.prototype.withHeading = function (heading) {
    this.__heading = heading;
    return this;
};

JobBuilder.prototype.withStep = function (step) {
    this.__step = step;
    return this;
};

JobBuilder.prototype.withParameters = function (parameters) {
    this.__parameters = parameters;
    return this;
};

JobBuilder.prototype.withDoFunc = function (doFunc) {
    this.__doFunc = doFunc;
    return this;
};

JobBuilder.prototype.clear = function(){
    this.__heading = null;
    this.__step = null;
    this.__parameters = null;
    this.__doFunc = null;

    return this;
};

JobBuilder.prototype.build = function () {

    var result = {
        heading: this.__heading,
        step: this.__step,
        parameters: this.__parameters != null ? this.__parameters : {},
        do: this.__doFunc,
        output: []
    };

    result.parameters.config = configUtil.getConfig(result);

    return result;
};