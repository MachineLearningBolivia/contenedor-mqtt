import "./style.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
import * as IoIcons from "oh-vue-icons/icons/io";
import * as CoreUI from "oh-vue-icons/icons/co";
import * as FontAwesom from "oh-vue-icons/icons/fa"
import * as BootstrapIcons from "oh-vue-icons/icons/bi"
import * as GameIcons from "oh-vue-icons/icons/gi"
import * as WeatherIcons from "oh-vue-icons/icons/wi"
const Io =Object.values({...IoIcons})
const Co = Object.values({...CoreUI})
const Fa = Object.values({...FontAwesom})
const Bi = Object.values({...BootstrapIcons})
const Gi = Object.values({...GameIcons})
const Wi = Object.values({...WeatherIcons})
addIcons(FaFlag, RiZhihuFill, ...Io, ...Co, ...Fa, ...Bi, ...Gi, ...Wi);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount('#app');
