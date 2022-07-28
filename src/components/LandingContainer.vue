<template>
	<section class="w-96 mx-auto flex justify-between flex-col">
		<BaseRectangularToggleButton
			width="w-48"
			outerwidth="w-96"
			btn-text-1="See how"
			btn-text-2="Subscribe"
			bgcolor="bg-skin-djuli-primary-color"
			textcolor="text-skin-djuli-primary-color"
		/>
		<div class="flex justify-end items-center font-normal py-3">
			<span class="text-xsss text-skin-grey-faint">Starts at</span>
			&nbsp;
			<span class="text-xss text-skin-grey-muted"> 5 Euro*</span>
		</div>
	</section>
</template>

<script>
import BaseRectangularToggleButton from '@/utlities/BaseRectangularToggleButton.vue';
export default {
	components: {
		BaseRectangularToggleButton,
	},
};
</script>

<style></style>
