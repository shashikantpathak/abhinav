<template>
	<section class="flex flex-col relative py-20">
		<figure>
			<img
				src="@/assets/img/vectors/PRICING.png"
				alt=""
				class="float-left"
			/>
		</figure>
		<div class="flex flex-row justify-around items-center">
			<div class="flex flex-col gap-3">
				<div class="flex justify-center mb-4 filter drop-shadow-xl">
					<div
						class="flex flex-col md:flex-row md:max-w-lg rounded-lg shadow-lg"
					>
						<div
							class="w-4 h-64 md:h-auto object-cover md:w-4 rounded-t-lg md:rounded-none md:rounded-l-lg bg-skin-djuli-tertiary"
						></div>
						<div class="p-1 flex flex-col items-start px-2 py-4">
							<div
								class="text-black text-xs mb-2 flex justify-between w-full"
							>
								<span>Store electrochemical data</span>
								<span class="polygon-accrodion-up"></span>
							</div>
							<p
								class="text-skin-grey-muted text-left text-xss mb-4"
							>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam.
							</p>
							<p class="text-gray-600 text-xsss">See screens</p>

							<figure
								class="flex flex-row gap-y-4 pt-3 w-full space-x-2"
							>
								<img
									src="@/assets/img/toggleImages/rect-one.png"
									class="w-1/4 rounded-sm filter drop-shadow-text-xl max-w-full h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-lg"
									alt=""
								/>
								<img
									src="@/assets/img/toggleImages/rect-two.png"
									alt=""
									class="w-1/4 rounded-sm filter drop-shadow-text-xl max-w-full h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-lg"
								/>
								<img
									src="@/assets/img/toggleImages/rect-three.png"
									alt=""
									class="w-1/4 rounded-sm filter drop-shadow-text-xl max-w-full h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-lg"
								/>
								<img
									src="@/assets/img/toggleImages/rect-four.png"
									alt=""
									class="w-1/4 rounded-sm filter drop-shadow-text-xl max-w-full h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-lg"
								/>
							</figure>
						</div>
					</div>
				</div>
				<div v-for="(item, index) in featuresList" :key="index">
					<div
						class="flex flex-row justify-between items-center border border-gray-300 p-4 rounded-md h-14 w-full text-black text-xss"
					>
						<span>{{ item }}</span>
						<span class="polygon-accrodion"></span>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-3">
				<div class="text-left text-lg font-semibold">
					A Dashboard for lorem <br />
					ipsum dolor sit amet. <br />
					Consectetur adipiscing elit, <br />
					sed do eiusmod tempor.
				</div>
				<div class="pt-10">
					<RectangularToggleButton
						width="w-48"
						outerwidth="w-96"
						btn-text-1="See pricing"
						btn-text-2="Request a free demo"
						bgcolor="bg-skin-djuli-primary-color"
						textcolor="text-skin-djuli-primary-color"
						btn-active-status="true"
						is-featurebtn-type="true"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style></style>
