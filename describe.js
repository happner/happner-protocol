var Describer = require('./protocol-describer');
var describer = new Describer();

describer.processJobs(function (err, result) {
    process.exit();
});
