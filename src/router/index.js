import { createRouter, createWebHistory } from 'vue-router';
import TheLandingPage from '@/pages/TheLandingPage.vue';

const UnAuthorizedRoutes = [
	{ path: '/', name: 'TheLandingPage', component: TheLandingPage },
	{
		path: '/about',
		name: 'About',
		component: () => import('@/pages/TheAbout.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...UnAuthorizedRoutes],
});
export default router;
