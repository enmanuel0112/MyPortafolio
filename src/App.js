import {Hero, Nav} from './hero';
import { About } from './about';
import background from './asset/img/background-header.png'

function App() {
  return (
   <>
   
 
   
    <header>
    <div className='fixed w-[100%] h-[2rem] bg-red-700 m-auto index-[1]'>
   <Nav />
   </div>
          <img src={background} alt='Background image' className=' object-cover lg:object-fill w-full  md:w-[100%] h-[40vh] md:h-[50vh] lg:h-[70vh]'></img>
        <Hero/>

    </header>

    <h2 className='text-center my-[4rem] text-white text-[2rem] md:text-[3rem] font-jura font-bold'>About Me</h2>
   
   
      <About/>
   </>
  );
}

export default App;
