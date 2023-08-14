'use client'
import React from 'react'
import useTimer from '../components/TimerHook/useTimer'
import data from '../data/data.json'
import { useRouter } from 'next/navigation'
import RadioInputs from '../components/RadioInputs'
import { useQuiz } from '../context/Provider'
import KuizFooter from '../components/KuizFooter'
import ProgressBar from '../components/ProgressBars/ProgressBar'
import TimerProgressbar from '../components/ProgressBars/TimerProgressbar'


const Kuiz = () => {
  const router = useRouter()
  const {state,dispatch} = useQuiz()
  const {index} = state
  let initialTime = 30;
  // const [disabled, setDisabled] = React.useState(true)
 
  if(state.data[index].difficulty==="hard"){
    initialTime=70
  }
  else if(state.data[index].difficulty==="medium"){
    initialTime=50
  }
  const {time,setTimeRemaining} = useTimer({time:initialTime,index})
  
  const handleSkip = () => {
    dispatch({type:'SKIP',payload:{index}})
    handleNext()
  }

  const handleNext = () => {
    if(index<14){
      dispatch({type:'NEXT'})
   
    }
    else{
      router.push('/kuiz/result')
    }
  }

  React.useEffect(() => {
    if (time === '-1:0-1') {
      handleNext();
    }
  }, [time]);

  const handleOptionChange = (selectedValue:string) => {
    console.log('Selected option:', selectedValue);
    dispatch({type:'ANSWERED',payload:{selectedValue,index}})
  };
 

  return (
   
      <div className='w-full rounded-md md:w-[80%]  mx-auto  sm:py-[10%] '>
        <div className=' bg-white rounded-md text-gray-900  h-screen  sm:min-h-[80%] flex flex-col justify-between sm:justify-start sm:h-fit '>
        <div>
        <div className='bg-primary p-3 shadow-md '>
          <h1 className='text-center text-white text-xl'>General Assesment : {time==='-1:0-1'?"00:00":time}</h1>
        </div>
        <TimerProgressbar time={time} initialTime={initialTime}></TimerProgressbar>
        <div>
          <div className='bg-white px-3 py-4 border-b-2'>
            <p >
              {data[index].question}
            </p>
          </div>
          <div className='bg-secondary'>
            <RadioInputs options={data[index].options}  onChange={handleOptionChange}  />
          </div>
        </div>
        </div> 
        <div>
        <ProgressBar index={index}></ProgressBar>
       <KuizFooter index={index} handleNext={handleNext} handleSkip={handleSkip} state={state}  ></KuizFooter>
       </div> 
      </div>
      </div>
  )
}

export default Kuiz
