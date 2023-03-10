'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.model.User.find()
    ctx.returnBody(true, {
      data:res
    }, "成功");
  }
}

module.exports = UserController;