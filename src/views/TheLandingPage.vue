<template>
	<main class="text-center mx-auto pt-20">
		<div class="text-4xl text-black font-normal leading-tight pb-6">
			Experience sensor <br />
			data as never before.
		</div>
		<section class="w-96 mx-auto flex justify-between flex-col">
			<RectangularToggleButton
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

		<section class="relative bg-texture w-full mt-20">
			<div
				class="items-center flex justify-between flex-col pt-24 w-full"
			>
				<div class="flex flex-col">
					<div class="mr-4">
						<RectangularToggleButton
							width="w-48"
							outerwidth="w-96"
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
						/>
					</figure>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import RectangularToggleButton from '@/utlities/RectangularToggleButton.vue';
export default { components: { RectangularToggleButton } };
</script>
