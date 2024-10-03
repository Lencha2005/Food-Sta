const btnBurger = document.querySelector('.btn-open-mobile');
const btnClose = document.querySelector('.btn-mobile-close');
const mobileMenu = document.querySelector('.mobile');
const itemMobile = document.querySelectorAll('.mobile-item');

function onOpenMobile(){
mobileMenu.classList.add('is-open-mobile')
};

function onCloseMobile() {
    mobileMenu.classList.remove('is-open-mobile')
}

itemMobile.forEach(item => {
    item.addEventListener('click', onCloseMobile)
});

btnBurger.addEventListener('click', onOpenMobile);
btnClose.addEventListener('click', onCloseMobile);

