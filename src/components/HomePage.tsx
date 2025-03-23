import { Link } from 'react-router-dom';
import homeImg1 from '../images/home-1.jpg'
import { useRef } from 'react';
import useInViewport from '../useInViewport';
// import homeImg1 from '../images/home-2.webp'

const HomePage = () : React.ReactElement => {
   const ref:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport:boolean = useInViewport(ref)

  return(
    <div ref={ref} className="h-full flex flex-col items-center justify-center">
      <section className={`${isInViewport ? 'animate-in delay-700 duration-1.5s fade-in-5 slide-in-from-left-20' : 'invisible'} h-[70vh] bg-cover bg-[20%_0%] w-full md:bg-[10%_30%] bg-blue-400 bg-blend-luminosity`} style={{backgroundImage: `url(${homeImg1})`, }}>
         <div className={`p-9 h-full w-full md:w-[60%] flex flex-col gap-y-5 items-start justify-center`}>
            <span className='text-5xl sm:text-6xl lg:text-[80px] text-slate-100'><strong>ANYTHING</strong> CAN BE <strong className='text-indigo-500'>BUILT</strong>.</span>
            <span className='text-lg sm:text-2xl lg:text-3xl text-indigo-800 bg-slate-100 p-1 rounded-md'>Providing quality, reliable, excellent, safe and efficient construction service since 2002.</span>
            <div className='flex gap-x-5'>
               <Link to='/about-us' className='text-sm md:text-base bg-indigo-800 rounded-full text-slate-200 p-[12px] hover:duration-1000 hover:bg-slate-400 hover:text-slate-900 hover:animate-in hover:slide-in-from-left-2'>{String.fromCharCode(8594)} MORE ABOUT US</Link>
               <Link to='/our-servicess' className='text-sm md:text-base bg-indigo-800 rounded-full text-slate-200 p-[12px] hover:duration-1000 hover:bg-slate-400 hover:text-slate-900 hover:animate-in hover:slide-in-from-left-2'>{String.fromCharCode(8594)} OUR SERVICES</Link>
            </div>
         </div>
      </section>

    </div>
  )
}

export default HomePage;