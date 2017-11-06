import express = require('express')
import bodyParser = require('body-parser')

import BaseRoutes = require('./../../routes/base/BaseRoutes')

class MiddlewaresBase {
  static get configuration() {
    var app = express()
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(new BaseRoutes().routes)

    return app
  }
}

export = MiddlewaresBase
