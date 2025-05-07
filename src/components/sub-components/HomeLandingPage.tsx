import { Link } from "react-router-dom";
import useInViewport from "../../useInViewport";
import homeImg1 from '../../images/home-1.jpg'
import { useRef } from "react";


const HomeLandingPage = () : React.ReactElement => {
   const ref:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

   const isInViewport:boolean = useInViewport(ref)

   return (
      <section ref={ref} className={`${isInViewport ? 'visible' : 'visible'} min-h-[100vh] flex items-center justify-start bg-cover bg-[20%_0%] w-full md:bg-[10%_30%] bg-blue-400 bg-blend-luminosity`} style={{backgroundImage: `url(${homeImg1})`, }}>
         <div className={`p-9 h-full w-full md:w-[60%] flex flex-col gap-y-5 items-start justify-center`}>
            <span className='text-5xl sm:text-6xl lg:text-[80px] text-slate-100'><strong>ANYTHING</strong> CAN BE <strong className='text-indigo-500'>BUILT</strong>.</span>
            <span className='text-lg sm:text-2xl lg:text-3xl text-indigo-800 bg-slate-100 p-1 rounded-md'>Providing quality, reliable, excellent, safe and efficient construction service since 2002.</span>
            <Link to='/about-us' reloadDocument={true} className='self-end text-sm md:text-base bg-indigo-800 rounded-lg text-slate-200 p-[12px] hover:duration-1000 hover:bg-slate-400 hover:text-slate-900 hover:animate-in hover:slide-in-from-left-2'>{String.fromCharCode(8594)} MORE ABOUT US</Link>
         </div>
      </section>

   )
}

export default HomeLandingPage;