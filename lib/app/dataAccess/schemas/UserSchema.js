var DataAccess = require('./../../dataAccess/DataAccess');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                email: {
                    type: String,
                    trim: true,
                    lowercase: true,
                    unique: true,
                    required: 'Email address is required',
                    match: [
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        'Please fill a valid email address'
                    ]
                }
            });

            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
})();
var schema = mongooseConnection.model('Useres', UserSchema.schema);
module.exports = schema;
