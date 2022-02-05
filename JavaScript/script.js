const navigationList = document.querySelector('.navigation__list')
const navigation = document.querySelector('.navigation')


// -----------------------------burger-menu activated

navigation.onmouseenter = () => {
    navigationList.classList.add('navigation__list--mobileVersion')
}
navigation.onmouseleave = () => {
    navigationList.classList.remove('navigation__list--mobileVersion')
}
// ----------------------------------

