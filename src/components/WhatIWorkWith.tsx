import React from 'react';

interface SkillRow {
  category: string;
  scope: string;
  technologies: string[];
}

export const WhatIWorkWith: React.FC = () => {
  const register: SkillRow[] = [
    {
      category: 'Backend & Data Systems',
      scope: 'RESTful API architecture, relational schema modeling, transaction management, and secure token issuance.',
      technologies: [
        'Java 17',
        'Spring Boot 3',
        'Spring Security 6',
        'Spring Data JPA',
        'PostgreSQL',
        'MySQL',
        'Redis',
        'Python 3',
        'Django 5',
        'JJWT',
        'Maven',
        'Supabase'
      ]
    },
    {
      category: 'Frontend & Algorithmic Canvas',
      scope: 'High-performance vector rendering, geometric calculation, state management, and modern component design.',
      technologies: [
        'React 19',
        'TypeScript',
        'HTML5 Canvas API',
        'Web Audio API',
        'Tailwind CSS',
        'Vite',
        'Vector Stroke Mathematics',
        'Responsive Layouts'
      ]
    },
    {
      category: 'Mobile & Signal Computing',
      scope: 'Native Android architecture, hardware camera capture pipelines, and real-time audio pitch extraction.',
      technologies: [
        'Kotlin',
        'Jetpack Compose',
        'Android CameraX',
        'Android SDK',
        'Kotlin Coroutines',
        'TarsosDSP (YIN Pitch Tracking)',
        'OpenSheetMusicDisplay (OSMD)'
      ]
    },
    {
      category: 'Architecture & System Security',
      scope: 'Decoupled feature architectures, access control lists, operating system security primitives, and authentication flows.',
      technologies: [
        'Vertical Slice Architecture (VSA)',
        'Polymorphic Relational Schemas',
        'Google OAuth 2.0 (Auth Code Flow)',
        'Win32 ACLs (icacls)',
        'Windows Credential Manager (keyring)',
        'Bitmap Downsampling (OOM Prevention)'
      ]
    },
    {
      category: 'Quality Assurance & Testing',
      scope: 'Automated unit and integration test coverage, test-driven development, and security filter verification.',
      technologies: [
        'JaCoCo (81%+ Branch Coverage)',
        'JUnit 5',
        'Integration Testing',
        'Custom JWT Security Filters',
        'Role-Based Access Control (RBAC)',
        'Native Windows Deny ACL Auditing'
      ]
    },
    {
      category: 'Tooling & Deployment',
      scope: 'Version control workflows, containerization, API inspection, and cloud hosting infrastructure.',
      technologies: [
        'Git & GitHub',
        'Docker',
        'Postman',
        'Android Studio',
        'Visual Studio Code',
        'Railway',
        'Vercel',
        'PowerShell',
        'Agile Backlogs (FRS / SRS)'
      ]
    },
    {
      category: 'Languages & Communication',
      scope: 'Cross-functional agile collaboration, technical documentation, and international user interface localization.',
      technologies: [
        'English (Working Proficiency)',
        'Filipino (Native / Bilingual)',
        'Japanese (Basic Level — Hiragana, Katakana, Basic Kanji)'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-[#1c1e26]">
          <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
            02 · Technical Capabilities & Stack
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
            Technical Register & Tooling
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
            Verified technologies, runtimes, and engineering disciplines applied across production builds, capstone deliverables, and solo systems.
          </p>
        </div>

        {/* Editorial Index Table / Directory */}
        <div className="divide-y divide-[#1c1e26] border-y border-[#1c1e26]">
          {register.map((row) => (
            <div
              key={row.category}
              className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group hover:bg-[#14151a]/50 px-2 sm:px-4 transition-colors"
            >
              {/* Category & Description (5 cols) */}
              <div className="lg:col-span-5 space-y-1.5">
                <h3 className="text-base font-semibold text-zinc-100 font-sans tracking-tight">
                  {row.category}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {row.scope}
                </p>
              </div>

              {/* Technologies List (7 cols) */}
              <div className="lg:col-span-7 flex flex-wrap gap-2 pt-1">
                {row.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded bg-[#14151a] text-zinc-300 border border-[#23252e] font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
