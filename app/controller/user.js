'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { account, password } = ctx.request.body;
    const Accounts = await ctx.model.User.find({ account });
    if (!Accounts.length) {
      return ctx.returnBody(null, "用户不存在！", 10001);
    }
    const currentUser = Accounts.find(item => item.password === password);
    if (!currentUser) {
      return ctx.returnBody(null, "密码错误！", 10002);
    } 
    return ctx.returnBody(currentUser);
  }
  async index() {
    const { ctx } = this;
    const res = await ctx.model.User.find()
    ctx.returnBody({
      data:res
    }, "成功");
  }
}

module.exports = UserController;