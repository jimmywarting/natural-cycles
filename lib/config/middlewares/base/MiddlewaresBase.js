var express = require('express');
var bodyParser = require('body-parser');

var BaseRoutes = require('./../../routes/base/BaseRoutes');

var MiddlewaresBase = (function () {
    function MiddlewaresBase() {
    }
    Object.defineProperty(MiddlewaresBase, "configuration", {
        get: function () {
            var app = express();
            app.use(express.static('public'));
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(new BaseRoutes().routes);

            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewaresBase;
})();

module.exports = MiddlewaresBase;
