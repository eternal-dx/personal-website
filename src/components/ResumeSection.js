// External Components
import { Document, Page, pdfjs } from "react-pdf";

// Resume File
import file from "../externals/Brennan-Cleland.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const ResumePDF = () => {
  return (
    <Document file={file}>
      <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
    </Document>
  )
}

const resumeKanji = "履歴書";

export default function ResumeSection() {
  return (
    <div id="resume" className="relative w-full h-screen flex flex-col items-center bg-[#050505] p-8 overflow-y-hidden">
      <h1 className="absolute w-full h-full flex items-center justify-center text-[#D3D3D3] text-[360px] text-opacity-10 font-semibold scale-y-125">{resumeKanji}</h1>
      <div className="w-full h-auto flex flex-col items-center">
        <h1 className="w-full h-auto text-5xl text-center text-white font-semibold scale-y-125">RESUME</h1>
        <hr className="w-1/3 border-t-2 border-white" />
      </div>
      <div className="w-auto h-auto flex items-center justify-center mt-2">
        <a
        href="https://drive.google.com/file/d/1dIQFa4r6RPna7YIer124cEP_ve8y5eSM/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        >
          <ResumePDF />
        </a>
      </div>
    </div>
  )
}