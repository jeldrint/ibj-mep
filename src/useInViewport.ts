import { MutableRefObject, useEffect, useState } from "react";


const useInViewport = (ref: MutableRefObject<HTMLDivElement | null>) => {
   const [isInViewport, setIsInViewport] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => { setIsInViewport(entry.isIntersecting) }, { threshold: 0.1 });

      if(ref.current){
         observer.observe(ref.current);
      }

      return () => {
         if(ref.current){
            observer.unobserve(ref.current);
         }
      }
   },[ref])

   return isInViewport;
}

export default useInViewport;