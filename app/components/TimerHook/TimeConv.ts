const formatTimetoNumber = (time:string) => {
   let timeArray = time.split(":");
    let timeInNumber = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
    return timeInNumber; 
  };

export  const formatTimetoString = (time:number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

export default formatTimetoNumber;  