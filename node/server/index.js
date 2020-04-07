const Koa = require("koa");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");

const app = new Koa();
app.use(cors());
app.use(bodyParser());

const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => {
  console.log("app listens at port 8080");
});
