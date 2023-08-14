import React from 'react'
import { initialStateProps } from './types'
type Props = {
  index:number
  handleNext:()=>void,
  handleSkip:()=>void,
  state:initialStateProps,
}

const KuizFooter = ({index,handleNext,handleSkip,state}:Props) => {
     
       
  return (
    <div className='flex flex-row justify-between items-center px-3 pb-4'>
    <div className='bg-white flex'>
      <div>
          <h1 className='text-center  text-lg'>{`Q${index + 1}/15`}</h1>
      </div>
      <div className='mx-2'>
        <h1 className={`${state.data[index].difficulty==='hard'&& 'text-red-600'} ${state.data[index].difficulty==='medium'&& 'text-yellow-600'} ${state.data[index].difficulty==='easy'&& 'text-green-600'}  text-center font-medium text-lg`}>{state.data[index].difficulty} </h1>
      </div>
    </div>
      <div className='space-x-4'>
       <button onClick={handleSkip} className='bg-gray-600 text-white px-4 py-2 rounded-md'>Skip</button>
       <button onClick={handleNext} disabled={state.data[index].selectedOption===""?true:false}  className='bg-blue-600 disabled:bg-blue-300 disabled:text-gray-400 text-white px-4 py-2 rounded-md'>Next</button>
       </div>    
    </div>
  )
}

export default KuizFooter