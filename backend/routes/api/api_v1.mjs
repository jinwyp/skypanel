
import Router from "@koa/router";

const router = new Router();

import util from 'util';

router.get("/", (ctx) => {
    console.log(ctx.userAgent)
    console.log(ctx.ipv4)
    console.log(ctx.userDevice)
    ctx.body = "test!"
});
router.get("/test", (ctx) => { 
    ctx.body = "Events List!"
});
router.post("/add", (ctx) => {
    ctx.body = "Event Posted!"}
);

export default router;
