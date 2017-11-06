var express = require('express');
var UserRoutes = require('./../UserRoutes');
var app = express();

var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.use('/', new UserRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
})();

module.exports = BaseRoutes;
