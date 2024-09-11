window.onload=function(){
    let minutes=0;
    let seconds=0;
    let tens=0o0;
    let Interval;
    let appandedMinutes=document.querySelector('#minutes')
    let appandedSeconds=document.querySelector('#seconds')
    let appandedTens=document.querySelector('#tens')
    let startBtn=document.querySelector('#start')
    let stopBtn=document.querySelector('#stop')
    let resetBtn=document.querySelector('#reset')

  const startTimer=()=>{
    tens++
    if(tens<=9){
        appandedTens.innerHTML='0'+tens
    }
    if(tens>9){
        appandedTens.innerHTML=tens
    }
     if(tens>99){
        seconds++;
        appandedSeconds.innerHTML="0"+seconds;
        tens=0;
        appandedTens.innerHTML='0'+0
     }
     if(seconds>9){
        appandedSeconds.innerHTML=seconds
     }
     if(seconds >59){
        minutes++
        appandedMinutes.innerHTML ="0"+minutes
        seconds=0
        appandedSeconds.innerHTML="0"+0

     }
  }
  startBtn.onclick=()=>{
    clearInterval(Interval)
    Interval=setInterval(startTimer,10)
  };
  stopBtn.onclick=()=>{
    clearInterval(Interval)
  }
  resetBtn.onclick=()=>{
    clearInterval(Interval)
    tens='00'
    seconds='00';
    minutes='00';
    appandedSeconds.innerHTML=seconds
    appandedMinutes.innerHTML=minutes
    appandedTens.innerHTML=tens
  }


}