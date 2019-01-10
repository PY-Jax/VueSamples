<!-- live-server安装使用 -->
npm install live-server -g

<!-- 目录中启动 -->
live-server

<!-- 初始化 -->
npm init

<!-- 设置启动及端口 -->
在package.json中的scripts增加
"scripts": {
  "server": "live-server ./ --port=6666"
}
启动：npm run server

<!-- 引入vue -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>