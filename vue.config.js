module.exports = {
  // eslint-disable-next-line no-unused-vars
  chainWebpack: config => {
    // if (process.env.NODE_ENV === "production") {
    //   // 为生产环境修改配置...
    // } else {
    // 为开发环境修改配置...
    config.module
      .rule("vue-pretty-logger")
      .test(/\.vue$|\.js$/)
      .use("vue-pretty-logger")
      .loader("vue-pretty-logger")
      .end();
    // }
  }
};

// module.exports = {
//     chainWebpack: config => {
//         // GraphQL Loader
//         config.module
//             .rule('graphql')
//             .test(/\.graphql$/)
//             .use('graphql-tag/loader')
//             .loader('graphql-tag/loader')
//             .end()
//     }
// }
