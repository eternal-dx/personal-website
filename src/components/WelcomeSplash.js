import AnchorLink from "./AnchorLink";
import PageLink from "./PageLink";

const tableOfContents = [
 {
  link: "#about",
  text: "ABOUT",
 },
 {
  link: "#projects",
  text: "PROJECTS",
 },
 {
  link: "#resume",
  text: "RESUME",
 }
]

const kanjiFirst = "不霊男", kanjiLast = "琥零欄堂";
const softwareDeveloper = "ソフトウェア開発者";

export default function WelcomeSplash() {
  const contentLinks = tableOfContents.map((link, idx) =>
    <AnchorLink
      key={idx}
      id={idx}
      link={link.link}
      text={link.text}
    />
  );

  return (
    <div id="welcome" className="w-full h-screen flex p-16 overflow-y-hidden">
      <div className="w-2/3 h-full flex flex-col justify-center scale-y-125 text-white">
        <h1 className="text-8xl font-semibold">BRENNAN CLELAND</h1>
        <h2 className="text-5xl">SOFTWARE DEVELOPER</h2>
        <div className="w-full h-auto flex flex-col justify-between text-4xl px-8 py-6">
          { contentLinks }
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col items-center justify-center scale-y-125">
        {/* first + last name kanji */}
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-auto h-full flex flex-col items-center justify-center">
            {[...kanjiLast].map((letter, idx) => (
              <h1 key={idx} className="text-8xl text-white font-semibold mt-2">{letter}</h1>
            ))}
          </div>
          <div className="w-auto h-full flex flex-col items-center justify-center mb-24">
            {[...kanjiFirst].map((letter, idx) => (
              <h1 key={idx} className="text-9xl text-white font-semibold mt-2">{letter}</h1>
            ))}
          </div>
        </div>
        {/* software developer kanji */}
        <h1 className="text-6xl text-white font-semibold">{softwareDeveloper}</h1>
      </div>
    </div>
  )
}