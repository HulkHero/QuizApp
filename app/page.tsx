import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-slate-900 h-screen  sm:py-20' >
      <div className='bg-slate-100 h-screen sm:h-fit sm:min-h-[80%] my-auto w-full p-4 flex flex-col  sm:w-[80%] mx-auto'>

         <div className='p-4'>
          <h1 className='text-center text-2xl font-bold '>Welcome to the General Assesment</h1>
          <p className='text-center mt-1 text-lg font-bold'>This is a general assesment to test your knowledge</p>
         </div>
         <div>
          <h1 className='text-2xl font-bold'>Before You Start</h1>
          <div className='my-2'>
            <h5><strong>15</strong>  Multiple Choice Questions </h5>
            <h5><strong>3</strong> Difficulty Levels</h5>
            <div className='my-2'>
              <h1 className='font-bold'>Marks:</h1>
              <div className='px-5'>
              <h5>Easy : 10 marks</h5>
              <h5>Medium : 15 marks</h5>
              <h5>Hard : 20 marks</h5>
              <h5 >Wrong answer will result in <strong>negative marks</strong></h5>
              <h5>Skipped or unattempted question will result in 0 marks</h5>
              </div>
              </div>
              <div>
                <h1 className='font-bold'>Time:</h1>
                <div className='px-5'>
                <h5>Easy :00:30 </h5>
                <h5>Medium : 00:50 </h5>
                <h5>Hard: 1:10 </h5>
                </div>
              </div>

              <div>
                <h1></h1>
              </div>
          </div>
         </div>

        <Link className='ml-auto mt-10 bg-blue-500 text-white py-2 px-4 rounded-lg' href={"/kuiz"} >Start</Link>
      </div>
    </main>
  )
  }