<template>
	<section class="relative bg-texture w-full mt-20">
		<div class="items-center pt-24 flex justify-center w-full">
			<div class="flex flex-col">
				<div class="ml-4">
					<RectangularToggleButton
						width="w-32"
						outerwidth="w-64"
						btn-text-1="LIGHT THEME"
						btn-text-2="DARK THEME"
						bgcolor="bg-skin-djuli-secondary-color"
						textcolor="text-skin-djuli-secondary-color"
					/>
				</div>

				<figure class="flex pt-4">
					<img
						src="@/assets/img/vectors/home-content.svg"
						alt=""
						class="max-w-full h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-lg"
					/>
				</figure>
			</div>
		</div>
	</section>
</template>

<script>
import RectangularToggleButton from '@/utlities/RectangularToggleButton.vue';
export default {
	components: {
		RectangularToggleButton,
	},
};
</script>

<style></style>
