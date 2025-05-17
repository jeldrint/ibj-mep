import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import pdfFile from '../Company Profile Rev. 03.pdf';
import arrow from '../images/icon2-arrow.png'
import xMark from '../images/icons8-x-30.png'
import { DisplayPDFProps } from "../types";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
   'pdfjs-dist/build/pdf.worker.min.mjs',import.meta.url,
).toString()

const PDFReader = ({displayPdf, setDisplayPdf}: DisplayPDFProps) : React.ReactElement => {

   const [numPages, setNumPages] = useState<number>(0);
   const [pageNumber, setPageNumber] = useState<number>(1);

   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
   }

   const pageTurnLeft = (): void => {
      if(pageNumber <= 1){
         setPageNumber(numPages)
      }else{
         setPageNumber(prev=>prev-1);
      }
   }
   
   const pageTurnRight = (): void => {
      if(pageNumber >=numPages){
         setPageNumber(1)
      }else{
         setPageNumber(prev=>prev+1);
      }

   }

   return(
      <div className={`${!displayPdf && 'opacity-0 -z-20'} ${displayPdf && 'z-20 backdrop-blur delay-100 transition-all'} fixed max-h-screen w-screen flex flex-col items-center justify-center shadow-lg`}>
         <div className="py-10 flex flex-col items-center">
            <div className="flex items-center relative">
               <div className="z-10 absolute top-10 right-0 cursor-pointer bg-slate-200 p-1 rounded-lg opacity-40 transition-opacity hover:opacity-80" onClick={()=>setDisplayPdf(false)}>
                  <img src={xMark} alt='x-mark' />
               </div>
               <div className="z-10 absolute left-0 cursor-pointer bg-slate-200 p-1 rounded-lg opacity-40 transition-opacity hover:opacity-80" onClick={pageTurnLeft}>
                  <img src={arrow} alt='arrow left' className="rotate-90 h-10" />
               </div>
               <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
               </Document>
               <div className="z-10 absolute right-0 cursor-pointer bg-slate-200 p-1 rounded-lg opacity-40 transition-opacity hover:opacity-80" onClick={pageTurnRight}>
                  <img src={arrow} alt='arrow right' className="-rotate-90 h-10" />
               </div>
            </div>
            <p>
               
               Page {pageNumber} of {numPages}
            </p>
         </div>
      </div>
   )
}

export default PDFReader;