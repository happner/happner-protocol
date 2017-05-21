var traverse = require('traverse');

module.exports = {

    cleanJSON: function (json, ephemerals) {

        var cloned = JSON.parse(JSON.stringify(json));

        traverse(cloned).forEach(function (value) {

            if (value && this.key && (ephemerals && ephemerals[this.key] != null)) {

                if (ephemerals[this.key].condition) this.update(ephemerals[this.key].condition(value, this, cloned));

                else this.update('{{' + ephemerals[this.key] + '}}');
            }

        });

        return '```json\r\n' + JSON.stringify(cloned, null, 2) + '\r\n```'

    }
};

