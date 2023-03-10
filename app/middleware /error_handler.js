/*
 * @Author: ecstAsy
 * @Date: 2023-03-09 17:10:01
 * @LastEditTime: 2023-03-10 10:20:27
 * @LastEditors: ecstAsy
 */


module.exports = (option, app) => {
  return async function errorHandlers(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在app上触发一个error事件，框架会记录一条错误日志
      app.emit('error', err, this);
      const status = err.status || 500;
      // 生成环境下 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message
      // 从error对象上读出各个属性，设置到响应中
      ctx.body = {
        code: status, // 服务端自身的处理逻辑错误(包含框架错误500 及 自定义业务逻辑错误533开始 ) 客户端请求参数导致的错误(4xx开始)，设置不同的状态码
        error:error
      }
      if(status === 422){
        ctx.body.detail = err.errors;
      }
      ctx.status = 200
    }
  }
}