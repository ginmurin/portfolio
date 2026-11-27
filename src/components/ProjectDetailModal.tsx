import React from 'react';
import { Project } from '../types';
import { X, Github, Youtube, ArrowUpRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl rounded-lg bg-[#14151a] border border-[#23252e] shadow-2xl p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#23252e] gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs">
              <span className="text-amber-400 font-mono">
                {project.badge}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-mono">
                {project.timeframe}
              </span>
            </div>
            <h2 id="modal-title" className="font-editorial text-2xl sm:text-3xl font-normal text-zinc-100 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-light text-zinc-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto py-5 space-y-6 text-sm text-zinc-300 pr-1">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-1.5">System Overview</h4>
            <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm font-light">{project.summary}</p>
          </div>

          {/* Contributions */}
          <div className="p-4 rounded bg-[#0e0f12] border border-[#23252e] space-y-2">
            <div className="text-xs text-amber-400 font-medium uppercase tracking-wider">
              Verifiable Contributions ({project.role})
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
              {project.verifiableContributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-amber-500/80 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {project.teamAttribution && (
              <div className="pt-2 border-t border-[#1c1e26] text-[11px] text-zinc-400 font-light">
                <span className="font-medium text-zinc-300">Team Attribution: </span>
                {project.teamAttribution}
              </div>
            )}
          </div>

          {/* Implemented Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-2">Key Functionality</h4>
            <ul className="space-y-1 text-xs text-zinc-300 font-light">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-2">Architecture Highlights</h4>
              <ul className="space-y-1 text-xs text-zinc-300 font-light">
                {project.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500/70 mt-0.5">•</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-2">Technology Stack</h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#23252e] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            )}

            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white"
              >
                <Youtube className="w-3.5 h-3.5 text-red-400" />
                <span>YouTube Walkthrough</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
