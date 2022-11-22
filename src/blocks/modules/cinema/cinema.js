import Swiper from 'swiper/bundle';

var mySwiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var mySwiper2 = new Swiper(".mySwiper2", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next_cinema",
        prevEl: ".swiper-button-prev_cinema",
    },
    thumbs: {
        swiper: mySwiper,
    },
});