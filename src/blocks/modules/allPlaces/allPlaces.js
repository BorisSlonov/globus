import Swiper from 'swiper/bundle';


function initSwiper() {

    const shopsSwiper = new Swiper(".shopSwiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".arrow-hidden-next_shops",
            prevEl: ".arrow-hidden-prev_shops",
        },
        breakpoints: {
            // when window width is >= 480px
            550: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    const enterSwiper = new Swiper(".enterSwiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".arrow-hidden-next_enter",
            prevEl: ".arrow-hidden-prev_enter",
        },
        breakpoints: {
            // when window width is >= 480px
            550: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    const foodSwiper = new Swiper(".foodSwiper", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".arrow-hidden-next_food",
            prevEl: ".arrow-hidden-prev_food",
        },
        breakpoints: {
            // when window width is >= 480px
            550: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
}

initSwiper();


document.querySelectorAll('.allPlacesTabs__title').forEach((i) => {
    i.addEventListener('click', () => {
        setTimeout(function () {

            if (document.querySelector('.arrow-hidden-prev')) {
                if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_shops')) {
                    document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter')
                    document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food')
                    document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_shops')

                    document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter')
                    document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food')
                    document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_shops')

                    setTimeout(() => {
                        initSwiper();
                    }, "500")

                }
                if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_enter')) {
                    document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops')
                    document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food')
                    document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_enter')

                    document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops')
                    document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food')
                    document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_enter')

                    setTimeout(() => {
                        initSwiper();
                    }, "500")
                }
                if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_food')) {
                    document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter')
                    document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops')
                    document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_food')

                    document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter')
                    document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops')
                    document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_food')

                    setTimeout(() => {
                        initSwiper();
                    }, "500")
                }
            }


            initSwiper();

        }, 600);

    })

})