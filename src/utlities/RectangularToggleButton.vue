<template>
	<div
		class="gap-2 border border-gray-100 rounded-lg p-1 flex justify-between"
		:class="outerwidth"
	>
		<div
			:class="[
				btnStatus ? 'green-btn' : 'green-txtbtn ',
				width,
				btnStatus ? bgcolor : 'white',
				btnStatus ? 'text-white' : textcolor,
			]"
			@click="toggleButton"
		>
			<div class="text-xs">{{ btnText1 }}</div>
		</div>

		<div
			:class="[
				!btnStatus ? 'green-btn' : 'green-txtbtn',
				width,
				!btnStatus ? bgcolor : 'white',
				!btnStatus ? 'text-white' : textcolor,
			]"
			@click="toggleButton"
		>
			<div class="text-xs">{{ btnText2 }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		width: { type: String, default: 'w-auto' },
		btnText1: { type: String, default: '' },
		btnText2: { type: String, default: '' },
		outerwidth: { type: String, default: '' },
		bgcolor: { type: String, default: '' },
		textcolor: { type: String, default: '' },
	},
	data() {
		return {
			btnStatus: false,
		};
	},
	methods: {
		toggleButton() {
			this.btnStatus = !this.btnStatus;
		},
	},
};
</script>

<style></style>
