import Swiper from 'swiper/bundle';


function initSwiper() {

    const shopsSwiper = new Swiper(".shopSwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".arrow-hidden-next_shops",
            prevEl: ".arrow-hidden-prev_shops",
        },
    });
    const enterSwiper = new Swiper(".enterSwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".arrow-hidden-next_enter",
            prevEl: ".arrow-hidden-prev_enter",
        },
    });
    const foodSwiper = new Swiper(".foodSwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".arrow-hidden-next_food",
            prevEl: ".arrow-hidden-prev_food",
        },
    });
}

initSwiper();


document.querySelectorAll('.allPlacesTabs__title').forEach((i) => {
    i.addEventListener('click', () => {
        setTimeout(() => {
            initSwiper();

        }, "500")
    })

})