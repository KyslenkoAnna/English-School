/* Модальное окно - Расчитать стоимость */
let receiveBtn3 = document.querySelector('.calculate'),
    calculateWindow = document.querySelector('.calculate_price'),
    closeBtn3 = document.querySelector('.close3');

receiveBtn3.addEventListener('click', function(){
    calculateWindow.style.display = 'block';
});
    
closeBtn3.addEventListener('click', function(){
    calculateWindow.style.display = 'none';
});

$(function(){
    let selectLevel,
        selectForm,
        selectTeacher,
        selectDays,
        sum = 0,
        books = {
            "Beginner":{300:"Начальный уровень"},
            "Pre-Intermediate":{400:"Уровень ниже среднего"},
            "Intermediate":{450:"Средний уровень"},
            "Upper-Intermediate":{500:"Уровень выше среднего"},
            "Advanced":{550:"Продвинутый уровень"},
        },
        groupOrIndividual = {
            "Beginner":{100: "Занятие в группе", 150: "Индивидуальное занятие", 50: "Индивидуальное занятие (онлайн по Skype)"},
            "Pre-Intermediate":{150: "Занятие в группе", 200:"Индивидуальное занятие", 60: "Индивидуальное занятие (онлайн по Skype)"},
            "Intermediate":{150: "Занятие в группе", 200:"Индивидуальное занятие"},
            "Upper-Intermediate":{150: "Занятие в группе", 200:"Индивидуальное занятие", 80: "Индивидуальное занятие (онлайн по Skype)"},
            "Advanced":{200: "Занятие в группе", 250:"Индивидуальное занятие", 90: "Индивидуальное занятие (онлайн по Skype)"},
        },
        teacher = {
            "Beginner":{40: "Рускоязычный преподаватель - Мария (2 года опыта)", 50: "Рускоязычный преподаватель - Дмитрий (6 лет опыта)"},
            "Pre-Intermediate":{40: "Рускоязычный преподаватель - Мария (2 года опыта)", 50: "Рускоязычный преподаватель - Дмитрий (6 лет опыта)", 20: "Рускоязычный преподаватель - Ольга (1 год опыта)"},
            "Intermediate":{40: "Рускоязычный преподаватель - Мария (2 года опыта)", 50: "Рускоязычный преподаватель - Дмитрий (6 лет опыта)", 20: "Рускоязычный преподаватель - Ольга (1 год опыта)", 50:"Носитель языка - Марк (студент из Африки)", 80:"Носитель языка - Джордж (волонтер из Канады)"},
            "Upper-Intermediate":{50: "Рускоязычный преподаватель - Дмитрий (6 лет опыта)", 60:"Носитель языка - Марк (студент из Африки)", 80:"Носитель языка - Джордж (волонтер из Канады)", 80:"Носитель языка - Адам (волонтер из США)"},
            "Advanced":{70:"Носитель языка - Марк (студент из Африки)", 90:"Носитель языка - Джордж (волонтер из Канады)", 85:"Носитель языка - Адам (волонтер из США)"},
        },
        days = {
            "Beginner":{1: "Один раз в неделю", 2: "Два раза в неделю", 3: "Три раза в неделю"},
            "Pre-Intermediate":{1: "Один раз в неделю", 2: "Два раза в неделю", 3: "Три раза в неделю"},
            "Intermediate":{1: "Один раз в неделю", 2: "Два раза в неделю", 3: "Три раза в неделю"},
            "Upper-Intermediate":{1: "Один раз в неделю", 2: "Два раза в неделю",3: "Три раза в неделю"},
            "Advanced":{1: "Один раз в неделю", 2: "Два раза в неделю", 3: "Три раза в неделю"},
        };

        function insertLevel(){
            let html = "",
                level,
                price;
            for(level in books){
                for(price in books[level]){
                    html += '<option data-level="' + level + '" data-price="' + price + '">'+ level +'</option>';
                }
            }
            $('#level').append(html);
            /* document.querySelector('#level').appendChild(html); */
            

        }

        function changeLevel() { //Когда клиент выбрал что-то - все просуммировалость, затем он выбрал что-то другое и нам нужно чтобы цена не плюсовалась к Итого, а перечситывалась (обнулялась)
            sum = 0;

            selectLevel = $('#level option').filter(':selected').data('level');
            selectBookPrice = $('#level option').filter(':selected').data('price');

            insertForm()
            insertTeacher();
            insertDays();
            recalc();
        
        }

        function insertForm() {
            let html = '<option selected>Онлайн, в группе или индивидуально?</option>',
                price;
            for (price in groupOrIndividual[selectLevel]){
                html += '<option data-price="' + price + '">' + groupOrIndividual[selectLevel][price] +'</option>';
            }
            document.querySelector('#form').innerHTML = html;
        }

        function insertTeacher() {
            let html = '<option selected>С кем будешь заниматься?</option>',
                price;
            for (price in teacher[selectLevel]){
                html += '<option data-price="' + price + '">' + teacher[selectLevel][price] + '</option>';
            }
            document.querySelector('#teacher').innerHTML = html;
        }
        
        function insertDays() {
            let html = '<option selected>Как часто мы будем видеться?</option>',
                price;
            for (price in days[selectLevel]){
                html += '<option data-price="' + price + '">' + days[selectLevel][price] + '</option>';
            }
            document.querySelector('#days').innerHTML = html;
        }

        function changeGroupOrIndividual(){
            selectForm = $('#form option').filter(':selected').data('price');
            recalc();
        }
        function changeTeacher(){
            selectTeacher = $('#teacher option').filter(':selected').data('price');
            recalc();
        }
        function changeDays(){
            selectDays = $('#days option').filter(':selected').data('price');
            recalc();
        }
        function isNumeric(n){
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        function recalc(){
            selectBookPrice = isNumeric(selectBookPrice) ? selectBookPrice : 0;
            selectForm = isNumeric(selectForm) ? selectForm : 0;
            selectTeacher = isNumeric(selectTeacher) ? selectTeacher : 0;
            selectDays = isNumeric(selectDays) ? selectDays : 0;
            sum = selectBookPrice + (((selectForm + selectTeacher) * selectDays)) * 4;
            changeTable();
        }

        function changeTable(){
            document.querySelector('.level').textContent = selectBookPrice;
            document.querySelector('.form').textContent = selectForm;
            document.querySelector('.teacher').textContent = selectTeacher;
            document.querySelector('.days').textContent = selectDays;
            document.querySelector('.sum').textContent = sum;

        }

        insertLevel();

        document.querySelector('#level').addEventListener('change', changeLevel);
        document.querySelector('#form').addEventListener('change', changeGroupOrIndividual);
        document.querySelector('#teacher').addEventListener('change', changeTeacher);
        document.querySelector('#days').addEventListener('change', changeDays);
});