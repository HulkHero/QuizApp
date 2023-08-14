import React from 'react'

type Props = {
    index:number
}

const ProgressBar = (props: Props) => {
    let width = 0
    width=(props.index+1)*100/15
  return (
    <div className='mb-6 h-5 w-full bg-neutral-200 '>
        <div className={`h-5 bg-primary transition-all duration-500  `} style={{width:`${width}%`}} ></div>
    </div>
  )
}

export default ProgressBar