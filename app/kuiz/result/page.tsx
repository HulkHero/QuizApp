'use client'
import React from 'react'
import { useQuiz } from '../../context/Provider'
import { dataType } from '@/app/components/types'
const Result = () => {
     const {state}=useQuiz()
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    let totalScore=0;

    state.data.forEach((item:dataType, index:number) => {
        totalScore=totalScore + item.marks
        if (item.selectedOption === item.correctOption) {
            score=score + item.marks
            correct += 1;
        } else if (item.selectedOption === "") {
            skipped += 1;
        } else {
            score=score-item.marks
            wrong += 1;
        }
    })

  return (

    <div className='text-black'>
        <h1 className="text-2xl font-bold text-center text-white pt-4">Result</h1>
        <div className="flex flex-col justify-center items-center bg-white  rounded my-6">
              <div className='p-4 space-y-2'>
                <h1 className='text-center font-semibold text-2xl text-blue-600'>Score : {score}</h1>
                <h1 className='text-center font-semibold text-2xl text-green-700'>Correct : {correct}</h1>
                <h1 className='text-center font-semibold text-2xl text-red-700'>Wrong:{wrong}</h1>
              </div>

              <div>
                 {
                        state.data.map((item:dataType,index:number) => (
                            <div key={index} className='bg-white border-b-2 rounded my-6 mx-4 p-4 space-y-3'>
                                <h1 className='text-center font-semibold '>{`Q${index+1}: ${item.question}`}</h1>
                                <h1 className='text-center '>Correct Option : {item.correctOption}</h1>
                                <h1 className='text-center '>Your Option : {item.selectedOption===""? "NA":item.selectedOption}</h1>
                                <h1 className='text-center'>Status:{item.selectedOption===""?"Skipped" : item.selectedOption === item.correctOption ? "Correct" : "Wrong"}</h1>
                            </div>
                        ))
                 }
              </div>
                </div>
    </div>
  )
}

export default Result