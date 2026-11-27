import React, { useState } from 'react';

interface ExperienceItem {
  id: string;
  category: 'education' | 'project' | 'work';
  period: string;
  title: string;
  organization: string;
  roleBadge: string;
  description: string;
  highlights?: string[];
  tech?: string[];
}

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'project' | 'work'>('all');

  const items: ExperienceItem[] = [
    {
      id: 'citu-bsit',
      category: 'education',
      period: '2023 – PRESENT',
      title: 'Bachelor of Science in Information Technology (4th Year)',
      organization: 'Cebu Institute of Technology – University',
      roleBadge: 'ACADEMIC DEGREE',
      description:
        'Graduating senior in Cebu City, Philippines. Maintaining strong academic coursework focused on distributed systems, enterprise backend services, database administration, and mobile computing. Actively preparing for an onsite Software Engineering OJT.',
      highlights: [
        'Coursework: Software Engineering, Systems Analysis & Design, Information Management 2, Mobile Application Development, Information Security.',
        'Led engineering teams on capstone and generative AI academic deliverables.',
        'Available immediately for onsite full-time or hybrid OJT placement in Cebu City.'
      ]
    },
    {
      id: 'pitchperfect-finalist',
      category: 'project',
      period: 'NOV 2026',
      title: 'Top 10 Finalist ("Magic 10") — PitchPerfect 2026',
      organization: 'Wildcat Innovation Labs, CIT-U',
      roleBadge: 'COMPETITION FINALIST',
      description:
        'Pitched VoxSight (Group Code: 2627-sem1-it411-51) at the PitchPerfect 2026 Semi-Finals, advancing as one of the "Magic 10" Top 10 Finalists out of 28 participating tech innovation teams to present at the Grand Finals at the LRAC.',
      highlights: [
        'Presented VoxSight’s sheet music OMR digitization and real-time audio-visual synchronization to faculty and industry evaluators.',
        'Selected among the Magic 10 Finalists across CIT-U IT and CS senior innovation cohorts.',
        'Completed finalist executive pitch coaching with Wildcat Innovation Labs.'
      ],
      tech: ['VoxSight', 'PitchPerfect 2026', 'Wildcat Innovation Labs', 'Startup Pitching']
    },
    {
      id: 'voxsight-engineer',
      category: 'project',
      period: 'Jan 2026 – Present',
      title: 'Software Engineer (Core Systems & OMR) — VoxSight (Capstone)',
      organization: 'Cebu Institute of Technology – University',
      roleBadge: 'CAPSTONE SOFTWARE ENGINEER',
      description:
        'Served as software engineer and top contributor (95 of 192 commits) across a 5-member student capstone team. Engineered the core Sheet Music editing suite, Audiveris OMR cleaning pipeline, and 60 FPS audio-visual synchronization loop.',
      highlights: [
        'Engineered the practice review audio engine with localized WAV playback, accompaniment volume balancing (0–100%), calendar date filtering, and automated 10-take storage pruning.',
        'Built an 8-stage MusicXML cleaning pipeline in Python/Audiveris, sorting SATB voice parts and eliminating orphan measures.',
        'Solved polyphonic audio-visual synchronization by tying 60 FPS canvas auto-scroll directly to real-time TarsosDSP pitch tracking.',
        'Eliminated critical Android Out-Of-Memory (OOM) crashes by engineering progressive camera thumbnail downsampling and strict WebView canvas context recycling.',
        'Shipped 5 production APK build releases (v1.0.0 through v1.4.0).'
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Java 17', 'Spring Boot 3.x', 'Audiveris', 'TarsosDSP', 'CameraX', 'OSMD']
    },
    {
      id: 'washmate-solo',
      category: 'project',
      period: '2026',
      title: 'Independent Full-Stack Developer — WashMate',
      organization: 'Solo Systems Project',
      roleBadge: '100% SOLO FULL-STACK',
      description:
        'Engineered an end-to-end laundry management ecosystem featuring a Spring Boot 3 REST API, PostgreSQL database, React web portal, and Android Kotlin companion app. Refactored the codebase to Vertical Slice Architecture (VSA).',
      highlights: [
        'Implemented Google OAuth 2.0 Authorization Code Flow with custom JJWT token issuance and custom JwtDecoder filters.',
        'Integrated PayMongo payment gateway webhooks for asynchronous transaction reconciliation.',
        'Achieved 81%+ branch test coverage verified by JaCoCo test reports across core business controllers and auth rules.'
      ],
      tech: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'React 19', 'Android Kotlin', 'PayMongo', 'JaCoCo']
    },
    {
      id: 'sorami-solo',
      category: 'project',
      period: '2026',
      title: 'Independent Developer — Sorami (空見)',
      organization: 'Solo Frontend & Algorithm Project',
      roleBadge: '100% SOLO PROJECT',
      description:
        'Independently authored an offline-first Japanese calligraphy and handwriting recognition web app with React 19, TypeScript, and Tailwind CSS. Built custom geometric vector stroke evaluation algorithms from scratch.',
      highlights: [
        'Engineered custom vector stroke direction evaluators handling multi-stroke kanji, dakuten, handakuten, and small tsu without third-party cloud APIs.',
        'Created a pressure-sensitive HTML5 Canvas calligraphy engine simulating authentic brush dynamics.',
        'Built a 176-question JLPT mock examination engine with real-time feedback and state persistence.'
      ],
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas API', 'Web Audio API', 'Vite']
    },
    {
      id: 'scholaris-lead',
      category: 'project',
      period: '2025',
      title: 'Lead Developer — Scholaris / Learning Pathway',
      organization: 'Academic Engineering Project (6-Member Team)',
      roleBadge: 'ACADEMIC TEAM LEAD',
      description:
        'Served as technical lead across a 6-member academic team building an AI-powered personalized study planner. Responsible for backend architecture and Google Gemini API integration.',
      highlights: [
        'Implemented core/ai_service.py integrating Google Gemini API for automated quiz generation and adaptive study scheduling.',
        'Designed relational database schema for learning modules, study records, and progress analytics in Django 5.'
      ],
      tech: ['Python 3', 'Django 5', 'Google Gemini API', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      id: 'merchpoint-solo',
      category: 'project',
      period: '2025',
      title: 'Solo Full-Stack Developer — MerchPoint',
      organization: 'Academic Software Prototype (100% Solo)',
      roleBadge: '100% SOLO PROTOTYPE',
      description:
        'Engineered a merchandise reservation system with an automated loyalty points discount engine using Java, Spring Boot, MySQL, and React (Vite).',
      highlights: [
        'Authored complete 40KB Functional Specification Document (FSD.md) with comprehensive data models and reservation lifecycles.',
        'Implemented transactional stock reservation locking and loyalty points balance calculations.'
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Tailwind CSS']
    },
    {
      id: 'harborhop-pm',
      category: 'work',
      period: '2025',
      title: 'Systems Analyst & Project Manager — HarborHop',
      organization: 'Agile Team Academic Project',
      roleBadge: 'PM & SYSTEMS ANALYSIS',
      description:
        'Led requirements gathering, functional specifications, and sprint tracking for an online maritime ferry booking platform. Formulated comprehensive Functional Requirements Specifications (FRS) and backlog user stories while collaborating with team lead daas-me.',
      highlights: [
        'Authored detailed FRS documentation establishing multi-port booking workflows and fare calculation rules.',
        'Organized Agile sprint backlogs and user journey diagrams to maintain delivery velocity.'
      ],
      tech: ['Systems Analysis', 'Agile / Scrum', 'FRS Documentation', 'User Flow Design']
    },
    {
      id: 'citepass-collab',
      category: 'project',
      period: '2026',
      title: 'Collaborative Backend Developer — CITePASS',
      organization: 'Collaborative with Peer (Gabs64)',
      roleBadge: 'COLLABORATIVE BACKEND',
      description:
        'Partnered with peer developer Gabs64 to engineer a campus visitor pass and gate tracking system with Spring Boot and relational database storage.',
      highlights: [
        'Initialized Spring Boot backend service and established data models for student pass approvals.',
        'Built authenticated CRUD endpoints for real-time gate entry and exit logging.'
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'REST API']
    },
    {
      id: 'folder-locker-solo',
      category: 'project',
      period: '2024 – 2025',
      title: 'Solo Developer — Folder Locker',
      organization: 'Independent Security Utility (Local / Offline)',
      roleBadge: '100% SOLO UTILITY',
      description:
        'Developed a local administrative security utility for Windows (offline, not published on GitHub) that locks down sensitive directories using native Win32 Access Control Lists (icacls) and the Windows Credential Manager.',
      highlights: [
        'Applied low-level icacls /deny rules and hidden system attribute flags to prevent unauthorized file access.',
        'Integrated Python keyring library to store directory protection hashes in the Windows Credential Manager.'
      ],
      tech: ['Python 3', 'Win32 ACLs', 'icacls', 'Windows Credential Manager (keyring)']
    }
  ];

  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-[#1c1e26] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
              06 · Chronology & Record
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
              Curriculum Vitae & Experience
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
              Chronological ledger of academic standing, software engineering responsibilities, solo software milestones, and competition honors.
            </p>
          </div>

          {/* Minimalist Filter Bar */}
          <div className="flex items-center gap-1 border-b border-zinc-800 text-xs">
            {[
              { key: 'all', label: `All (${items.length})` },
              { key: 'education', label: 'Education' },
              { key: 'project', label: 'Systems & Capstone' },
              { key: 'work', label: 'Analysis & PM' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`px-3 py-2 text-xs transition-colors border-b-2 -mb-[1px] ${
                  filter === tab.key
                    ? 'border-amber-400 text-zinc-100 font-medium'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="divide-y divide-[#1c1e26] border-y border-[#1c1e26]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-[#14151a]/40 px-2 sm:px-4 transition-colors"
            >
              {/* Left Column: Date & Meta (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 font-medium">
                    {item.period}
                  </span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-[11px] font-mono text-amber-400/90 uppercase tracking-wider">
                    {item.roleBadge}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-light">
                  {item.organization}
                </div>
              </div>

              {/* Right Column: Title & Detailed Narrative (8 cols) */}
              <div className="lg:col-span-8 space-y-3">
                <h3 className="font-editorial text-2xl text-zinc-100 font-normal">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-zinc-400 font-light pt-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-amber-500/80 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tech && item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
