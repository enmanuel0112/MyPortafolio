import React, {useState} from 'react';

import star from './asset/img/Star 1.png';
import balls from './asset/img/balls.png';          
import aboutPicture from './asset/img/about-picture.png'




export const About = () =>{


        const [visible, setVisible] = useState(true);

        const toggle =  () =>  setVisible(!visible)

    return(

        <>
            <div className='  w-100% p-2  lg:w-[90%] m-auto lg:grid'>

                <div className=' lg:grid lg:grid-cols-2'>

                <div className='relative m-auto  '>
                            <img src={balls} alt=""  className='w-[300px] m-auto  animate-spin md:w-[500px] lg:w-[500px] lg:m-auto'/>
                        <div className=' absolute inset-[20%] '>

                                <img src={star} alt="" className='w-[250px] m-auto mt-[-1rem] md:w-[400px] md:mt-[-3rem] md:ml-[2rem] lg:ml-[auto] lg:mt-[1rem]  lg:w-[auto]' />    

                        </div>

                </div>
               



            <div className='relative mt-8'>

              
                               
                        <div className='w-[90%] m-auto bg-[#131313] p-3 rounded-lg md:w-[70%] md:h-[auto] md:p-5  lg:w-[60%] lg:h-[auto] lg:p-[1.5rem] mb-[4rem] '>

                        <h2 className='text-white text-[2rem] text-center p-5 font-jura font-bold'>Who I am?</h2>

                        <p className='text-white lg:text-[1.2rem] font-jura '>Hi, my name is " Cesar Ogando " and I am a Junior Frontend developer. I have experience working in  <span className='text-[#8B08C9]'> HTML , CSS/Sass/Tailwind , Javascript </span> I also have a good command of tools like  <span className='text-[#8B08C9]'>Figma </span> and <span className='text-[#8B08C9]'>Adobe Photoshop </span> I am learning new technologies like <span className='text-[#8B08C9]'>React.js</span> .

                        I am a person who seeks to contribute his productivity wherever he goes while maintaining resilience and above all, adding passion to each project that I join and always giving 101% of myself in everything I do.</p>

                        <div className='flex'>   
                            
                               <button className='w-[150px] p-2 mt-4 m-auto bg-[#8B08C9] text-white text-bold rounded-sm cursor-pointer font-jura duration-[0.5s]'
                                onClick={toggle}

                               >{visible ? 'More Infor ' : 'Less Infor '}</button>

                        </div>

                                
                          </div>

                

            </div>


                </div>




            </div>

            <div className={ visible ? ' hidden ' : 'block bg-white h-auto p-5  ' }>

                <h2 className='font-jura font-bold text-center text-[#131313] text-[2rem] p-3 mb-[2rem]'>More About Me</h2>

                    <div className='grid lg:grid-cols-2 w-[100%] lg:w-[80%] m-auto'>
                        
                            <div className=' m-auto '>
                                 <img src={aboutPicture} alt='' className='w-[250px] h-auto lg:w-[350px] lg:h-[600px] m-auto mb-[2rem]'></img>
                           </div>



                        <div className=''>
                        
                    
                        
                                    
                        <div className=' bg-[#131313] h-[auto] w-auto md:w-[450px] lg:w-[500px] m-auto rounded-[10px] shadow-lg mb-[2rem] p-4 col-span-1'>


                                    <p className='text-white p-3 font-jura' > <span className='font-bold' >Name:</span> Cesar Ogando</p>
                                    <p className='text-white p-3 font-jura'><span className='font-bold'>Age:</span> 24 years old</p>
                                    <p className='text-white p-3 font-jura'><span className='font-bold'>Language:</span> English / Spanish </p>
                                    <p className='text-white p-3 font-jura'><span className='font-bold'>Nationality:</span> Dominican Republic </p>
                                    

                                </div>    

                                <h2 className='text-[#000000] p-7 font-jura text-center text-[1.8rem] mb-[1rem]'>My Blog</h2>

                                <div className=' border-2 border-red-700 w-[100%] lg:w-[100%] h-auto m-auto col-span-2'>

                                
                                    
                                    <h3 className='text-center text-[1.5rem] p-5 font-jura font-bold text-[#8B08C9]'>" Goals as a software developer " </h3>

                                       
                                    <p className='p-2 text-[1.2rem] text-center font-jura font-bold' > 
                                    I am a junior developer, I have been studying software engineering for around 2 years <span> and I am a self-taught person.</span>
                                    </p>
                                    <ul className='p-5'>
                                        <li className=' m-4 font-jura  list-disc'> I am looking for a company where I can grow and that has a mutual benefit for both me and the company that hires me.</li>

                                        <li className=' m-4 font-jura list-disc '> I am a person who is more interested in knowledge and experience than in the economic side since I can convert my knowledge into money.</li>

                                        <li className=' m-4 font-jura list-disc'> I have new challenges and technologies to learn, some of them are: NodeJS and Typescript since I am really interested in the backend side.</li>
                                        <li></li>


                                    </ul>

                                </div>





                        </div>

                        
                    </div> 
               

               
            </div>



            

        </>

    )
}
