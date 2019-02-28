let count = 0;
let startButton = document.querySelector(".startBtn");
let stopButton = document.querySelector(".stopBtn");
let resetButton = document.querySelector(".resetBtn");

startButton.addEventListener("click",()=>{
    let interval = setInterval(beginTimer, 1000);
    function beginTimer(){
        if(count > -1){
            count = count + 1;
        }
    let second = count % 60;
    let minute = Math.floor(count/60);
    let hour = Math.floor(minute/60);
    console.log(count);
    console.log(hour + " hours");
    console.log(minute + " minutes");
    console.log(second + " seconds");

        if(hour < 10){
            document.querySelector(".hours").innerHTML = "0" + hour;
        // }else if(hour < 10){
        //     document.querySelector(".hours").innerHTML = "0" + hour;
        }else{
            document.querySelector(".hours").innerHTML = hour;
        }
        
        if(minute < 10){
            document.querySelector(".minutes").innerHTML = "00"
        // }else if(minute < 10){
        //     document.querySelector(".minutes").innerHTML = "0" + minute;
        }else{
            document.querySelector(".minutes").innerHTML = minute;
            console.log(minute);
        }
        console.log(minute);

        if(second < 10){
            document.querySelector(".seconds").innerHTML = "0" + second;
        }else{
            document.querySelector(".seconds").innerHTML = second;
        }


    stopButton.addEventListener("click", ()=>{
        interval = null;
    })
}
})