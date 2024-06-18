import { createApp } from 'vue'
import ElementPlus from 'element-plus'

// element icons
import * as Icons from "@element-plus/icons-vue";
// import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'


// element css
import "element-plus/dist/index.css";

import "@/styles/var.scss";
import "@/styles/reset.scss";
import "@/styles/common.scss";
// custom element css
import "@/styles/element.scss";

// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";






// vue Router
import router from "@/router";
import App from '@/App.vue'


  



const app = createApp(App)
// register the element Icons component
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus)
app.use(router)
app.mount('#app')
