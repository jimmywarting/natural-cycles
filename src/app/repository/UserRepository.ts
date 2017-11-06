import UserModel = require('./../model/UserModel')
import IUserModel = require('./../model/interfaces/UserModel')
import UserSchema = require('./../dataAccess/schemas/UserSchema')
import RepositoryBase = require('./base/RepositoryBase')

class UserRepository extends RepositoryBase<IUserModel> {
  constructor() {
    super(UserSchema)
  }
}

export = UserRepository
