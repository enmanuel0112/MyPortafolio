import {Hero} from './hero';
import { Projects } from './projects';
import { About } from './about';
import Contact from './contact';
import Footer from './footer';
import background from './asset/img/background-header.png'


function App() {
  return (
   <>

    
<div className='bg-[url("./asset/img/backgroud-page.png")] z-[1]  '>
   
    <header>
    
          <img src={background} alt='Background image' className=' object-cover lg:object-fill w-full  md:w-[100%] h-[40vh] md:h-[50vh] lg:h-[70vh]'></img>
        <Hero/>

    </header>

  


    <h2 className='text-center my-[4rem] text-white text-[2rem] md:text-[3rem] font-jura font-bold'>About Me</h2>
   
   
      <About/>


    <div>

    <h2 className='text-white text-[3rem] text-center my-[5rem] lg:my-[10rem] font-jura font-bold w-[90%] m-auto'  >Projects</h2>


       <Projects />
     


    </div>


    <div>

    <Contact/>
    </div>
   


      <Footer/>

    </div>

   </>
  );
}

export default App;
