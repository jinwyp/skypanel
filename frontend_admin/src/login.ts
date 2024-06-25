import { createApp } from 'vue'
// import ElementPlus from 'element-plus'

// element icons
// import * as Icons from "@element-plus/icons-vue";
// import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'


// element css
// import "element-plus/dist/index.css";

import "@/styles/var.scss";
import "@/styles/reset.scss";
import "@/styles/common.scss";
// custom element css
import "@/styles/login_index.scss";

// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";






// vue Router
import Login from '@/login.vue'


  



const app = createApp(Login)
// register the element Icons component

app.mount('#app')
