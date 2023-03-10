/*
 * @Author: ecstAsy
 * @Date: 2023-03-09 17:01:32
 * @LastEditTime: 2023-03-09 17:08:32
 * @LastEditors: ecstAsy
 */

module.exports = {
  returnBody (status = true, body = {}, msg = 'success', code = 200) {
    this.status = code;
    this.body = {
      status: status,
      data: body,
      message: msg,
      code: code
    }
  }
}