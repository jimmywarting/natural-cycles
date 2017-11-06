import DataAccess = require('./../../dataAccess/DataAccess')
import IUserModel = require('./../../model/interfaces/UserModel')

var mongoose = DataAccess.mongooseInstance
var mongooseConnection = DataAccess.mongooseConnection

class UserSchema {
  static get schema() {
    var schema = mongoose.Schema({
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please fill a valid email address',
        ],
      },
    })

    return schema
  }
}
var schema = mongooseConnection.model<IUserModel>('Useres', UserSchema.schema)
export = schema
