import Router from "@koa/router";

import RouteApi from './api/api_v1.mjs';
import RouteWebSite from './website/page_routes.mjs';


const router = new Router();

router.use('/api', RouteApi.routes(), RouteApi.allowedMethods());
router.use('/web', RouteWebSite.routes(), RouteWebSite.allowedMethods());

export default router;

