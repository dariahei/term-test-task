// 2.1 В тестовом файле из задания один сделать, чтобы при нажатии кнопки
// "Кнопка 1" скрывался блок с заголовком. При повторном нажатии блок
// должен появляться.

const btnBig = document.querySelector(".section-btn__big");
const changeHeaderState = () => {
    document.querySelector(".header").classList.toggle('hidden');
};
btnBig.addEventListener("click", changeHeaderState);

// 2.2 При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен
// меняться местами с левым блоком. При повторном нажатии - возвращаться
// на прежнее место.
const btnSmall = document.querySelector(".section-btn__small");

const changeBlockPlace = () => {
    document.querySelector(".section-block__second").classList.toggle('hidden');
    document.querySelector(".section-block__fourth").classList.toggle('hidden');
};
btnSmall.addEventListener("click", changeBlockPlace);


// 2.3 Сделать, чтобы при открытии страницы появлялось модальное окно с
// надписью "Привет, мир".

alert("Привет, мир");
// const myModal = document.getElementById('myModal');
// const body = document.querySelector('body');
// const closeBtn = document.querySelector('.btn-close');
// const closeModal = () => {
//     myModal.delete;
//     document.querySelector('.modal-backdrop').delete;
// }
// closeBtn.addEventListener('click', closeModal);


// 2.4 Сделать в отдельном файле форму с 5 выпадающими списками и 2
// полями для ручного ввода информации. Списки должны содержать цифры от
// 1 до 5. Также нужна кнопка для отправки формы.



// 2.5 Сделать формирование JSON-структуры из данных формы. Выводить ее
// на экран под формой. Отправка формы не должна перезагружать страницу.

// 2.6 Форма должна отправлять асинхронный GET-запрос к абстрактному
// обработчику на том же сервере (в той же папке). В случае, если данные
// дошли, надо получать ответ. Можно выводить его через alert.

