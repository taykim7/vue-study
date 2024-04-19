import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';

// app.component('AppCard', AppCard);

const app = createApp(App);

// App-level Provide
app.provide('app-message', 'App의 메세지');

// Vue2방식의 global property (setup에서는 접근할 수 없음..)
app.config.globalProperties.msg = '글로벌 프로퍼티';

// provide로 제공하면 접근가능
app.provide('msg', '글로벌 프로퍼티2');

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
