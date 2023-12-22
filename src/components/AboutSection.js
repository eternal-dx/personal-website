// External Components
import PageLink from "./PageLink";

import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const githubLink = "https://github.com/eternal-dx";
const linkedinLink = "https://www.linkedin.com/in/brennan-cleland";
const emailLink = "mailto:brennangc1@gmail.com";

const aboutTextTop = "Hey, my name is Brennan Cleland! I'm a third year, Honors Computer Science student at the University of Central Florida. I'm currently on the UCF Varisty Programming Team and have competed for two years where I've worked with my teammates to solve challenging problems using a variety of different algorithms. I specialize in Java and C but have experience in C#, C++, Javascript, Typescript, and SQL.";
const aboutTextMiddle = "I'm always willing to learn a new skill and I enjoy picking up and learning new languages to challenge myself. I've mainly worked on web development, although I do have some backend experience; however, I'm working towards becoming an expert in both. Feel free to contact me anytime below!";

const aboutKanji = "自己紹介";

export default function AboutSection() {
  return (
    <div id="about" className="relative w-full h-screen flex flex-col items-center bg-[#050505] p-8 overflow-y-hidden">
      {/* Background kanji */}
      <h1 className="absolute w-full h-full flex items-center justify-center text-[#D3D3D3] text-[240px] text-opacity-5 font-semibold scale-y-125">{aboutKanji}</h1>
      {/* <hr className="absolute w-full border-t-2 border-[#f6ca6c] line-glow" /> */}
      {/* About header */}
      <div className="w-full h-auto flex flex-col items-center">
        <h1 className="w-full h-auto text-5xl text-center text-white font-semibold scale-y-110">ABOUT</h1>
        <hr className="w-1/3 border-t-2 border-white" />
      </div>
      <div className="w-2/3 h-full flex flex-col items-center justify-center mt-8 scale-y-110 text-4xl text-white">
        <h1 className="w-full h-auto">{aboutTextTop}</h1>
        <br />
        <h1 className="w-full h-auto">{aboutTextMiddle}</h1>
      </div>
      {/* Contact section */}
      <h1 className="w-full h-auto text-3xl text-white text-center font-semibold scale-y-110">CONTACT</h1>
      <div className="w-1/3 h-auto flex items-center justify-evenly mt-2">
        <PageLink text={"GITHUB"} link={githubLink} icon={FaGithub} />
        <hr className="w-0.5 h-20 bg-white" />
        <PageLink text={"LINKEDIN"} link={linkedinLink} icon={FaLinkedin} />
        <hr className="w-0.5 h-20 bg-white" />
        <PageLink text={"EMAIL"} link={emailLink} icon={MdEmail} />
      </div>
    </div>
  )
}