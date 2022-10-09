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
    
})

button.addEventListener("click", play);


function play() {

    const userNumber = document.querySelector("#guess").value;
    
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter a number from 1 to 20!',                
        })
        input.value="";
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'You have to enter a number!',             
        })
        input.value="";
        
    }

    else {
        if (userNumber < answer) {
            Swal.fire('Few! Try again!',
            "Don't give up!");  
            input.value="";         
            
        }
        else if (userNumber > answer) {
            Swal.fire('A lot of! Try again!',
            "Don't give up!");  
            input.value="";          
        }
        else {
            Swal.fire({
                title: 'Win!!! Congratulations!!!',                
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