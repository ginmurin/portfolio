import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jan582c@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-4 border-b border-[#1c1e26]">
          <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
            08 · Inquiry & Placement
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
            Get in Touch for OJT Placement
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Invitation (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              I am seeking an <strong className="font-semibold text-zinc-100">onsite Software Engineering On-the-Job Training (OJT)</strong> opportunity in Cebu where I can contribute to production Spring Boot APIs, React/TypeScript web applications, or Android mobile codebases while developing under senior engineering mentorship.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${email}`}
                className="px-4 py-2.5 rounded bg-amber-600 hover:bg-amber-500 text-zinc-950 font-medium text-xs transition-colors"
              >
                Send Email Directly
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 text-xs transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-amber-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>

              <a
                href="https://github.com/ginmurin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors py-2"
              >
                <span>github.com/ginmurin</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Coordinates (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-[#14151a] border border-[#23252e] space-y-4 text-xs">
            <div className="text-[11px] uppercase tracking-wider text-zinc-300 font-medium pb-2 border-b border-[#23252e]">
              Direct Candidate Coordinates
            </div>

            <div className="space-y-3 text-zinc-400 font-light">
              <div>
                <span className="text-zinc-500 block text-[11px]">Direct Email</span>
                <a href={`mailto:${email}`} className="text-zinc-200 font-mono hover:text-amber-400 transition-colors">
                  {email}
                </a>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px]">Primary Location</span>
                <span className="text-zinc-200">Cebu City, Philippines</span>
                <span className="block text-[11px] text-zinc-500">Available for immediate onsite reporting</span>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px]">Institution</span>
                <span className="text-zinc-200">Cebu Institute of Technology – University</span>
                <span className="block text-[11px] text-zinc-500">College of Computer Studies (BS IT)</span>
              </div>

              <div className="pt-2 border-t border-[#23252e]">
                <span className="text-zinc-500 block text-[11px] mb-1">Target Roles</span>
                <span className="text-zinc-300">Software Engineer Intern · Backend / Full-Stack / Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
