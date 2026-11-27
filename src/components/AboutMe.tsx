import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-[#1c1e26] flex items-baseline justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
              01 · Background & Engineering Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
              Solving Concrete Bottlenecks Over Assembling Templates
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Prose (8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            <p>
              I am a fourth-year <strong className="font-semibold text-zinc-100">Bachelor of Science in Information Technology (BS IT)</strong> senior at the <strong className="font-semibold text-zinc-100">Cebu Institute of Technology – University (CIT-U)</strong>. My approach to software development is grounded in understanding system internals rather than relying on surface-level abstractions.
            </p>

            <p>
              Across both team deliverables and independent research, I consistently focus on the engineering problems that make or break real-world software. When our 5-member capstone team developed <strong className="font-semibold text-zinc-100">VoxSight</strong>, I served as software engineer focused on core systems: engineering an 8-stage MusicXML cleaning and canonical SATB voice sorter in Python/Audiveris, synchronizing 60 FPS score rendering directly with live microphone pitch tracking, and preventing device-crashing Out-Of-Memory exceptions through progressive bitmap downsampling.
            </p>

            <p>
              In independent software work, I apply the same discipline. For <strong className="font-semibold text-zinc-100">WashMate</strong>, I avoided generic layered architectures in favor of <strong className="font-semibold text-zinc-100">Vertical Slice Architecture (VSA)</strong>, writing automated test suites that verified 81%+ branch coverage across core authentication and payment workflows. For <strong className="font-semibold text-zinc-100">Sorami</strong>, I engineered a raw HTML5 Canvas vector handwriting engine from scratch to evaluate complex Japanese stroke orders without external cloud dependencies.
            </p>

            <p>
              I am seeking an <strong className="font-semibold text-zinc-100">onsite Software Engineering On-the-Job Training (OJT)</strong> position in Cebu. I am prepared to contribute immediately to backend microservices, modern web applications, and mobile codebases, while learning continuously under experienced engineering mentors.
            </p>
          </div>

          {/* Editorial Marginalia (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-xs text-zinc-400">
            <div className="p-5 rounded-lg border border-[#23252e] bg-[#14151a] space-y-4">
              <div className="text-[11px] uppercase tracking-wider text-zinc-300 font-medium pb-2 border-b border-[#23252e]">
                Curricular Focus & Languages
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-zinc-500 block text-[11px]">Academic Coursework</span>
                  <span className="text-zinc-300 leading-relaxed block">
                    Software Engineering, Systems Analysis & Design, Database Architecture, Mobile App Development, Information Assurance.
                  </span>
                </div>

                <div className="pt-2 border-t border-[#1f2128]">
                  <span className="text-zinc-500 block text-[11px] mb-1">Spoken & Written Communication</span>
                  <ul className="space-y-1 text-zinc-300">
                    <li><strong className="text-zinc-200">English:</strong> Working Proficiency (Technical Documentation & Specifications)</li>
                    <li><strong className="text-zinc-200">Filipino:</strong> Native / Bilingual</li>
                    <li><strong className="text-zinc-200">Japanese:</strong> Basic Level (Hiragana, Katakana, Basic Kanji)</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#1f2128]">
                  <span className="text-zinc-500 block text-[11px] mb-1">Engineering Values</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Test-driven reliability, clear separation of concerns, truthful team attribution, and defensive resource handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
