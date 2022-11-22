const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = "block";
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }


    if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_shops')) {
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter')
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food')
      document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_shops')

      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter')
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food')
      document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_shops')
    }
    if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_enter')) {
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops')
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_food')
      document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_enter')

      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops')
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_food')
      document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_enter')
    }
    if (document.querySelector('.allPlacesTabs__title_active').classList.contains('allPlacesTabs__title_food')) {
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_enter')
      document.querySelector('.arrow-hidden-prev').classList.remove('arrow-hidden-prev_shops')
      document.querySelector('.arrow-hidden-prev').classList.add('arrow-hidden-prev_food')

      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_enter')
      document.querySelector('.arrow-hidden-next').classList.remove('arrow-hidden-next_shops')
      document.querySelector('.arrow-hidden-next').classList.add('arrow-hidden-next_food')
    }

  });

};

const servicesTabs = document.querySelector(".allPlacesTabs");
if (servicesTabs) {
  tabs(
    ".allPlacesTabs__titles",
    ".allPlacesTabs__title",
    ".allPlacesTabs__item",
    "allPlacesTabs__title_active"
  );
}