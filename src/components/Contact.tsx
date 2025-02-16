import { useRef, useState } from "react";
import useInViewport from "../useInViewport";

const Contact = () : React.ReactElement => {
   const [key, setAnimationKey] = useState(0)
   const resetAnimation = () => {
      setAnimationKey(prevKey => prevKey + 1);
   }

   const ref= useRef<HTMLDivElement | null>(null);
   const isInViewport = useInViewport(ref);

   return(
      <div>
         <div key={key} className="h-[20vh] bg-green-500 animate-fade-in-top">
            <button type='button' onClick={resetAnimation}>Reset</button>
         </div>
         <div ref={ref} className="h-[200px] bg-pink-700">
            {isInViewport ? 'I am in viewport' : 'I am not in viewport'}
         </div>
      </div>
   )
}

export default Contact;