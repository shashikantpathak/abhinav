<template>
	<div class="flex flex-col relative pt-20">
		<p
			class="text-9xl font-black tracking-widest uppercase text-end features-text"
			style="font-size: 8.3rem"
		>
			Testinomials
		</p>
		<div class="">
			<carousel
				:transition="500"
				:items-to-show="1"
				:items-to-scroll="1"
				:wrap-around="true"
			>
				<slide v-for="(slide, key, index) in imgItems" :key="index">
					<div class="carousel_review">
						<div
							class="inline-flex space-x-28 items-center justify-start w-4/5 gap-x-12"
						>
							<div class="image_review" data-v-dc63638e="">
								<div data-v-dc63638e="">
									<div
										class="skewed absolute"
										data-v-dc63638e=""
										style="
											top: -3rem;
											right: 1rem;
											z-index: 1;
											width: 11rem;
											height: 8rem;
										"
									>
										<img
											src="/src/assets/img/testinomials/lin.jpg"
											alt=""
											data-v-dc63638e=""
											style="
												width: 100%;
												height: 100%;
												object-fit: cover;
												border-radius: 12px;
											"
										/>
									</div>
									<div class="a" data-v-dc63638e=""></div>
								</div>
								<div class="b" data-v-dc63638e=""></div>
								<div class="d" data-v-dc63638e="">1/3</div>
							</div>
							<div
								class="inline-flex flex-col space-y-6 items-start justify-start w-96"
							>
								<p
									class="w-full text-base leading-normal text-gray-500 text-justify"
								>
									Djuli dashboard is lorem ipsum dolor sit
									amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation, I
									absolutely recommend it.
								</p>
								<div
									class="flex flex-col space-y-1 items-start justify-start"
								>
									<p
										class="text-sm font-medium text-gray-800 uppercase"
									>
										christian buehner
									</p>
									<p class="text-xs text-gray-400">
										Data Scientist, AQube-Oslo
									</p>
								</div>
							</div>
						</div>
						<div class="mb-20">
							<div class="skewed" data-v-c7f94e5a="">
								<img
									src="/src/assets/img/testinomials/daniel.jpg"
									class=""
									alt=""
									data-v-c7f94e5a=""
									style="
										width: 100%;
										height: 100%;
										object-fit: fit;
										object-fit: cover;
										border-radius: 12px;
									"
								/>
							</div>
						</div>
					</div>
				</slide>
				<template #addons>
					<navigation />
					<pagination />
				</template>
			</carousel>
		</div>
	</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data() {
		return {
			imgItems: [
				{
					src: 'lin.jpg',
					text: 'Djuli is a gamechanger for a fully integrated biosensor workflow. For me, who is not a biochemist by trade, I am now able to analyze, learn and use biochemical data in a simple way, giving me more time to make a complete product.',
					name: 'Linhongjia Xiong',
					designation: 'Data Scientist',
				},
				{
					src: 'daniel.jpg',
					text: 'Djuli is a gamechanger for a fully integrated biosensor workflow. For me, who is not a biochemist by trade, I am now able to analyze, learn and use biochemical data in a simple way, giving me more time to make a complete product.',
					name: 'Daniel Izadifar',
					designation: 'Project manager & engineer',
				},
				{
					src: 'lin.jpg',
					text: 'Djuli is a gamechanger for a fully integrated biosensor workflow. For me, who is not a biochemist by trade, I am now able to analyze, learn and use biochemical data in a simple way, giving me more time to make a complete product.',
					name: 'Lin',
					designation: 'Senior Data Scientist',
				},
			],
		};
	},
	methods: {
		getImgUrl(pic) {
			return require('../../../../assets/testinomials/' + pic);
		},
	},
};
</script>

<style scoped>
.skewed {
	transform: rotate(0deg) skewY(20deg); /* Equal to skewX(10deg) */
	background-color: gainsboro;
	width: 11rem;
	height: 8rem;
	margin: auto;
	border-radius: 12px;
	margin-top: 5rem;
}
.carousel_review {
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	padding: 0px 12rem;
}
.text {
	width: 368px;
	height: 120px;
	font-family: Work Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	text-align: justify;
	color: #666666;
}
.designation {
	width: 138px;
	height: 16px;
	text-align: justify;
	/* Special Title */

	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	text-transform: uppercase;

	color: #333333;
}
.work {
	height: 14px;
	text-align: justify;

	/* Underplayed Body */

	font-family: Work Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	/* identical to box height */
}
.image_review {
	margin-bottom: 3rem;
	position: relative;
}
.carousel__slide carousel__slide--next {
	widows: 100%;
}

.image_next {
	position: relative;
	top: 0;

	height: 160px;
	width: 206px;

	object-fit: cover;
	height: 122px;
	width: 177px;
}

.testinomialimg {
	object-fit: cover;
	transform: rotate(180deg);
	height: 122px;
	width: 177px;
	border-radius: 12px;
	border-radius: 10%;
	transform: rotate(10deg) skew(11deg);
	z-index: 999;
	position: absolute;
	left: 0;
	top: 4rem;
}

.a {
	width: 186px;
	height: 304px;
	margin-top: 3rem;
	background: #f6f5ef;
	border-radius: 24px;
	transform: matrix(-1, 0, 0, 1, 0, 0);
	transform: rotate(90deg) skew(20deg);
}
.b {
	margin-top: 100px;
	border-radius: 10px;
	margin-left: 4rem;
	background: linear-gradient(
		180deg,
		rgba(228, 37, 133, 0.39) 0%,
		#fb399a 100%
	);
	border-radius: 4px;
	transform: matrix(-1, 0, 0, 1, 0, 0);
	width: 17px;
	transform: rotate(90deg) skew(20deg);
	height: 29px;
	position: absolute;
	margin: auto;
	margin-top: 12px;
}
.d {
	position: absolute;
	font-family: Work Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	left: 3rem;
	margin-top: 12px;
	width: 17px;
	height: 14px;
	color: #000000;
}
.testinomial_text {
	height: 16rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
</style>
