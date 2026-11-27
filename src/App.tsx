import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { WhatIWorkWith } from './components/WhatIWorkWith';
import { FlagshipSection } from './components/FlagshipSection';
import { SupportingProjects } from './components/SupportingProjects';
import { CollaborativeProjects } from './components/CollaborativeProjects';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PROJECTS } from './data/projectsData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0f12] text-zinc-100 antialiased selection:bg-amber-600/25 selection:text-amber-200">
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <AboutMe />
        <WhatIWorkWith />
        <FlagshipSection
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <SupportingProjects
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <CollaborativeProjects
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
