let stopwatchInterval;
let stopwatchTime=0;
function updateStopwatch(){
  stopwatchTime++;
  const hours= String(Math.floor(stopwatchTime/3600)).padStart(2,'0');
  const minutes = String(Math.floor((stopwatchTime%3600)/60)).padStart(2,'0');
  const seconds = String(stopwatchTime%60).padStart(2,'0');
  document.getElementById('stopwatch').textContent= `${hours}:${minutes}:${seconds}`;
}
function startStopwatch(){
  if(!stopwatchInterval){
    stopwatchInterval=setInterval(updateStopwatch,1000);
  }
}
function stopStopwatch(){
  clearInterval(stopwatchInterval);
  stopwatchInterval=null;
}
function resetStopwatch(){
  stopStopwatch();
  stopwatchTime=0;
  document.getElementById('stopwatch').textContent="00:00:00"
}



function updateClock(){
  const now=new Date();


  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours>=12?'PM':'AM';
 
  
  hours = String(hours).padStart(2,'0');
  minutes = String(minutes).padStart(2,'0');
  seconds = String(seconds).padStart(2,'0');
  const timeString= `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('clock').textContent=timeString;





}
setInterval(updateClock,1000);
updateClock(

)