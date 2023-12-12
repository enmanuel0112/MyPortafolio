import React from 'react';
import burger from './asset/img/burger.jpg';
import ageCalculator from './asset/img/age-calculator.jpg';
import cafe from './asset/img/cafe.png';
import loopstuidos from './asset/img/loopstudios.jpg';


 export const Projects = () => {
  return (
    <>
        <div className=' grid  gap-5 md:grid-cols-1 lg:grid-cols-2 m-auto items-center w-[90%] h-auto'>
 
            
                <div className='m-auto mb-[3rem]'>
                       
                    
                          <img src={burger} alt="" className='w-[400px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px] rounded-[10px] ' />
                       
                        
                            <h3 className='text-white text-[1.5rem] p-2 font-jura'>DESIGN BURGER APP</h3>   
                            <p className='text-[#8B08C9] p-2 text-[1.2rem] font-jura font-thin mb-[1rem]'>HTML <span className='mx-[10px] '>CSS </span> <span className='mx-[10px] '>JAVASCRIPT</span> </p>

                            <div>
                            <a href="#" target='_blank' className='px-3 py-[20px] text-white font-jura font-bold relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%]'>VIEW PROJECT</a>

                            <a href="https://github.com/enmanuel0112/Burger-Proyect" target='_blank' className='px-3 py-[20px]  text-white font-jura font-bold relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%] '>VIEW CODE</a>


                            </div>

                    </div>

                    
                <div className='m-auto mb-[3rem] '>
                      
                    
                          <img src={ageCalculator} alt="" className='w-[400px] h-[300px] md:w-[500px] md:h-[400px]  lg:w-[600px] lg:h-[500px] rounded-[10px] ' />
                  
                            
                        <h3 className='text-white text-[1.5rem] p-2 font-jura'>DESIGN AGE CALCULATOR APP</h3>   
                        <p className='text-[#8B08C9] p-2 text-[1.2rem] font-jura font-thin mb-[1rem]' >HTML <span className='mx-[10px] '>CSS </span> <span className='mx-[10px] '>JAVASCRIPT</span>  </p>

                        <div >
                            <a href="#" target='_blank' className='px-3 py-[20px] text-white font-jura font-bold relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%] '>VIEW PROJECT</a>

                            <a href="https://github.com/enmanuel0112/second-fronted-menthor" target='_blank'  className='px-3 py-[20px]  text-white font-jura font-bold relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%] '>VIEW CODE</a>


                            </div>

                    </div>
                

                    
                <div className=' m-auto mb-[3rem]'>
                       
                     
                          <img src={cafe} alt="" className='w-[400px] h-[300px] lg:w-[600px] md:w-[500px] md:h-[400px]  lg:h-[500px] rounded-[10px] ' />
                    
                    
                        <h3 className='text-white text-[1.5rem] p-2 font-jura'>DESIGN CAFE LAYOUT</h3>   
                        <p className='text-[#8B08C9] p-2 text-[1.2rem] font-jura font-thin mb-[1rem]'>HTML <span className='mx-[10px] '>CSS </span>  </p>

                        <div>
                            <a href="#" target='_blank' className='px-3 py-[20px]  text-white font-jura font-bold  relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%]'>VIEW PROJECT</a>

                            <a href="https://github.com/enmanuel0112/Cafe " target='_blank' className='px-3 py-[20px]  text-white font-jura font-bold  relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%]'>VIEW CODE</a>


                            </div>

                    </div>
                

                    
                <div className=' m-auto mb-[3rem]'>
                   
                
                          <img src={loopstuidos} alt="" className='w-[400px] h-[300px] lg:w-[600px] md:w-[500px] md:h-[400px]  lg:h-[500px] rounded-[10px] object-' />

                        <h3 className='text-white text-[1.5rem] p-2 font-jura'>DESIGN LOOPSTUDIOS LANDING PAGE</h3>   
                        <p className='text-[#8B08C9] p-2 text-[1.2rem] font-jura font-thin mb-[1rem]'>HTML <span className='mx-[10px] '>CSS</span>  <span className='mx-[10px] '>JAVASCRIPT</span>  </p>

                        <div>
                            <a href="#" target='_blank' className='px-3 py-[20px]  text-white font-jura font-bold relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%] '>VIEW PROJECT</a>
                            
                            <a href="#" target='_blank'  className='px-3 py-[20px]  text-white font-jura font-bold  relative before:absolute before:bottom-[10px] before:h-[2px] before:w-[0%] before:bg-red-700 before:duration-[0.5s] hover:before:w-[80%]'>VIEW CODE</a>


                            </div>

                    </div>
        
        


      
     

      </div>
     
    
    
    
    
    
    </>
   
  )
}

