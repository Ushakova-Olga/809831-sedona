var button_error = document.querySelector('.modal__button--error');
var button_success = document.querySelector('.modal__button--success');
var form = document.querySelector('.form');
var modal_error = document.querySelector('.modal--error');
var modal_success = document.querySelector('.modal--success');
var name1 = document.querySelector('.name__input-name--name1');
var name2 = document.querySelector('.name__input-name--name2');
var phone = document.querySelector('.contacts__input-phone');
var email = document.querySelector('.contacts__input-email');

form.addEventListener('submit', function (evt) {
  if (!name1.value) {
    evt.preventDefault();
    modal_error.classList.remove('modal--show');
    modal_error.classList.add('modal--show');
    console.log('Ошибка');
  }else {
    evt.preventDefault();
    modal_success.classList.remove('modal--show');
    modal_success.classList.add('modal--show');
    console.log('Все ок');
  }
});

button_error.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal_error.classList.remove('modal--show');
});

button_success.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal_success.classList.remove('modal--show');
});
