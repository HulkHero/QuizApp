import React,{useState,useEffect} from 'react'
// timer in react js
import {formatTimetoString} from './TimeConv'
interface TimerProps {
  time:number,
  index:number
}

const useTimer = ({time,index}:TimerProps) => {


  const [timeRemaining, setTimeRemaining] = useState<number>(time);

  useEffect(() => {
    setTimeRemaining(time);
    },[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime < 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  
   let timer=  formatTimetoString(timeRemaining)


  return {
    time: timer,
    setTimeRemaining,
  }
}

export default useTimer