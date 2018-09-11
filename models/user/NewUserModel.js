const joi = require('joi')
const BaseModel = require('../BaseModel')
const schema = require('./schema')

class NewUserModel extends BaseModel {
  static get schema () {
    return {
      ...schema.create,
      passwordHash: joi.string().required(),
      email: joi.string().email().min(6).max(30).required()
    }
  }
}

module.exports = NewUserModel
