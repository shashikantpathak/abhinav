<template>
	<div>
		<TheHeader />
		<PitchAndCta />
		<ThemeChanger />
		<TheFeatures />
		<TheTestinomials />
		<ThePricing />
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/landingpage/TheHeader.vue';
import PitchAndCta from '../components/landingpage/PitchAndCta.vue';
import ThemeChanger from '../components/landingpage/ThemeChanger.vue';
import TheFeatures from '../components/landingpage/TheFeatures.vue';
import TheTestinomials from '../components/TheTestinomials.vue';
import ThePricing from '../components/landingpage/ThePricing.vue';
import TheFooter from '../components/landingpage/TheFooter.vue';
export default {
	components: {
		TheHeader,
		PitchAndCta,
		ThemeChanger,
		TheFeatures,
		TheTestinomials,
		ThePricing,
		TheFooter,
	},
};
</script>

<style></style>
