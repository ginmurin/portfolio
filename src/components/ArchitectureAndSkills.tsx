import React from 'react';
import { SKILL_CATEGORIES } from '../data/skillsData';

export const ArchitectureAndSkills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-slate-800/60 bg-[#090d16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-6 border-b border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
            Practical Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            Technical Background & Tools
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Technologies and architectural patterns exercised across actual course deliverables, capstone engineering, and solo projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-base font-bold text-slate-100 pb-2 border-b border-slate-800">
                {cat.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {cat.description}
              </p>

              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
