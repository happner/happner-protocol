module.exports = JobBuilder;

var configUtil = require('../utils/config-util');

function JobBuilder() {
    //this.__output = [];
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

JobBuilder.prototype.withOutput = function (output) {
    this.__output = output;
    return this;
};

JobBuilder.prototype.clear = function () {
    //this.__output.length = 0;
    //this.__output = [];
    this.__heading = null;
    this.__step = null;
    this.__parameters = null;
    this.__doFunc = null;

    return this;
};

JobBuilder.prototype.build = function () {

    var self = this;

    // closure magic - this ensures that the builder can be cleared without variable references being lost, in
    // particular the 'do' function
    var createResult = function () {
        var result = {
            heading: self.__heading,
            step: self.__step,
            parameters: self.__parameters != null ? self.__parameters : {},
            do: self.__doFunc,
            output: self.__output
        };

        result.parameters.config = configUtil.getConfig(result);
        return result;
    };

    var result = createResult();
    this.clear();
    return result;
};