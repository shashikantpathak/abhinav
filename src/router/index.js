import { createRouter, createWebHistory } from 'vue-router';
// import TheLandingPage from '@/pages/TheLandingPage.vue';
// import LoginPage from '@/pages/LoginPage.vue';
import HomePage from '@/pages/HomePage.vue';

const UnAuthorizedRoutes = [
	{ path: '/', name: 'HomePage', component: HomePage },
	{
		path: '/sidebar',
		name: 'HomeSidebar',
		component: () => import('@/components/homepage/HomeSidebar.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...UnAuthorizedRoutes],
});
export default router;
