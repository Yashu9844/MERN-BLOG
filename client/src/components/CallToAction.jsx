import { Button } from 'flowbite-react'
import React from 'react'

const CallToAction = () => {
  return (
    <div  className='flex flex-col sm:flex-row p-3 border border-teal-500 rounded-tl-3xl rounded-br-3xl items-center justify-center '>
           <div className='flex-1 justify-center item-center flex flex-col gap-8'>
            <h2 className='text-5xl'> Want to connect ?? </h2>
            <p className='text-3xl'> Check out my Linkdin account </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.linkedin.com/in/yashavanth-r-siddesh

" rel='noopener noreferrer'>Check Out</a>
            </Button>

           </div>
           <div className='p-7 pl-10flex-1'>
            <img src="https://www.shutterstock.com/shutterstock/photos/401325898/display_1500/stock-vector-web-development-in-gears-concept-computer-framework-vector-concept-on-web-development-and-software-401325898.jpg"  className='h-[20vw] w-[20vw] ' />
           </div>
    </div>
  )
}

export default CallToAction
