const btnOrderNow = document.querySelectorAll('.btn-order-js');
console.log('btnOrderNow: ', btnOrderNow);
const backdrop = document.querySelector('.backdrop');
const btnCloseModal = document.querySelector('.modal-close-btn')
console.log('btnCloseModal: ', btnCloseModal);

function onOpenModal(){
    backdrop.classList.add('is-open');
};

function onCloseModal(){
    backdrop.classList.remove('is-open')
};

btnOrderNow.forEach((btn) => btn.addEventListener('click', onOpenModal));
btnCloseModal.addEventListener('click', onCloseModal);