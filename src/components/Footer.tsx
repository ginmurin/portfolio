import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0e0f12] text-zinc-500 text-xs border-t border-[#1c1e26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 pb-6 border-b border-[#1c1e26]">
          <div>
            <span className="font-editorial text-lg text-zinc-200 font-normal">
              John Emmanuel S. Sevilla
            </span>
            <span className="block text-zinc-500 text-[11px] mt-0.5 font-light">
              Senior BS Information Technology Student · Cebu Institute of Technology – University
            </span>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            <a
              href="https://github.com/ginmurin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-200 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>

            <a
              href="mailto:jan582c@gmail.com"
              className="hover:text-zinc-200 transition-colors"
            >
              Email
            </a>

            <a
              href="#about"
              className="hover:text-zinc-200 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 text-[11px] text-zinc-600 font-light">
          <p>
            Technical portfolio designed with an editorial publication standard. Built with React 19, TypeScript, and Tailwind CSS.
          </p>
          <p>
            © {new Date().getFullYear()} John Emmanuel Sevilla · Cebu, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
};
