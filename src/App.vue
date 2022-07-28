<template>
	<section class="bg-white">
		<TheHeader v-if="true"></TheHeader>
		<router-view></router-view>
		<TheFooter />
	</section>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>
