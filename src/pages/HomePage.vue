<template>
	<div class="w-full">
		<div
			class="inline-flex flex-col items-start justify-center py-2 pl-10 pr-2 bg-gray-50"
			style="/* width:1440px; */ width: 100%; height: 36px"
		>
			<div class="inline-flex space-x-2 items-start justify-start">
				<div class="flex space-x-2 items-start justify-start">
					<p class="text-sm leading-none text-gray-600">My Home</p>
				</div>
				<div class="flex space-x-2 items-start justify-start">
					<p class="text-sm leading-none text-green-500">
						Sample Cluster 1
					</p>
					<p class="text-sm leading-tight text-gray-600">/</p>
				</div>
			</div>
		</div>
		<div
			class="pr-2 flex w-full items-center pl-10"
			style="
				display: flex;
				justify-content: space-between;
				margin-bottom: 0rem;
				padding-top: 1rem;
				padding-bottom: 1rem;
			"
		>
			<p class="text-3xl font-medium leading-loose text-slate-900">
				All clusters
			</p>
			<div class="relative rounded" style="width: 272px; height: 36px">
				<input
					class="text-sm leading-none text-slate-400 w-64 h-9 pl-4 pr-36 pt-2.5 pb-2 bg-white border rounded border-slate-300"
					placeholder="Search for clusters"
				/>
				<div
					class="w-4 h-4 absolute bg-slate-600 rounded-lg"
					style="left: 233px; top: 11px"
				></div>
			</div>
			<div class="inline-flex gap-x-1 items-center justify-start">
				<div class="relative" style="width: 32px; height: 32px">
					<div class="w-8 h-8 bg-green-500 rounded-full"></div>
					<div
						class="w-2.5 h-2.5 absolute m-auto inset-0 bg-white rounded-full"
					></div>
				</div>
				<div class="flex items-center justify-start w-3/4 h-4 pr-4">
					<p class="text-xs font-medium leading-none text-green-500">
						Add new cluster
					</p>
				</div>
			</div>
			<div class="relative rounded" style="width: 200px; height: 60px">
				<input
					class="text-sm leading-none text-slate-400 w-48 h-9 pl-4 pr-40 pt-2.5 pb-2 absolute left-0 bottom-0 bg-white border rounded border-slate-300"
					placeholder="All"
				/><img
					class="w-4 h-4 absolute rounded-full"
					style="left: 173px; top: 34px"
					src="https://via.placeholder.com/16x16"
				/>
				<p
					class="absolute left-0 top-0 text-sm leading-none text-slate-300"
				>
					Filter by
				</p>
			</div>
			<div class="relative rounded" style="width: 200px; height: 60px">
				<input
					class="text-sm leading-none text-slate-400 w-48 h-9 pl-4 pr-40 pt-2.5 pb-2 absolute left-0 bottom-0 bg-white border rounded border-slate-300"
					placeholder="All"
				/><img
					class="w-4 h-4 absolute rounded-full"
					style="left: 173px; top: 34px"
					src="https://via.placeholder.com/16x16"
				/>
				<p
					class="absolute left-0 top-0 text-sm leading-none text-slate-300"
				>
					Sort by
				</p>
			</div>
		</div>
		<div
			class="inline-flex space-x-2.5 items-center justify-center p-2 bg-gray-50"
			style="/* width:1276px; */ height: 80px; width: 100%"
		>
			<div class="flex items-start justify-center w-28 p-2">
				<p
					class="text-xs font-medium tracking-wider leading-none text-gray-500 uppercase"
				>
					6 clusters
				</p>
			</div>
			<div
				class="flex items-start justify-center"
				style="width: 612px; height: 33px"
			>
				<div
					class="flex space-x-2.5 items-center justify-start"
					style="width: 426px; height: 33px"
				>
					<p class="text-xs leading-none text-gray-400">
						Clusters from
					</p>
					<div
						class="flex items-center justify-center px-3 py-2 bg-indigo-500 shadow rounded-full"
					>
						<p class="text-sm font-medium leading-none text-white">
							Favourite clusters
						</p>
					</div>
					<div
						class="flex items-center justify-center px-3 py-2 border rounded-full border-indigo-500"
					>
						<p class="text-sm leading-none text-indigo-500">
							Most used
						</p>
					</div>
					<div
						class="flex items-center justify-center px-3 py-2 border rounded-full border-indigo-500"
					>
						<p class="text-sm leading-none text-indigo-500">
							All clusters
						</p>
					</div>
				</div>
			</div>
		</div>
		<div v-for="i in 8" :key="i" class="space-y-4 p-2" style="width: 100%">
			<div
				class="inline-flex gap-x-10 items-center justify-between p-4 bg-white border rounded border-zinc-100"
				style="width: 100%"
			>
				<div class="flex gap-x-2 items-center justify-start p-2">
					<div class="flex-1 h-full bg-slate-50 rounded-full"></div>
					<img
						class="w-5 h-5 rounded-lg"
						src="https://via.placeholder.com/20x19.020000457763672"
					/>
					<div class="space-y-0.5 p-2">
						<p class="w-full text-lg leading-snug text-slate-900">
							Sample cluster
						</p>
					</div>
				</div>
				<div class="space-y-0.5 p-2">
					<p class="text-base leading-normal text-slate-600">
						CL-123-dfg
					</p>
				</div>
				<div class="space-y-1 p-2">
					<p class="text-base leading-normal text-slate-600">
						21 projects
					</p>
				</div>
				<div
					class="inline-flex flex-col gap-y-1 items-start justify-center p-2"
				>
					<div class="flex gap-x-1 items-center justify-start">
						<div class="w-3 h-3 bg-green-500 rounded-full"></div>
						<p
							class="text-sm leading-none text-center text-slate-500"
						>
							Active
						</p>
					</div>
				</div>
				<div class="space-y-0.5 p-2">
					<p class="text-base leading-normal">
						23 July, 2021 12:12pm
					</p>
				</div>
				<div class="flex gap-x-1 items-center justify-start p-2">
					<img
						class="w-4 h-2/3 rounded-full"
						src="https://via.placeholder.com/16x16"
					/>
					<p class="text-base leading-normal text-slate-400">
						Edit cluster info
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
