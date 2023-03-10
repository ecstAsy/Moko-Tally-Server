/*
 * @Author: ecstAsy
 * @Date: 2023-03-09 17:10:01
 * @LastEditTime: 2023-03-10 17:40:54
 * @LastEditors: ecstAsy
 */

module.exports = () => {
	// 返回一个中间件处理函数
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);

      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error =
        status === 500 && ctx.app.config.env === 'prod'
          ? '网络错误！'
          : err.message;

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = {
        code: status,
        message: error
      };
      if (status === 10001) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
    }
  };
};