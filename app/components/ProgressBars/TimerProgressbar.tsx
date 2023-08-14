import React from 'react'
import formatTimetoNumber from '../TimerHook/TimeConv'

type Props = {
    time:string
    initialTime:number
}

const TimerProgressbar = ({time,initialTime}: Props) => {
    let timer=  formatTimetoNumber(time)
    let width = 0
    width=(timer)*100/(initialTime)
  return (
    <div className='mb-6 h-1 w-full bg-neutral-200 '>
        <div className={`h-1 bg-blue-800 transition-all duration-700  `} style={{width:`${width}%`}} ></div>
    </div>
  )
}

export default TimerProgressbar