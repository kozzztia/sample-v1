const navigationList = document.querySelector('.navigation__list')
const navigation = document.querySelector('.navigation')
const portfolioCard = document.querySelectorAll('.portfolio__card')
const nextSlider = document.querySelector('.portfolio__slider-btn--next')
const prevSlider = document.querySelector('.portfolio__slider-btn--prev')

// -----------------------------burger-menu activated

navigation.onmouseenter = () => {
    navigationList.classList.add('navigation__list--mobileVersion')
}
navigation.onmouseleave = () => {
    navigationList.classList.remove('navigation__list--mobileVersion')
}
// ----------------------------------
n = 0;
nextSlider.onclick = () => {
    for (let i = 0; i < portfolioCard.length; i++) {
        portfolioCard[i].classList.remove('portfolio__card--active');
        portfolioCard[n].classList.add('portfolio__card--active');
    }

    n++;
    if (n === portfolioCard.length) {
        return n = 0;
    }
}
prevSlider.onclick = () => {
    for (let k = portfolioCard.length - 1; k > -1; k--) {
        portfolioCard[k].classList.remove('portfolio__card--active');
        portfolioCard[n].classList.add('portfolio__card--active');
    }

    n--;
    if (n === -1) {
        return n = portfolioCard.length - 1;
    }
}
// ------------------------------------------