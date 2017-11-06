var express = require('express');
var UserController = require('./../../controllers/UserController');

console.log(UserController);

var router = express.Router();

var UserRoutes = (function () {
    function UserRoutes() {
        this._userController = new UserController();
    }
    Object.defineProperty(UserRoutes.prototype, "routes", {
        get: function () {
            var controller = this._userController;
            router.get('/users', controller.retrieve);
            router.post('/users', controller.create);
            router.put('/users/:_id', controller.update);
            router.get('/users/:_id', controller.findById);
            router.delete('/users/:_id', controller.delete);

            return router;
        },
        enumerable: true,
        configurable: true
    });
    return UserRoutes;
})();

module.exports = UserRoutes;
