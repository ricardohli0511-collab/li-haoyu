import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FooterSection } from './components/FooterSection';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-scanlines">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CompetitionsSection />
        <ExperienceSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
