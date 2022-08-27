<template>
	<div class="grid grid-flow-row gap-x-96">
		<p
			class="text-9xl font-black tracking-widest uppercase text-start features-text"
			style="font-size: 13rem"
		>
			Pricing
		</p>
		<div class="relative bg-white shadow rounded-lg w-full px-40 py-8">
			<div
				class="inline-flex flex-col gap-y-4 items-center justify-end w-96 h-44"
				style="left: 154px; top: 50px"
			>
				<p class="w-full text-5xl font-medium text-neutral-800">
					Making an offer, you can’t refuse.
				</p>
				<p class="w-full text-lg leading-relaxed text-stone-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor.
				</p>
			</div>
			<div class="w-60 h-16 absolute" style="left: 632px; top: 103px">
				<div
					class="flex space-x-8 items-center justify-end flex-1 h-full pl-1 pr-9 pt-1 pb-1.5 bg-white border rounded-xl border-gray-300"
				>
					<div class="w-28 h-full">
						<div
							class="flex items-center justify-center flex-1 h-full px-7 py-5 bg-green-500 shadow rounded-lg"
						>
							<p
								class="text-sm font-medium text-center text-white uppercase"
							>
								Monthly
							</p>
						</div>
					</div>
					<p
						class="text-sm font-medium text-center text-gray-800 uppercase"
					>
						Yearly
					</p>
				</div>
			</div>

			<div class="flex justify-between">
				<div v-for="i in 3" :key="i" class="'flex flex-row mt-16">
					<div
						class="inline-flex flex-col space-y-4 items-start justify-end w-64 h-96"
					>
						<p class="text-lg font-medium text-gray-900">
							Private Use
						</p>
						<div
							class="inline-flex space-x-2 items-center justify-end w-40 h-14 pr-4"
						>
							<div
								class="flex space-x-1 items-center justify-end w-20 h-full"
							>
								<p class="text-5xl font-thin text-indigo-500">
									€
								</p>
								<p class="text-5xl font-medium text-indigo-500">
									4
								</p>
								<p class="text-lg font-medium text-indigo-500">
									99
								</p>
							</div>
							<p class="text-xs text-gray-400">/ Month</p>
						</div>
						<p
							class="w-full text-base leading-normal text-gray-400"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit,.
						</p>
						<div
							class="inline-flex space-x-4 items-center justify-start"
						>
							<div
								class="relative"
								style="width: 24px; height: 24px"
							>
								<img
									src="@/assets/img/vectors/tick.svg"
									class="border-green-500 z-20 w-6 h-6 bg-green-50 rounded-xl"
								/>
							</div>
							<p class="text-base leading-normal text-gray-500">
								Free 1 GB
							</p>
						</div>
						<div
							class="inline-flex space-x-4 items-center justify-start"
						>
							<div
								class="relative"
								style="width: 24px; height: 24px"
							>
								<img
									src="@/assets/img/vectors/tick.svg"
									class="border-green-500 z-20 w-6 h-6 bg-green-50 rounded-xl"
								/>
							</div>
							<p class="text-base leading-normal text-gray-500">
								Complete documentation
							</p>
						</div>
						<div
							class="inline-flex space-x-4 items-center justify-start"
						>
							<div
								class="relative"
								style="width: 24px; height: 24px"
							>
								<img
									src="@/assets/img/vectors/tick.svg"
									class="border-green-500 z-20 w-6 h-6 bg-green-50 rounded-xl"
								/>
							</div>
							<p class="text-base leading-normal text-gray-500">
								Cloud storage
							</p>
						</div>
						<div
							class="inline-flex space-x-4 items-center justify-start"
						>
							<div
								class="relative"
								style="width: 24px; height: 24px"
							>
								<img
									src="@/assets/img/vectors/tick.svg"
									class="border-green-500 z-20 w-6 h-6 bg-green-50 rounded-xl"
								/>
							</div>
							<p class="text-base leading-normal text-gray-500">
								Secured data
							</p>
						</div>
						<div
							class="inline-flex space-x-4 items-center justify-start"
						>
							<div
								class="relative"
								style="width: 24px; height: 24px"
							>
								<img
									src="@/assets/img/vectors/tick.svg"
									class="border-green-500 z-20 w-6 h-6 bg-green-50 rounded-xl"
								/>
							</div>
							<p class="text-base leading-normal text-gray-500">
								2 team members
							</p>
						</div>
						<div
							class="inline-flex items-start justify-start px-10 py-4 bg-white border rounded border-indigo-500 mt-10"
						>
							<p
								class="text-sm font-medium text-center text-indigo-500 uppercase"
							>
								Choose plan
							</p>
						</div>
					</div>
				</div>
				<div
					class="inline-flex flex-col space-y-5 items-start justify-start p-6 bg-skin-primary-dark shadow rounded-2xl"
				>
					<p class="text-lg font-medium text-white">Company</p>
					<div
						class="inline-flex space-x-2 items-center justify-end w-40 h-14 pr-4"
					>
						<div
							class="flex space-x-1 items-center justify-end w-20 h-full"
						>
							<p class="text-5xl font-thin text-green-500">€</p>
							<p class="text-5xl font-medium text-green-500">4</p>
							<p class="text-lg font-medium text-green-500">99</p>
						</div>
						<p class="text-xs text-gray-400">/ Month</p>
					</div>
					<p class="w-64 text-base leading-normal text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing
						elit,.
					</p>
					<div
						class="inline-flex space-x-4 items-center justify-start"
					>
						<div class="relative" style="width: 24px; height: 24px">
							<img
								src="@/assets/img/vectors/tick.svg"
								class="border-green-500 z-20 w-6 h-6"
							/>
						</div>
						<p class="text-base leading-normal text-white">
							Complete documentation
						</p>
					</div>
					<div
						class="inline-flex space-x-4 items-center justify-start"
					>
						<div class="relative" style="width: 24px; height: 24px">
							<img
								src="@/assets/img/vectors/tick.svg"
								class="border-green-500 z-20 w-6 h-6"
							/>
						</div>
						<p class="w-60 text-base leading-normal text-white">
							Free 1 GB cloud storage for 30 days
						</p>
					</div>
					<div
						class="inline-flex space-x-4 items-center justify-start"
					>
						<div class="relative" style="width: 24px; height: 24px">
							<img
								src="@/assets/img/vectors/tick.svg"
								class="border-green-500 z-20 w-6 h-6"
							/>
						</div>
						<p class="text-base leading-normal text-white">
							Cloud storage
						</p>
					</div>
					<div
						class="inline-flex space-x-4 items-center justify-start"
					>
						<div class="relative" style="width: 24px; height: 24px">
							<img
								src="@/assets/img/vectors/tick.svg"
								class="border-green-500 z-20 w-6 h-6"
							/>
						</div>
						<p class="text-base leading-normal text-white">
							Secured data
						</p>
					</div>
					<div
						class="inline-flex space-x-4 items-center justify-start"
					>
						<div class="relative" style="width: 24px; height: 24px">
							<img
								src="@/assets/img/vectors/tick.svg"
								class="border-green-500 z-20 w-6 h-6"
							/>
						</div>
						<p class="text-base leading-normal text-white">
							2 team members
						</p>
					</div>
					<div
						class="inline-flex items-center justify-center w-48 h-12 px-10 py-4 bg-green-500 border rounded border-green-500"
					>
						<p
							class="text-sm font-medium text-center text-white uppercase"
						>
							Choose plan
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
