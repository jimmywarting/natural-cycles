var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UserSchema = require('./../dataAccess/schemas/UserSchema');
var RepositoryBase = require('./base/RepositoryBase');

var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        _super.call(this, UserSchema);
    }
    return UserRepository;
})(RepositoryBase);

module.exports = UserRepository;
