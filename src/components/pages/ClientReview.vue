<template>
<div class="row">
    <div class="col-lg-12 my-5">
        <h2 class="text-center heading">Client Testimonial</h2>
    </div>
    <div class="col-lg-12">
        <Carousel :itemsToShow="show_slider" :autoplay="2500" :wrapAround="true">
            <Slide v-for="testimonails in testimonail" :key="testimonails">
                <div class="carousel__item p-4 mx-2">
                    <img class="img_testi" :src="testimonails.img" />
                    <h5 class="customer_name mt-3">{{testimonails.shortname}}</h5>
                    <p class="desci_client mt-3">{{testimonails.review}}</p>
                </div>
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
    <div class="col-sm-6 pt-3">
        <div class="you_video embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XtEpvKck3Bw" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-sm-6 pt-3">
        <div class="you_video embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Fw168GJvelY" allowfullscreen></iframe>
        </div>        
    </div>     
</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import dbinfo from '../global/Gdb'
import {
    Carousel,
    Pagination,
    Slide
} from 'vue3-carousel';

export default {
    name: 'ClientReview',
    data() {
        return {
           testimonail:dbinfo.testimonail
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    computed:{
        show_slider(){
            const cureent_postion = document.documentElement.clientWidth;
            let slider ='';
            if(cureent_postion < 600){
                return '1';
            }
            if(cureent_postion < 769){
                return '2';
            }
            if(cureent_postion > 768){
                return '3';
            }
            return slider;
        }
       
    }
};
</script>

<style>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: #adefd1;
    color: var(--carousel-color-white);
    font-size: 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 8px 2px #eeee;
    border: 1px solid #00203f;
}

.carousel__slide {
    padding: 22px;
}

.customer_name {
    color: #00203f;
    font-family: 'Poppins_Regular';
}

.desci_client {
    color: #00203f;
    font-size: 14px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.carousel__slide>.carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
    height: 15em;
}

.carousel__slide--visible>.carousel__item {
    opacity: 1;
    transform: rotateY(0);
}

.carousel__slide--active {
    opacity: 1;
}

.carousel__slide--next>.carousel__item {
    transform: scale(0.9) translate(-10px);
}

.carousel__slide--prev>.carousel__item {
    transform: scale(0.9) translate(10px);
}

.carousel__slide--active>.carousel__item {
    transform: scale(1.1);
}

.img_testi {
    width: 4em !important;
    border-radius: 2em;
    background-size: cover;
}

.carousel__pagination-button--active {
    background-color: #00203f !important;
}

.carousel__pagination .carousel__pagination-button {
    background-color: #001f3f86;
}
</style>
