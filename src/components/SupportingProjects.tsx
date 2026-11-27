import React from 'react';
import { Project } from '../types';
import { Github, ArrowUpRight } from 'lucide-react';

interface SupportingProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const SupportingProjects: React.FC<SupportingProjectsProps> = ({ projects, onSelectProject }) => {
  const supportingProjects = projects.filter((p) => p.category === 'supporting');

  return (
    <section id="supporting" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-[#1c1e26]">
          <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
            04 · Supporting Systems
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
            Targeted Architectural Solutions
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
            Focused systems exploring low-level operating system security, Generative AI API orchestration, and enterprise reservation workflow modeling.
          </p>
        </div>

        {/* 3-Column Editorial Register */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportingProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg bg-[#14151a] border border-[#23252e] hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[#23252e]">
                  <span className="text-amber-400/90 font-medium">
                    {project.role}
                  </span>
                  <span className="text-zinc-500 font-mono text-[11px]">
                    {project.timeframe}
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl text-zinc-100 font-normal mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-2 text-xs text-zinc-400 space-y-1">
                  <span className="text-zinc-500 text-[11px] block uppercase tracking-wider">Verifiable Core:</span>
                  <p className="text-zinc-300 leading-relaxed font-light">
                    {project.verifiableContributions[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#23252e] space-y-4">
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-500">Local Operational Utility</span>
                  )}

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors ml-auto"
                  >
                    Specifications →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
