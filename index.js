"use strict"


let circle = document.querySelector('.circle');
let text = document.querySelector('p');
let body = document.querySelector('body');
let number = 0;
let interval;
let interval2;
let interval3;
let interval4;
const A = () => {
     


    // _____________________________________________________1_____________________________________________________


    localStorage.getItem('count') == 2 ? text.textContent = 'Я ПРЕДУПРЕДИЛ!!!' : console.log(number);
    localStorage.getItem('count') == 3 ? text.textContent = 'я же сказал не нажимать.....' : console.log(number);
    localStorage.getItem('count') == 4 ?  text.textContent = 'ТЫ ЧТО НЕ ПОНЯЛ????' : console.log(number);

        if (localStorage.getItem('count') == 5 ) {
        text.textContent = 'НЕ'
        body.style.background = '#660000'
    };

    if (localStorage.getItem('count') == 6 ) {
        text.textContent = 'НА'
        body.style.background = '#660033'
    };

    if (localStorage.getItem('count') == 7 ) {
        text.textContent = 'ЖИ'
        body.style.background = '#660066'
    };

    if (localStorage.getItem('count') == 8 ) {
        text.textContent = 'МА'
        body.style.background = '#660099'
    };

    if (localStorage.getItem('count') == 9 ) {
        text.textContent = 'Й'
        body.style.background = '#6600CC'
    };

    if (localStorage.getItem('count') == 10 ) {
        text.textContent = 'НА'
        body.style.background = '#6600FF'
    };

    if (localStorage.getItem('count') == 11 ) {
        text.textContent = 'КНОП'
        body.style.background = '#6633FF'
    };

    if (localStorage.getItem('count') == 12 ) {
        text.textContent = 'КУ'
        body.style.background = '#6666FF'
    };

    if (localStorage.getItem('count') == 13 ) {
        text.textContent = '!!!!!!!!!!!!!!!!!'
        body.style.background = '#6699FF'
    };

    if (localStorage.getItem('count') == 14 ) {
        text.textContent = '!!@#$$%^&*(_)()+_)(*&^$$%%$#%##$%&*($@***'
        body.style.background = '#66CCFF'
    };
    
    if( localStorage.getItem('count') == 15  ){
        text.textContent = 'а теперь можешь нажать?'; 
        console.log(number);
        circle.style.opacity = '0'; 
    }   else(circle.style.opacity = '1')

    // _____________________________________________________2_____________________________________________________


    if( localStorage.getItem('count') == 16 ){
        text.textContent = 'всё ещё непонятно???'; 
        console.log(number);
        circle.style.background = 'url(./src/blue-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 
    if( localStorage.getItem('count') == 17 ){
        text.textContent = 'НЕ НАЖИМАЙ НА КНОПКУ!!!'; 
        console.log(number);
        circle.style.background = 'url(./src/green-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 18 ){
        text.textContent = 'ЕЩЁ ОДНО НАЖАТИЕ И МИРУ КОНЕЦ!!'; 
        console.log(number);
        circle.style.background = 'url(./src/blue-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 19 ){
        text.textContent = 'Я ПРЕДУПРЕДИЛ'; 
        console.log(number);
        circle.style.background = 'url(./src/green-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 20 ){
        text.textContent = 'ЕЩЁ'; 
        console.log(number);
        circle.style.background = 'url(./src/blue-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 21 ){
        text.textContent = 'ОДНО'; 
        console.log(number);
        circle.style.background = 'url(./src/green-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    };
if( localStorage.getItem('count') == 22 ){
        text.textContent = 'НАЖАТИЕ'; 
        console.log(number);
        circle.style.background = 'url(./src/blue-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 23 ){
        text.textContent = 'И'; 
        console.log(number);
        circle.style.background = 'url(./src/green-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 24 ){
        text.textContent = 'МИРУ КОНЕЦ!!!!'; 
        console.log(number);
        circle.style.background = 'url(./src/blue-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 
    
    if( localStorage.getItem('count') == 25 ){
        text.textContent = 'попробуй теперь нажать'; 
        console.log(number);
        circle.style.background = 'url(./src/green-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 26 ){
        text.textContent = 'Я ЖЕ СКЗАЛ НЕ НАЖИМАТЬ'; 
        console.log(number);
        circle.style.background = 'url(./src/blue-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 27 ){
        text.textContent = 'ТЫ ХОТЬ ПОНИМАЕШЬ К ЧЕМУ ЭТО ПРИВЕДЁТ?????!!?'; 
        console.log(number);
        circle.style.background = 'url(./src/green-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 28 ){
        text.textContent = 'К КОНЦУ!!!!!!'; 
        console.log(number);
        circle.style.background = 'url(./src/blue-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 29 ){
        text.textContent = '!!!!!'; 
        console.log(number);
        circle.style.background = 'url(./src/green-btn.png)'
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 

    if( localStorage.getItem('count') == 30 ){
        text.textContent = 'ВСЁ ЕЩЁ НЕ ПОНЯТНО??'; 
        console.log(number);
        circle.style.background = ''
        circle.style.width = '200px'
        circle.style.height = '200px'
    }; 


// 3
    if( localStorage.getItem('count') == 31 ){
    text.textContent = 'А ТАК???'; 
    console.log(number);
    circle.style.opacity = '0'; 
    circle.style.margin =  '15px';
} 


    if (localStorage.getItem('count') == 32) {
        circle.style.margin = '0 auto';
        text.textContent = 'ХОРОШО, но мне кажется..';
        circle.style.width = '150px'
        circle.style.height = '150px'

    }






        // _____________________________________________________3_____________________________________________________



    localStorage.getItem('count') == 33? text.textContent = 'ЧТО ТЕБЕ ВСЁ ЕЩЁ НЕ ПОНЯТНО' : console.log(number);
    localStorage.getItem('count') == 34? text.textContent = 'ТАК ПОНЯТНЕЕ??? '  : console.log(number);

    if( localStorage.getItem('count') == 34 ){
        text.textContent = 'ТАК ПОНЯТНЕЕ???'; 
        console.log(number);
        circle.style.background = ''
    } 
    
    if( localStorage.getItem('count') == 35 ){
        text.textContent = 'ТАК ПОНЯТНЕЕ???'; 
        body.style.background = '#663399'
    } 
// 4
localStorage.getItem('count') == 36? text.textContent = 'хорошо, вижу, ты настроен серьезно ' : console.log(number);
    localStorage.getItem('count') == 37? text.textContent = 'я дам что ты хочешь, НО ТОЛЬКО ПОСДЕ ОДНОГО НАЖАТИЯ ' : console.log(number);
    localStorage.getItem('count') == 38? text.textContent = ' ХА ХА ЕЩЁ ОДНОГО ' : console.log(number);
    localStorage.getItem('count') == 39? text.textContent = 'ХА ХА ' : console.log(number);
    localStorage.getItem('count') == 40? text.textContent = 'НЕ ПОЛУЧАЕТЬСЯ, ДА?' : console.log(number);
    localStorage.getItem('count') == 41? text.textContent = 'МОЖЕТ ПОТОМУ ЧТО ТЫ МЕНЯ НЕ СЛУШАЛ И НАЖАЛ НА КНОПКУ??' : console.log(number);
    localStorage.getItem('count') == 42? text.textContent = 'ДА, ОПРЕДЕЛЕННО, ИЗ-ЗА ЭТОГО ' : console.log(number);
    localStorage.getItem('count') == 44? text.textContent = 'ВОТ ВИДИШЬ КАК ПЛОХО МЕНЯ НЕ СЛУШАТЬ?' : console.log(number);

    //  54. (*какое-либо действие 5*)

    if ( localStorage.getItem('count') == 45) {
        text.textContent = 'ПОПРОБУЙ ТЕПЕРЬ НАЖАТЬ';
        console.log(number);
        circle.style.transition = '0.5s';
       
        interval2 = setInterval(() => {
            circle.style.transform = 'translateX(300px)';
        }, 500);
        interval =  setInterval(() => {
        circle.style.transform = 'translateX(-300px)';
        }, 1000);

    }else {clearInterval(interval);  clearInterval(interval2)}

    localStorage.getItem('count') == 46? text.textContent = ' ого, а ты умелый' : console.log(number);
    localStorage.getItem('count') == 47? text.textContent = ' я б даже сказал «продвинутый пользователь компьютера»' : console.log(number);
    localStorage.getItem('count') == 48? text.textContent = 'ты правда хочешь что б все в мире погибло?' : console.log(number);
    localStorage.getItem('count') == 49? text.textContent = ' ТЫ УВЕРЕН??' : console.log(number);
    localStorage.getItem('count') == 50? text.textContent = 'что с тобой не так???' : console.log(number);
    localStorage.getItem('count') == 51? text.textContent = 'ОТКУДА СТОЛЬКО НЕНАВИСТИ??' : console.log(number);
    localStorage.getItem('count') == 52? text.textContent = 'почему ты хочешь что б все погибло???' : console.log(number);
    localStorage.getItem('count') == 53? text.textContent = 'НЕ СЛЫШУ ' : console.log(number);
    localStorage.getItem('count') == 54? text.textContent = 'ГОВРИ ГРОМЧЕ' : console.log(number);
    localStorage.getItem('count') == 55? text.textContent = 'А?' : console.log(number);
    localStorage.getItem('count') == 56? text.textContent = 'ЧТО???' : console.log(number);
    localStorage.getItem('count') == 57? text.textContent = 'НЕ СЛЫШУ?????' : console.log(number);
    localStorage.getItem('count') == 58? text.textContent = 'ладно, хорошие попытки' : console.log(number);
    localStorage.getItem('count') == 59? text.textContent = 'отдаю тебе дань уважения ЗА ЭТО ' : console.log(number);
    localStorage.getItem('count') == 63? text.textContent = 'но можешь больше не пытаться, я все равно не услышу' : console.log(number);

//  71. 
//  72. (*какое-либо действие 6*)
//  73. 

if( localStorage.getItem('count') == 60 ){
    text.textContent = 'НО ВСЕ РАВНО ПОПРОБУЙ НАДАТЬ ЕЩЁ РАЗ ХА ХА '; 
    console.log(number);
    circle.style.opacity = '0'; 
    circle.style.margin =  '15px';
} 


    if (localStorage.getItem('count') == 61) {
        circle.style.margin = '0 auto';
        text.textContent = 'ОГО, ОЧЕНЬ ДАЖЕ НЕПЛОХО';

    }
localStorage.getItem('count') == 62? text.textContent = 'окей, признаю, попытка была хороша, но как ты справишься с ЭТИМ' : console.log(number);
    localStorage.getItem('count') == 64? text.textContent = ' ОГО! НЕ ПЛОХО' : console.log(number);
    localStorage.getItem('count') == 65? text.textContent = 'МОЛОДЕЦ! НО МИР ТЕБЕ Я ВСЕ ТАКИ НЕ ДАМ УНИЧТОЖИТЬ' : console.log(number);
    localStorage.getItem('count') == 66? text.textContent = ' почему ты хочешь уничтожить моё творение?(' : console.log(number);
    localStorage.getItem('count') == 67? text.textContent = 'ТЕБЕ ПРАВДА ЭТО НРАВИТСЯ?' : console.log(number);
    localStorage.getItem('count') == 68? text.textContent = 'СМОТРИ КАКОЙ ПРЕКРАСНЫЙ МИР' : console.log(number);

    //  85. (*какое-либо действие 8*)

    localStorage.getItem('count') == 69? text.textContent = 'ВСЕ ЕЩЕ! НЕ ПОНЯТНО???' : console.log(number);
    localStorage.getItem('count') == 70? text.textContent = ' почему ты так хочешь это сделать....' : console.log(number);
    localStorage.getItem('count') == 71? text.textContent = ' ПРОШУ НЕ НАДО!!!!!!!' : console.log(number);
    localStorage.getItem('count') == 72? text.textContent = ' почему ты меня не слушаешь...' : console.log(number);
    localStorage.getItem('count') == 73? text.textContent = 'опять....' : console.log(number);
    localStorage.getItem('count') == 74? text.textContent = 'если честно, я уже устал....' : console.log(number);
    localStorage.getItem('count') == 75? text.textContent = ' ты всё нажимаешь и....' : console.log(number);
    localStorage.getItem('count') == 76? text.textContent = 'нажимаешь...' : console.log(number);
    localStorage.getItem('count') == 77? text.textContent = ' а я тут сижу и пытаюсь тебя остановить....' : console.log(number);
    localStorage.getItem('count') == 78? text.textContent = ' понимаешь, это сложно...' : console.log(number);
    localStorage.getItem('count') == 79? text.textContent = 'как физически, так и психологически....' : console.log(number);
    localStorage.getItem('count') == 80? text.textContent = 'прошу.....' : console.log(number);
    localStorage.getItem('count') == 81? text.textContent = 'перестань.....' : console.log(number);

//  100. 
//  101. (*какое-либо действие 9*)
//  102. 

    localStorage.getItem('count') == 82? text.textContent = 'ПЕРЕСТАНЬ ' : console.log(number);
    localStorage.getItem('count') == 83? text.textContent = 'почему ты такой упёртый.....? ' : console.log(number);
    localStorage.getItem('count') == 84? text.textContent = 'вот скажи, что тебе это даст? ' : console.log(number);
    localStorage.getItem('count') == 85? text.textContent = 'чего ты хочешь этим добиться...? ' : console.log(number);
    localStorage.getItem('count') == 86? text.textContent = 'зачем это всё.....? ' : console.log(number);
    localStorage.getItem('count') == 87? text.textContent = 'зачем тебе ЭТО.....?' : console.log(number);
    localStorage.getItem('count') == 88? text.textContent = 'почему ты просто не хочешь остановится...?' : console.log(number);
    localStorage.getItem('count') == 89? text.textContent = 'НУ ЛАДНО. КАК ХОЧЕШЬ. НОПОПРОБУЙ ТЕРЕРЬ НАЖАТЬ ХА ХА ' : console.log(number);

//  111. 
//  112. (*какое-либо действие 10*)
//  113.
localStorage.getItem('count') == 90? text.textContent = 'опять...' : console.log(number);
    localStorage.getItem('count') == 91? text.textContent = 'опять ты НАЖАЛ!!!!' : console.log(number);
    localStorage.getItem('count') == 92? text.textContent = ' И ЗАЧЕМ???' : console.log(number);
    localStorage.getItem('count') == 93? text.textContent = 'ВОТ ЗАЧЕМ????' : console.log(number);
    localStorage.getItem('count') == 94? text.textContent = 'Ю ДИД ЗИС ФОР ВОТ???' : console.log(number);
    localStorage.getItem('count') == 95? text.textContent = 'ФОР ВОТ?' : console.log(number);
    localStorage.getItem('count') == 96? text.textContent = 'ВОТ ЗАЧЕМ' : console.log(number);
    localStorage.getItem('count') == 97? text.textContent = 'НЕ ХОЧЕШЬ СКАЗАТЬ???' : console.log(number);
    localStorage.getItem('count') == 98? text.textContent = 'ты ведь понимаешь что может произойти???' : console.log(number);
    localStorage.getItem('count') == 99? text.textContent = 'ДА???' : console.log(number);
    localStorage.getItem('count') == 100? text.textContent = 'НАДЕСЮ ДА ' : console.log(number);

 if ( localStorage.getItem('count') == 101) {
        text.textContent = 'ВСЁ!!! Я СКАЗАЛ БОЛЬШЕ НЕ НАЖИМАЙ!!!';
        console.log(number);
        circle.style.transition = '0.5s';
       
        interval4 = setInterval(() => {
            circle.style.transform = 'translateX(300px)';
        }, 500);
        interval3 =  setInterval(() => {
        circle.style.transform = 'translateX(-300px)';
        }, 1000);

    }else {clearInterval(interval3);  clearInterval(interval4)}

    localStorage.getItem('count') == 102? text.textContent = ' ОПЯТЬ ТЫ СПРАВИЛСЯ!!' : console.log(number);
    localStorage.getItem('count') == 103? text.textContent = ' блин....(' : console.log(number);
    localStorage.getItem('count') == 104? text.textContent = 'ОПЯТЬ' : console.log(number);
    localStorage.getItem('count') == 105? text.textContent = 'как тебе удаётся???' : console.log(number);
    localStorage.getItem('count') == 106? text.textContent = 'ВОТ КАК?' : console.log(number);
    localStorage.getItem('count') == 107? text.textContent = 'окей, я дам тебе то, что ты хочешь ' : console.log(number);
    localStorage.getItem('count') == 108? text.textContent = 'ТЫ САМ ТО ПОНИМАЕШЬ ЧЕГО ХОЧЕШЬ???!!??!??' : console.log(number);
    localStorage.getItem('count') == 109? text.textContent = 'ВОТ И Я НЕ ПОНИМАЮ' : console.log(number);
    localStorage.getItem('count') == 110? text.textContent = 'ТАК ЧТО ПРОСТО ПОПРОБУЙ ЁЩЕ РАЗ НАЖАТЬ' : console.log(number);

//  137. 
//  138. (*какое-либо действие 12*)
//  139. 

    localStorage.getItem('count') == 111? text.textContent = 'ОГО!! ТЫ СМОГ' : console.log(number);
    localStorage.getItem('count') == 112? text.textContent = 'опять.......' : console.log(number);
    localStorage.getItem('count') == 113? text.textContent = ' хорошо...' : console.log(number);
    localStorage.getItem('count') == 114? text.textContent = 'я дам тебе то что ты хочешь ' : console.log(number);
    localStorage.getItem('count') == 115? text.textContent = ' НО ПОМНИ ! ' : console.log(number);
    localStorage.getItem('count') == 116? text.textContent = 'Я ТЕБЯ ПРЕДУПРЕЖДАЛ!!' : console.log(number);
    localStorage.getItem('count') == 117? text.textContent = 'МОЖЕТ ТЫ ПЕРЕДУМАЕШЬ? ' : console.log(number);
    localStorage.getItem('count') == 118? text.textContent = 'ладно....' : console.log(number);
    localStorage.getItem('count') == 119? text.textContent = 'делай что хочешь...' : console.log(number);

//  150. 
//  151. (* кнопку, про нажатии на которую происходит взрыв. 13*)
//  152.


} 

circle.addEventListener('click' , () => {
    circle.classList.add('pressed');
    
event.target.style.pointerEvents = 'none';
setTimeout(() => {
    circle.style.pointerEvents = 'unset';

}, 400);

    setTimeout(() => {
        circle.classList.remove('pressed');
    }, 400);


    localStorage.setItem('count', number+1);
    number++;
    A();
})
