/*
 * @Author: ecstAsy
 * @Date: 2023-03-09 17:01:32
 * @LastEditTime: 2023-03-10 17:58:15
 * @LastEditors: ecstAsy
 */

module.exports = {
  returnBody (body, msg = 'success', code = 0) {
    this.status = 200;
    this.body = {
      data: body,
      message: msg,
      code: code
    }
  }
}