import IUserModel = require('./interfaces/UserModel')

class UserModel {
  private _userModel: IUserModel

  constructor(userModel: IUserModel) {
    this._userModel = userModel
  }

  get email(): string {
    return this._userModel.email
  }
}

export = UserModel
