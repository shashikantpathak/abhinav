<template>
	<div
		class="inline-flex space-x-64 items-center py-2.5 pl-10 pr-12 bg-white shadow w-full"
		style="height: 60px"
	>
		<div class="flex space-x-8 items-start justify-start w-full">
			<div class="flex gap-x-1 items-end justify-end w-20 h-full">
				<figure>
					<img src="@/assets/img/logo/djulilogo.svg" />
				</figure>
			</div>
			<div class="flex space-x-10 items-center justify-start">
				<div
					class="inline-flex gap-x-1 items-start justify-start p-2 flex-col"
				>
					<p
						class="text-base font-medium leading-normal text-green-500"
					>
						My Home
					</p>
				</div>

				<!-- <div class="flex items-center justify-start p-2 flex-col">
					<p
						class="text-base font-medium leading-normal text-green-500"
					>
						My Home
					</p>
					<div class="w-24 h-0.5 bg-green-500"></div>
				</div> -->
				<div class="flex items-start justify-start p-2">
					<p class="text-base leading-normal text-gray-600">
						Data Lab
					</p>
				</div>
				<div class="flex items-start justify-start p-2">
					<p class="text-base leading-normal text-gray-600">
						Terminal
					</p>
				</div>
			</div>
		</div>
		<img
			class="w-5 h-1/2 rounded-lg"
			src="https://via.placeholder.com/20x20"
		/>
		<div class="flex space-x-6 items-center w-full justify-end">
			<div class="flex space-x-2 items-center justify-start p-2">
				<img
					class="w-4 h-4 rounded-full"
					src="https://via.placeholder.com/16x15.999796867370605"
				/>
				<p class="text-sm leading-none text-gray-500">Help</p>
			</div>
			<div class="flex items-center justify-end">
				<div class="flex items-start justify-start p-0.5">
					<img
						class="flex-1 h-full rounded-full"
						src="https://via.placeholder.com/32x32"
					/>
				</div>
				<div class="flex items-center justify-end p-2">
					<p class="text-sm leading-none text-gray-500">John Doe</p>
				</div>
			</div>
			<div class="flex space-x-2 items-center justify-start p-2">
				<div class="w-4 h-full">
					<div
						class="flex items-start justify-end flex-1 h-full pl-2 pt-0.5 pb-2.5 bg-gray-500 rounded-lg"
					>
						<div class="flex-1 h-full bg-pink-500 rounded-full" />
					</div>
				</div>
				<p class="text-sm leading-none text-gray-500">Notifications</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
