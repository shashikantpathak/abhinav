<template>
	<main class="text-center mx-auto pt-20">
		<div class="text-4xl text-black font-normal leading-tight pb-6">
			Experience sensor <br />
			data as never before.
		</div>
		<LandingContainer />
		<section class="text-sm">
			<div class="pb-4 text-skin-grey-muted font-light pt-28">
				Djuli is a Cloud database platform developed by Zimmer Peacock
				<br />
				to analyse electrochemical sensor and biosensor data.
			</div>
			<figure class="flex justify-center">
				<img src="@/assets/img/logo/poweredByZp.svg" alt="" />
			</figure>
		</section>
		<TheThemeChangerContainer />
		<TheFeature />
		<TheTestinomials />
		<ThePricing />
	</main>
</template>

<script>
import TheFeature from '../components/TheFeature.vue';
import TheTestinomials from '../components/TheTestinomials.vue';
import ThePricing from '../components/ThePricing.vue';
import TheThemeChangerContainer from '../components/TheThemeChangerContainer.vue';
import LandingContainer from '../components/LandingContainer.vue';

export default {
	components: {
		TheFeature,
		TheTestinomials,
		ThePricing,
		TheThemeChangerContainer,
		LandingContainer,
	},
	data() {
		return {
			featuresList: [
				'Invite others to your data',
				'Invite others to your data',
				'Invite others to your data',
				'Invite others to your data',
				'Invite others to your data',
				'Invite others to your data',
			],
		};
	},
};
</script>
