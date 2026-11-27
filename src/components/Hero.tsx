import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow / Masthead Tag */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#1c1e26] text-xs text-zinc-500 tracking-wider">
          <span className="uppercase">Engineering Portfolio & Systems Record</span>
          <span className="hidden sm:inline">Volume 2026 · Cebu City, PH</span>
        </div>

        {/* Main Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Main Statement (7 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-100 leading-[1.12]">
              Engineering reliable backend systems, algorithmic canvas frontends, and native mobile clients.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-light">
              I am <strong className="font-semibold text-zinc-100">John Emmanuel S. Sevilla</strong>, a fourth-year BS Information Technology senior at the Cebu Institute of Technology – University. I focus on solving concrete engineering challenges—from 8-stage optical music recognition pipelines to Vertical Slice backend architectures and zero-dependency vector handwriting evaluation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 border-b border-amber-400/40 hover:border-amber-300 pb-0.5 transition-colors"
              >
                <span>Examine Featured Systems</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <span className="text-zinc-600">·</span>

              <button
                onClick={onOpenContact}
                className="text-sm text-zinc-300 hover:text-zinc-100 border-b border-zinc-700 hover:border-zinc-400 pb-0.5 transition-colors"
              >
                Inquire for Onsite OJT
              </button>

              <span className="text-zinc-600">·</span>

              <a
                href="https://github.com/ginmurin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <span>github.com/ginmurin</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Editorial Marginalia / Colophon Card (4 cols) */}
          <div className="lg:col-span-4 p-5 rounded-lg border border-[#23252e] bg-[#14151a] space-y-4 text-xs">
            <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-medium pb-2 border-b border-[#23252e]">
              Applicant Dossier · OJT 2026
            </div>

            <div className="space-y-3 text-zinc-300">
              <div>
                <span className="text-zinc-500 block text-[11px]">Academic Standing</span>
                <span className="text-zinc-200 font-medium">BS in Information Technology (4th Year)</span>
                <span className="text-zinc-400 block text-[11px]">Cebu Institute of Technology – University</span>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px]">Availability & Location</span>
                <span className="text-zinc-200 font-medium">Cebu City, Philippines</span>
                <span className="text-zinc-400 block text-[11px]">Immediate placement for onsite schedule</span>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px]">Primary Development Stacks</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">Java 17 / Spring Boot 3</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">React 19 / TypeScript</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">Android Kotlin</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">PostgreSQL</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#23252e]">
                <span className="text-zinc-500 block text-[11px]">Recent Recognition</span>
                <span className="text-amber-300/90 font-medium block">Top 10 Finalist — PitchPerfect 2026</span>
                <span className="text-zinc-400 text-[11px]">Wildcat Innovation Labs (VoxSight Capstone)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
