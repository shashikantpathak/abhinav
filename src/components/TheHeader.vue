<template>
	<section class="flex justify-between items-center bg-white opacity-95 filter drop-shadow-sm flex-row px-28 py-6">
		<figure>
			<img src="@/assets/img/logo/djulilogo.svg" alt="" />
		</figure>
		<div class="flex items-center justify-end gap-10 order-1 text-skin-basegrey text-sm">
			<router-link to="/" class="text-skin-djuli-primary hover:text-green-500">Features</router-link>
			<router-link to="/" class="hover:text-green-500">Pricing</router-link>
			<router-link to="/" class="hover:text-green-500">Sign up/Login</router-link>
			<div class="border border-dashed rotate-90 order-3 w-3 border-lightgreen"></div>
			<router-link to="/" class="flex flex-row items-center p-0 gap-1 order-4 hover:text-green-500">
				<span>Contact</span>
				<span>
					<figure>
						<img src="@/assets/img/header/contacticon.svg" alt="" />
					</figure>
				</span>
			</router-link>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style></style>
