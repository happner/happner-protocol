var expect = require('expect.js');
var path = require('path');

var DescribeProtocol = require('../../describe');

describe('unit - describe tests', function () {

    this.timeout(30000);

    context('', function () {

        beforeEach('setup', function (done) {
            done();
        });

        afterEach('stop', function (done) {
            done();
        });

        context('executeDosing', function () {

            it('successfully executes', function (done) {

                var self = this;

                var describeProtocol = new DescribeProtocol();
                describeProtocol.processJobs(function (err, result) {

                    if (err)
                        done(err);

                    done();
                });
            });
        });
    });
});

