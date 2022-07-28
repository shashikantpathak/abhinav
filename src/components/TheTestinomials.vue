<template>
	<div class="flex flex-col relative pt-20">
		<figure>
			<img
				src="@/assets/img/vectors/Testimonials.png"
				alt=""
				class="float-right"
			/>
		</figure>

		<carousel
			:transition="500"
			:items-to-show="1"
			:items-to-scroll="1"
			:wrap-around="true"
		>
			<slide v-for="(slide, key, index) in imgItems" :key="index">
				<div class="carousel_review">
					<div class="image_review">
						<img
							src="@/assets/img/testinomials/lin.jpg"
							alt=""
							class="testinomialimg"
						/>

						<div class="a"></div>
						<div class="b"></div>
						<div class="d">{{ key + 1 }}/{{ imgItems.length }}</div>
					</div>
					<div class="testinomial_text">
						<div class="text">
							{{ slide.text }}
						</div>
						<div class="designation_work">
							<div class="designation">{{ slide.name }}</div>
							<div class="work">{{ slide.designation }}</div>
						</div>
					</div>
					<div class="image_review_next">
						<img
							src="@/assets/img/map.png"
							class="image_next"
							alt=""
						/>
					</div>
				</div>
			</slide>
			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
	name: 'App',
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
.carousel_review {
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	padding: 0px 5rem;
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
	width: 215px;
	height: 320px;

	margin-top: 3rem;
	border-radius: 40px;
	background: #f6f5ef;
	border-radius: 36px;
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
