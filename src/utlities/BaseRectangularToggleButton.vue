<template>
	<div
		:class="[
			outerwidth,
			isFeaturebtnType
				? 'gap-2  p-1 flex justify-between '
				: 'border-2 border-gray-200 rounded-lg gap-2  p-1 flex justify-between',
		]"
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
		btnActiveStatus: { type: Boolean, default: false },
		isFeaturebtnType: { type: Boolean, default: false },
	},
	data() {
		return {
			btnStatus: this.btnActiveStatus,
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
