import { createApp } from 'vue';
import '@/assets/css/index.css';
import App from './App.vue';
import router from '@/router';

const app = createApp(App);

// app.config.errorHandler = (err, vm, info) => {
// 	alert('Error ');
// 	console.log(err);
// 	console.log(vm);
// 	console.log(info);
// };

//Should be enabled only in development mode to measure component performance

if (!import.meta.env.PROD) {
	app.config.performance = true;
}

app.use(router);

app.mount('#app');
