import { useState } from "react";


const Contact = () : React.ReactElement => {
   const [key, setKey] = useState(0)
   const resetAnimation = () => {
      setKey(0)
      setKey(prevKey => prevKey + 1);
   }

   return(
      <div key={key} className="h-[100vh] bg-green-500 animate-fade-in-left">
         <button type='button' onClick={resetAnimation}>Reset</button>
      </div>
   )
}

export default Contact;