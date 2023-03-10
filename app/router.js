'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.prefix('/api/v1') // 设置基础路由
  router.post('/user/login', controller.user.login)
  router.get('/user', controller.user.index);
};
