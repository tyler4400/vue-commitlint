# vue-commitlint

使用[开箱即用的代码提交规范](https://juejin.im/post/5ddc7baa6fb9a07ab07f661e)的一个示例
生成的changelog有点问题

[还可以参考这个，比较全面](https://zhuanlan.zhihu.com/p/51894196)

本项目还用来寻找日志输出工具，先是用了[consola](https://github.com/nuxt/consola#readme)

然后用了[debugout](https://github.com/inorganik/debugout.js)，效果不是很好，不支持level，而且很久没有维护了。

然后使用了[vue-pretty-logger](https://github.com/TaroXin/vue-pretty-logger)，看起来很不错，然而发现局限也很大，且华而不实。


下面两个可以让整个网页可编辑，不用审查元素
 document.designMode = 'on'
 document.body.contentEditable = true;
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
