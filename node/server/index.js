const Koa = require("koa");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");

const app = new Koa();
app.use(cors());
app.use(bodyParser());

const router = new Router();

router.post("/vue-promised", async ctx => {
  const { sleep } = require("../utils");
  await sleep(2000);
  ctx.body = [
    { name: "张三" },
    { name: "李四" },
    { name: "王五" },
    { name: "马六" }
  ];
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
  console.log("app listens at port 3000");
});
