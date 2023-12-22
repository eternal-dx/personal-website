const projectKanji = "企画";

export default function ProjectSection() {
  return (
    <div id="projects" className="relative w-full h-screen flex flex-col items-center bg-black p-8 overflow-y-hidden">
      {/* Background kanji */}
      <h1 className="absolute w-full h-full flex items-center justify-center text-[#D3D3D3] text-[240px] text-opacity-5 font-semibold scale-y-125">{projectKanji}</h1>
      <div className="w-full h-auto flex flex-col items-center">
        <h1 className="w-full h-auto text-5xl text-center text-white font-semibold scale-y-110">PROJECTS</h1>
        <hr className="w-1/3 border-t-2 border-white" />
      </div>
    </div>
  )
}