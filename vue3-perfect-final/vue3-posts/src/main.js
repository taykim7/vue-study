import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import person from './plugins/person';
import globalComponents from './plugins/global-components';
// import focus from './directives/focus';
import globalDirectives from './plugins/global-directives';

const app = createApp(App);

// 커스텀 디렉티브 전역 등록
// app.directive('focus', focus);

app.use(router);
// 작성한 플러그인 등록
app.use(funcPlugins);
app.use(objPlugins, { name: 'tay' });
app.use(person, { name: '수정한이름' });

// 플러그인화한 여러 컴포넌트 전역 등록
app.use(globalComponents);

// 플러그인화한 여러 커스텀 디렉티브 전역 등록
app.use(globalDirectives);

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// Vite의 환경변수 접근
console.log('MODE : ', import.meta.env.MODE);
console.log('BASE_URL : ', import.meta.env.BASE_URL);
console.log('PROD : ', import.meta.env.PROD);
console.log('DEV : ', import.meta.env.DEV);
console.log('VITE_APP_API_URL : ', import.meta.env.VITE_APP_API_URL);
