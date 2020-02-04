/* Модальное окно - Тест */
let receiveBtn1 = document.querySelector('.english_level'),
    testWindow = document.querySelector('.test'),
    closeBtn1 = document.querySelector('.close1');

receiveBtn1.addEventListener('click', function(){
    testWindow.style.display = 'block';
});     
closeBtn1.addEventListener('click', function(){
    testWindow.style.display = 'none';
});

let dataArray = [
    ["I have bought a computer, ________ is more expensive than this one.","who","which","that","from",2],
    ["There ________ some books on the shelves","isn't","are","aren't","doing",2],
    ["We want to meet ________ Monday.","at","in","on","since",3],
    ["This armchair is ________ than that armchair.","comfortabler","most comfortable","more comfortable","the most comfortable",3],
    ["Mark ________ anything to me.","didn’t wrote","not write","didn’t write","not to write",3],
    ["________ many people at the airport.","There was","It was","There were","It were",3],
    ["We have ________ eggs in the fridge","any","little","a bit","a few",4],
    ["He ________ when the phone rang.","was sleeping","were sleeping","sleeped","has slept",1],
    ["She thanked me for ________ her a lift.","gave","to give","giving","to giving",3],
    ["He promised ________ in time.","to come","coming","come","to coming",1],
    ["He ________ to be very rich","is thinking","thinks","is thought","thinking",3],
    ["By the time you come we ________ everything.","will have finished","will finish","will finished","will finishing",1],
    ["In my opinion, they’re not ________ to come to us today.","definitely","likely","like","will",2],
    ["I think I ________ for you here. I just can’t go on walking!","will wait","am going to wait","am waiting","we be waiting",1],
    ["They ________ to finish the work in time.","must","can","could","were able",4],
    ["My grandma is the kindest woman I know , she'd do anything for anybody. She really has a heart of ________","silver","gold","stone","bronze",2],
    ["This product was a huge success. The way it ________ was really unexpected","took on","took away","took back","took off",4],
    ["You can only have your money back if you can produce ______","a receipt","an invoice","a bill","an offer",1],
    ["If you’ve got heavy bags to carry, you'd be ________ a taxi.","better of taking","well-off taking","better off taking","well-of taking",3],
    ["There was no room in the hotel, so they were __________ at the B&B nearby.","accommodated","accomodated","acommodated","acomodated",1],
];
     
let plus = 0,
    time = 0,
    curAnswer = 0,
    countAnswer = dataArray.length;

function sec() {
    time++;	
    document.querySelector('#time').innerHTML = 'Потрачего времени: ' + time + ' с.';
}

function check(num){
    if(num == 0){ 
      
    document.querySelector('#option1').style.display = 'block';
    document.querySelector('#option2').style.display = 'block';
    document.querySelector('#option3').style.display = 'block';
    document.querySelector('#option4').style.display = 'block';

    document.querySelector('#question').style.display = 'block';

    document.querySelector('#option1').innerHTML = dataArray[curAnswer][1];
    document.querySelector('#option2').innerHTML = dataArray[curAnswer][2];
    document.querySelector('#option3').innerHTML = dataArray[curAnswer][3];
    document.querySelector('#option4').innerHTML = dataArray[curAnswer][4];

    document.querySelector('#question').innerHTML = dataArray[curAnswer][0];
          
    document.querySelector('#start').style.display = 'none';
    document.querySelector('#end').style.display = 'inline';
          
let intervalID = setInterval(sec, 1000);
          
    }else{

    if( num ==  dataArray[curAnswer][5]){
        plus++;
        document.getElementById('result').innerHTML = 'Правильно! Так держать!';
    }else{
        document.getElementById('result').innerHTML = "Неправильно! Правильный ответ: " + dataArray[curAnswer][dataArray[curAnswer][5]];
    }
              
    curAnswer++;
    if(curAnswer < countAnswer){
          
        document.getElementById('option1').innerHTML = dataArray[curAnswer][1];
        document.getElementById('option2').innerHTML = dataArray[curAnswer][2];
        document.getElementById('option3').innerHTML = dataArray[curAnswer][3];
        document.getElementById('option4').innerHTML = dataArray[curAnswer][4];

        document.getElementById('question').innerHTML = dataArray[curAnswer][0];
              
    }else{
              
        document.getElementById('time').id = 'stop';
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
        document.getElementById('option3').style.display = 'none';
        document.getElementById('option4').style.display = 'none';

        document.getElementById('question').style.display = 'none';
        document.getElementById('end').style.display = 'inline';
              
        let percent =  Math.round(plus / countAnswer * 100);				
        let result = 'Ваш уровень: Beginner';
        if(percent > 10) result = 'Ваш уровень: Elementary';
        if(percent > 30) result = 'Ваш уровень: Pre-intermediate';
        if(percent > 60) result = 'Ваш уровень: Intermediate';
        if(percent > 80) result = 'Ваш уровень: Upper-intermediate';
        if(percent == 100) result = 'Ваш уровень: Advanced';
              
        document.getElementById('result').innerHTML = 'Правильних відповідей: ' + plus + ' з ' + countAnswer + ' (' + percent + '%)<br>' + result;
        }      
    }
}
