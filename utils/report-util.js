var fs = require('fs-extra');
var path = require('path');

module.exports = {

    writeReportToFile: function (protocolReport, protocol, version) {

        protocol = protocol == null ? 'unknown-version' : '1.0.0';

        var versionFolder = path.join(__dirname, '..', path.sep, 'automated-docs', path.sep, 'happner-2',
            path.sep, protocol, path.sep, version);

        var currentFolder = path.join(__dirname, '..', path.sep, 'automated-docs', path.sep, 'happner-2',
            path.sep, 'current', path.sep, version);

        fs.ensureDirSync(versionFolder);
        fs.ensureDirSync(currentFolder);

        var outputFile = path.join(versionFolder, path.sep, 'protocol.md');
        var outputFileCurrent = path.join(currentFolder, path.sep, 'protocol.md');

        try {
            fs.unlinkSync(outputFile);
            fs.unlinkSync(outputFileCurrent);

        } catch (e) {
        }

        protocolReport.forEach(function (line) {
            fs.appendFileSync(outputFile, line + '\r\n');
            fs.appendFileSync(outputFileCurrent, line + '\r\n');
        });

        return outputFile;
    }
};