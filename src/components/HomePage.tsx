// import { Link } from 'react-router-dom';
import HomeLandingPage from './sub-components/HomeLandingPage';
import HomeInfoCard from './sub-components/HomeInfoCard';
import { homeInfoCard1, homeInfoCard2, homeInfoCard3 } from '../texts';

const HomePage = () : React.ReactElement => {

  return(
    <div className="h-full">
      <HomeLandingPage />

      <section className='flex flex-col h-[150vh] md:h-[100vh] w-full'>
         <div className='md:relative md:-top-10 flex flex-col md:flex-row justify-evenly w-full h-full md:h-[500px]'>
            <HomeInfoCard bgColor='bg-black' fgColor='text-slate-100' info={homeInfoCard1} logoCode='u' />
            <HomeInfoCard bgColor='bg-slate-100' fgColor='text-black' info={homeInfoCard2} logoCode='L' />
            <HomeInfoCard bgColor='bg-black' fgColor='text-slate-100' info={homeInfoCard3} logoCode='>'/>
         </div>
         {/* <div className={`p-9 h-full w-full md:w-[60%] flex flex-col gap-y-5 items-start justify-center`}>
            <span className='text-5xl sm:text-6xl lg:text-[80px] text-slate-100'><strong>ANYTHING</strong> CAN BE <strong className='text-indigo-500'>BUILT</strong>.</span>
            <span className='text-lg sm:text-2xl lg:text-3xl text-indigo-800 bg-slate-100 p-1 rounded-md'>Providing quality, reliable, excellent, safe and efficient construction service since 2002.</span>
            <div className='flex gap-x-5'>
               <Link to='/about-us' reloadDocument={true} className='text-sm md:text-base bg-indigo-800 rounded-lg text-slate-200 p-[12px] hover:duration-1000 hover:bg-slate-400 hover:text-slate-900 hover:animate-in hover:slide-in-from-left-2'>{String.fromCharCode(8594)} MORE ABOUT US</Link>
               <Link to='/our-servicess' reloadDocument={true} className='text-sm md:text-base bg-indigo-800 rounded-lg text-slate-200 p-[12px] hover:duration-1000 hover:bg-slate-400 hover:text-slate-900 hover:animate-in hover:slide-in-from-left-2'>{String.fromCharCode(8594)} OUR SERVICES</Link>
            </div>
         </div> */}
      </section>

    </div>
  )
}

export default HomePage;