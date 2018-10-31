## `校园云商城项目(运行之前请先安装依赖npm install)`
### `项目描述`
1. `本项目为手机商城 Web App (SPA)`
2. `包括商品，商品分类，购物车，用户等多个子模块`
3. `使用Vue 全家桶+ES6+Webpack 等前端最新技术`
4. `采用模块化、组件化、工程化的模式进行开发`
### `技术选型`
1. `前端数据处理/交互/组件化`
 + `vue`
 + `vue-router`
 + `vuex`
 + `vant UI库`
 + `better-scroll`

2. `前后台交互`
 + `mock数据：mockjs`
 + `接口测试：postman`
 + `ajax请求 ：axios`

3. `模块化`
 + ES6
 + `babel`
4. 项目构建/工程化 
 + `webpack`
 + `vue-cli`

### `项目初始化 使用 vue-cli(脚手架)搭建项目`
1. `Vue-cli 是 vue 官方提供的用于搭建基于 vue+webpack+es6 项目的脚手架工具`
2. `操作:`
 ```js
  npm install -g vue-cli
  vue init webpack gshop
  cd gshop
  npm install
  npm run dev
  访问: localhost:8080
 ```
### `前端路由设计`

| `路由名称`  |`路由路径` | `说明`  |
| --------| ----| ----- |
| `注册` |`/register`   | `不显示底部导航` |
| `登录` |`/login`   | `不显示底部导航` |
| `主页` |`/home`   | `显示底部导航` |
| `商品分类` |`/category`   | `显示底部导航` |
| `购物车` |`/shopcart`   | `显示底部导航` |
| `我的` |`/profile`   | `显示底部导航` |
| `搜索` |`/search`   | `不显示底部导航` |
| `商品详情` |`/productdetail`   | `不显示底部导航` |

### `项目目录结构`
`gshop`
`|-- build : webpack 相关的配置文件夹`

`|-- config: webpack 相关的配置文件夹`

`|-- index.js: 指定的后台服务的端口号和静态资源文件夹`

`|-- node_modules`

`|-- src : 源码文件夹`

`|-- main.js: 应用入口 js`

`|-- static: 静态资源文件夹`

`|-- .babelrc: babel 的配置文件`

`|-- .gitignore: git 版本管制忽略的配置`

`|-- index.html: 主页面文件`

`|-- package.json: 应用包配置文件`

`|-- README.md: 应用描述说明的 readme 文件`

`src`
`|-- api 接口文件夹`

`|-- common 公共资源文件夹`

`|-- components 静态组件文件夹`

`|-- filters 过滤器文件夹`

`|-- mock 模拟数据文件夹`

`|-- pages 路由组件文件夹`

`|-- router 前端路由文件夹`

`|-- store vuex 管理文件夹`

`|-- App.vue 根组件`

`|-- main.js 付款文件`

### `编码测试及发布项目`
1. `编码测试`
`npm run dev`

`访问: http://localhost:8080`

`编码, 自动编译打包, 查看效果`
2. `打包发布`

`npm run build`

`npm install -g serve`

`serve dist`

`访问: http://localhost:4001`
