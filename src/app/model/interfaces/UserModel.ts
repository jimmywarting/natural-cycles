/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require('mongoose')

interface UserModel extends mongoose.Document {
  email: string
}

export = UserModel
