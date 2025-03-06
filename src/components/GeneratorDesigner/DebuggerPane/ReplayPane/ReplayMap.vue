<template>
  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">
        {{ slide }}
      </div>
    </Slide>
  </Carousel>

  <!-- <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
  </Carousel> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const currentSlide = ref(0);
const slideTo = (val) => {
  this.currentSlide = val;
};
</script>

<style>
#thumbnails {
  height: 100%;
}
.carousel {
  height: 100%;
  width: 100%;
}

.carousel__viewport {
  height: 100%;
  width: 100%;
  perspective: 2000px;
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__item {
  height: 100%;
  width: 100px;
  background-color: green;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  height: 100%;
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}
</style>
