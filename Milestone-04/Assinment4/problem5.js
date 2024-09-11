function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let totalTimes = 0;
  for (const waitingTime of waitingTimes) {
    totalTimes += waitingTime;
  }
 
  let mySeriaCount = serialNumber - waitingTimes.length - 1 ;
 if( mySeriaCount <= 0){
    return 0
 }  
  let avarageTime = totalTimes / waitingTimes.length;
  return mySeriaCount * Math.round(avarageTime)
}
