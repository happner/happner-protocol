var expect = require('expect.js');
var path = require('path');

var DescribeProtocol = require('../../protocol-describer');

describe('unit - describe tests', function () {

    this.timeout(30000);

    context('', function () {

        beforeEach('setup', function (done) {
            done();
        });

        afterEach('stop', function (done) {
            done();
        });

        it('successfully executes', function (done) {

            var describeProtocol = new DescribeProtocol();
            describeProtocol.processJobs(function (err, result) {

                if (err)
                    done(err);

                done();
            });

        });
    });
});

