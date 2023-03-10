/*
 * @Author: ecstAsy
 * @Date: 2023-03-10 15:05:28
 * @LastEditTime: 2023-03-10 15:05:36
 * @LastEditors: ecstAsy
 */

module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: 'Not Found' };
      } else {
        ctx.body = '<h1>Page Not Found</h1>';
      }
    }
  };
};