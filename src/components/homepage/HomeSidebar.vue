<template>
	<div>
		<SidebarMenu @search-input-emit="search" />
	</div>
</template>

<script>
import SidebarMenu from '@/utlities/SidebarMenu.vue';

export default {
	name: 'App',
	components: {
		SidebarMenu,
	},
	methods: {
		search(val) {
			console.log(val);
		},
	},
};
</script>

<style></style>
