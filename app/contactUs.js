/* Модальное окно - Свяжитесь с нами */
let receiveBtn2 = document.querySelector('.contact_us'),
    modal = document.querySelector('.modal'),
    closeBtn2 = document.querySelector('.close2'),
    nameInput = document.querySelector('#name'),
    text = document.querySelector('.message');

receiveBtn2.addEventListener('click', function(){
    modal.style.display = 'block';
});
    
closeBtn2.addEventListener('click', function(){
    modal.style.display = 'none';
});
    
nameInput.addEventListener('input', function(){
    text.value = `Меня зовут ${nameInput.value}. И я хочу спросить: `;
});

function validate(form_id,name,phone,email) {
    var regName = /[А-Я][а-я]+\s[А-Я][а-я]+/;
    var yourName = document.forms[form_id].elements[name].value;
    if(regName.test(yourName) == false) {
       alert('Введите корректные Имя и Фамилию');
       return false;
    }
    var regPhone = /\+38(098|067|068|096|066|050|099|063|093|091|092|094|039)\d{7}/;
    var number = document.forms[form_id].elements[phone].value;
    if(regPhone.test(number) == false) {
       alert('Введите корректный телефон');
       return false;
    }
    var regEmail = /\w+\@(mail|gmail|meta|yandex)\.(com|ru|ukr)/;
    var address = document.forms[form_id].elements[email].value;
    if(regEmail.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }