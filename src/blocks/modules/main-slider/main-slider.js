import Swiper from 'swiper/bundle';

const swiperMain = new Swiper('.main-slider', {

    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

swiperMain.on('slideChange', function (e) {
    const sectionPageFirst = document.querySelector('.section-page1')
    console.log(swiperMain.activeIndex);
    if (swiperMain.activeIndex == 0) {
        sectionPageFirst.classList.remove('section-page1_1')
        sectionPageFirst.classList.remove('section-page1_2')
        sectionPageFirst.classList.add('section-page1_0')
    }
    if (swiperMain.activeIndex == 1) {
        sectionPageFirst.classList.remove('section-page1_0')
        sectionPageFirst.classList.remove('section-page1_2')
        sectionPageFirst.classList.add('section-page1_1')
    }
    if (swiperMain.activeIndex == 2) {
        sectionPageFirst.classList.remove('section-page1_0')
        sectionPageFirst.classList.remove('section-page1_1')
        sectionPageFirst.classList.add('section-page1_2')
    }
});