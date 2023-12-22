import AboutSection from "./AboutSection";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProjectSection from "./ProjectSection";
import ResumeSection from "./ResumeSection";
import WelcomeSplash from "./WelcomeSplash";

export default function MainContent() {
	return (
		<div className="w-full h-auto flex flex-col items-center bg-black z-[-1]">
			<WelcomeSplash />
			<AboutSection />
			<ProjectSection />
			<ResumeSection />
			<Footer />
		</div>
	)
}