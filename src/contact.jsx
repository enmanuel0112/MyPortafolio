import React from 'react'


const Contact = () => {
  return (
    <div className=' w-[90%] bg-[#4a494922] h-auto m-auto mb-[2rem] rounded-[8px]' >
        
        
       <h2 className='text-[2rem] font-jura font-bold text-white text-center my-[3rem] py-[5rem]'  > Contact</h2>
        

        <form className=' w-[100%] h-50vh ' >

        <div className='flex flex-col w-[80%] lg:w-[50%] m-auto p-[2rem]'>
            <label htmlFor="" id='name' className='text-white font-jura'>NAME</label>
            <input type="text"   className=' font-jura bg-[#4a494922] p-3 my-[8px] border-white  text-white'/>
            <label htmlFor="" id='email' className='text-white font-jura'>EMAIL</label>
            <input type="email"    className=' font-jura bg-[#4a494922] p-3 my-[8px] border-white text-white  ' />
            <div></div>
            <label htmlFor="" id='message' className='text-white font-jura'>MESSAGE</label>
            <textarea name="message" id="" cols="30" rows="10"    className=' font-jura bg-[#4a494922] p-3 my-[8px] border-white  text-white' ></textarea>
            <div></div>

                <button className='text-white font-jura p-[10px] text-[15px] text-center m-auto w-[150px] relative before:absolute before:bottom-[5px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[75%]'>SEND MESSAGE</button>
            </div>
     
        </form>
        
        
        </div>
  )
}

export default Contact