<template>
	<div>
		<!-- <TheHeader /> -->
		<PitchAndCta />
		<ThemeChanger />
		<TheFeatures />
		<TheTestinomials />
		<ThePricing />
		<!-- <TheFooter /> -->
	</div>
</template>

<script>
import PitchAndCta from '../components/landingpage/PitchAndCta.vue';
import ThemeChanger from '../components/landingpage/ThemeChanger.vue';
import TheFeatures from '../components/landingpage/TheFeatures.vue';
import TheTestinomials from '../components/landingpage/TheTestinomials.vue';
import ThePricing from '../components/landingpage/ThePricing.vue';

export default {
	components: {
		PitchAndCta,
		ThemeChanger,
		TheFeatures,
		TheTestinomials,
		ThePricing,
	},
};
</script>

<style></style>
