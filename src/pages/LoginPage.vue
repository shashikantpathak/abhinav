<template>
	<div class="justify-between items-start w-full flex">
		<JoinPage />
		<LoginHandler />
	</div>
</template>

<script>
import JoinPage from '@/components/accesscontroller/JoinPage.vue';
import LoginHandler from '@/components/accesscontroller/LoginHandler.vue';
export default {
	components: { LoginHandler, JoinPage },
};
</script>
