
import Router from "@koa/router";

const router = new Router();


router.get("/", (ctx) => { 
    ctx.body = "test!"
});
router.get("/test", (ctx) => { 
    ctx.body = "Events List!"
});
router.post("/add", (ctx) => {
    ctx.body = "Event Posted!"}
);

export default router;
