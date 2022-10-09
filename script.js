const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;
console.log(answer);
const buttonNew = document.querySelector("#btnNew");
const stopMusic = document.querySelector(".stop");


input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        play();
    };
    // const stop = document.querySelector(".stop").classList.remove("opacity");
    // const song = document.querySelector("#myAudio");
    // song.pause();
})

button.addEventListener("click", play);

// 1 - доступ к числу пользователя
// 2 - убрать возм.ввести число <1 и >20
// 3 - только цифры!!!
// 4 - команда генерировать число
// 5 - если введено ниже - введи выше
// 6 - если введено выше - введи ниже
// 7 - если равно - победа!
// 8 - подключаем кнопку Enter (#13)
// 9 - освобождаем поле после каждой проверки
// 10 - добавила музыку в связке с победой
// 11 - добавила кнопку новая игра
// 12 - прицепила к ней остановку музыки и перезагрузку страницы


function play() {

    const userNumber = document.querySelector("#guess").value;
    
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 20!',                
        })
        input.value="";
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',             
        })
        input.value="";
        
    }

    else {
        if (userNumber < answer) {
            Swal.fire('Мало! Попробуй ещё раз!',
            'Не сдавайся!');  
            input.value="";         
            
        }
        else if (userNumber > answer) {
            Swal.fire('Много! Попробуй ещё раз!',
            'Не сдавайся!');  
            input.value="";          
        }
        else {
            Swal.fire({
                title: 'УРА!!! Победа!!!',                
                imageUrl: 'https://i.gifer.com/S5q.gif',
                imageWidth: 320,
                imageHeight: 300,
                imageAlt: 'Never give up!',
            })  
            input.value="";  
            document.querySelector('#myAudio').play();
        }



    }
}

buttonNew.addEventListener("click", ()=>{
    document.location.reload();    
});
stopMusic.addEventListener("click", ()=>{
    const song = document.querySelector("#myAudio"); 
    song.pause();      
});


// function playNew() {    
//    document.querySelector("#myAudio").pause();   
    
// } 

// 

// function stop() {
//     document.querySelector("#myAudio").pause();  
// }