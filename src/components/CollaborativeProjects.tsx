import React from 'react';
import { Project } from '../types';
import { Github, ArrowUpRight } from 'lucide-react';

interface CollaborativeProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const CollaborativeProjects: React.FC<CollaborativeProjectsProps> = ({
  projects,
  onSelectProject
}) => {
  const collaborativeProjects = projects.filter((p) => p.category === 'collaborative');

  return (
    <section id="collaborative" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-[#1c1e26]">
          <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
            05 · Collaborative Engineering & Systems Analysis
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
            Team Coordination & Agile Specifications
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
            Peer collaborations emphasizing backend REST services, shared Git workflows, and comprehensive Functional Requirements Specifications (FRS).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collaborativeProjects.map((p) => (
            <div
              key={p.id}
              className="p-6 sm:p-8 rounded-lg bg-[#14151a] border border-[#23252e] hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[#23252e]">
                  <span className="text-amber-400/90 font-medium">
                    {p.role}
                  </span>
                  <span className="text-zinc-500 font-mono text-[11px]">{p.timeframe}</span>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl text-zinc-100 font-normal mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {p.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {p.summary}
                </p>

                <div className="p-3.5 rounded bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 space-y-1">
                  <span className="text-zinc-500 text-[11px] block uppercase tracking-wider font-mono">
                    Authorship & Team Context:
                  </span>
                  <p className="leading-relaxed font-light">{p.teamAttribution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#23252e] flex items-center justify-between">
                {p.repoUrl ? (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                ) : (
                  <span className="text-xs text-zinc-500">Agile FRS Documentation</span>
                )}

                <button
                  onClick={() => onSelectProject(p)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors ml-auto"
                >
                  Project Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
