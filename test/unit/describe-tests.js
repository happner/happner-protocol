var expect = require('expect.js');
var path = require('path');

var Mocker = require('mini-mock');
var JobBuilder = require('../../builders/job-builder');
var JobUtil = require('../../utils/job-util');
var ReportUtil = require('../../utils/report-util');

var DescribeProtocol = require('../../protocol-describer');

describe('unit - describe tests', function () {

    this.timeout(30000);


    context('', function () {

        beforeEach('setup', function (done) {

            var mocker = new Mocker();
            var jobBuilder = new JobBuilder();
            var mockJobs = createMockJobs(jobBuilder);

            var self = this;

            self.__pkg = {};

            self.__jobUtil = mocker.mock(JobUtil.prototype)
                .withSyncStub('getJobs', mockJobs)
                .create();

            self.__reportUtil = mocker.mock(ReportUtil.prototype)
                .withSyncStub('writeReportToFile', {})
                .create();

            done();
        });

        afterEach('stop', function (done) {
            done();
        });

        context('executeDosing', function () {

            it('successfully executes', function (done) {

                var self = this;

                var describeProtocol = new DescribeProtocol(self.__pkg, self.__jobUtil, self.__reportUtil);
                describeProtocol.processJobs(function (err, result) {

                    if (err)
                        done(err);

                    expect(self.__jobUtil.recorder['getJobs'].calls).to.equal(1);
                    expect(self.__reportUtil.recorder['writeReportToFile'].calls).to.equal(1);

                    done();
                });
            });
        });

        var createMockJobs = function (jobBuilder) {
            return [
                jobBuilder
                    .withHeading('test job 1')
                    .withStep('test step 1')
                    .withDoFunc(function (params, cb) {

                        var __this = this;

                        __this.output.push('TEST OUTPUT');
                        cb(null, __this.output);
                    })
                    .build(),

                jobBuilder
                    .clear()
                    .withHeading('test job 2')
                    .withStep('test step 2')
                    .withDoFunc(function (params, cb) {

                        var __this = this;

                        __this.output.push('TEST OUTPUT 2');
                        cb(null, __this.output);
                    })
                    .build()
            ];
        };

    });
});
