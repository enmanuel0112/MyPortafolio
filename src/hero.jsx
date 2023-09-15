import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import resume from './asset/img/resume.png'


 export const Nav = () =>{

  return(
    <>
    
      <nav className='flex justify-between place-items-center  place-content-center p-2 '>
       
        <h1> Cesar<span>Ogando</span> </h1>
     
      
        <a href="#">Projects</a>
        <a href="#">About Me</a>
        <a href="#">BLog</a>
        <a href="#">Contact</a>


      </nav>
    
    
    </>



  )


}












 export const Hero = () =>{

 return (
    <>
      
  
       
        <div className='absolute  inset-[10%] md:inset-[20%] text-center w-auto'>

             
       

            <h2 className='text-[1.2rem] md:text-[2.5rem] text-white font-jura '>Cesar Ogando Front-end Developer  / 
            <TypeAnimation
            
            sequence={[
              // Same substring at the start will only be typed out once, initially
              ' HTML',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              ' CSS',
              1000,
              'SASS',
              1000,
              ' Tailwindcss',
              1000,
              'Javascript',
              1000,
              ' React',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: 'text-[1rem] md:text-[2rem]', display: 'inline-block' }}
            repeat={Infinity}
            className='text-red-600 text-bold '
            
          />

            </h2>

            <a href={resume}  target='blank' download={resume} >

            <button className='bg-white rounded-[5px] p-1 md:p-2 text-[1rem]  md:text-[1.2rem] mt-[2rem] cursor-pointer hover:bg-[#222222] hover:text-white hover:duration-[0.8s] font-bold font-jura'>Resume</button>

            </a>


        </div>



    </>

 )


}

