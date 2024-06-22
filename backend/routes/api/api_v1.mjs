
import Router from "@koa/router";

const router = new Router();

import util from 'util';

router.get("/", (ctx) => {
    // console.log(ctx.userAgent)
    // console.log(ctx.ipv4)
    // console.log(ctx.userDevice)
    ctx.body = [
        {
            name: "Event 1",
            date: "2021-09-01"
        },
        {
            name: "Event 2",
            date: "2021-09-02"
        }
    ]
    ctx.throw(500, "xx Server Error")
});
router.get("/test", (ctx) => { 
    ctx.body = "Events List!"
});
router.post("/add", (ctx) => {
    ctx.body = "Event Posted!"
    ctx.throw(500, "xxxxx Server Error")
});

export default router;
