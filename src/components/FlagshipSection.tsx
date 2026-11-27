import React from 'react';
import { Project } from '../types';
import {
  Github,
  ArrowUpRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

interface FlagshipSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FlagshipSection: React.FC<FlagshipSectionProps> = ({ projects, onSelectProject }) => {
  const voxsight = projects.find((p) => p.id === 'voxsight');
  const sorami = projects.find((p) => p.id === 'sorami');
  const washmate = projects.find((p) => p.id === 'washmate');

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-4 border-b border-[#1c1e26] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
              03 · Flagship Systems
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
              Featured Engineering Projects
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
              Detailed technical expositions of three primary software systems demonstrating native mobile engineering, vector canvas algorithms, and enterprise backend architectures.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {/* ========================================================================= */}
          {/* CASE STUDY 1: VOXSIGHT                                                   */}
          {/* ========================================================================= */}
          {voxsight && (
            <article className="border-t-2 border-amber-600/60 pt-8 space-y-8">
              {/* Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                <div className="lg:col-span-8 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                      Case Study 01 · Mobile & OMR Computing
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-400">2024 · 5-Member Team Capstone</span>
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal tracking-tight">
                    VoxSight — Choral Sight-Reading & Optical Music Recognition
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                    A native Android application transforming physical choral sheet music into interactive, practice-ready digital scores with real-time vocal feedback and polyphonic audio-visual synchronization.
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right space-y-2">
                  <div className="inline-block p-3 rounded border border-amber-500/30 bg-amber-500/5 text-left text-xs space-y-1">
                    <span className="text-amber-300 font-medium block">Software Engineer (Core Systems)</span>
                    <span className="text-zinc-400 block text-[11px]">95 of 192 commits · 5 APK Releases</span>
                    <span className="text-zinc-500 block text-[10px]">Pitched in PitchPerfect 2026 Finals</span>
                  </div>
                </div>
              </div>

              {/* Visual Showcase: Genuine App Asset + Video CTA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#14151a] border border-[#23252e] rounded-lg overflow-hidden p-6 sm:p-8">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="font-editorial text-xl text-zinc-200 font-normal">
                    The Sheet Music Touch Editor & Pitch Synchronizer
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    Built upon OpenSheetMusicDisplay (OSMD) inside a hardware-accelerated Android WebView with a bidirectional Kotlin–JavaScript bridge. Amateur choir singers can tap notes to modify pitch, drag accidentals vertically, selectively mute or dim SATB voice parts (Soprano, Alto, Tenor, Bass), and watch a 60 FPS visual aura guide their vocal line in real time.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://voxsight.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-amber-600 hover:bg-amber-500 text-zinc-950 font-medium text-xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Web Showcase</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-950/70" />
                    </a>

                    <a
                      href="https://www.youtube.com/watch?v=31P9AGV1Fak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs border border-zinc-700 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span>Watch Walkthrough</span>
                    </a>

                    <a
                      href="https://github.com/lVIN15/VoxSight/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs border border-zinc-700 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-zinc-400" />
                      <span>APK Releases</span>
                    </a>

                    <a
                      href="https://github.com/lVIN15/VoxSight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative border border-[#23252e] rounded shadow-lg overflow-hidden max-w-sm bg-black">
                    <img
                      src="/assets/voxsight-header.jpg"
                      alt="VoxSight Mobile Score Interface"
                      className="w-full object-cover opacity-90"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="p-3 bg-zinc-950/90 border-t border-zinc-800 text-[11px] text-zinc-400 text-center font-mono">
                      Production Mobile View (Jetpack Compose + OSMD)
                    </div>
                  </div>
                </div>
              </div>

              {/* 8-Stage Architecture Schematic */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium block">
                  8-Stage Optical Music Recognition & Playback Pipeline
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-xs font-mono">
                  {[
                    { step: '01', name: 'CameraX', desc: 'Score capture' },
                    { step: '02', name: 'Downsample', desc: 'inSampleSize OOM guard' },
                    { step: '03', name: 'Audiveris 5.11', desc: 'Docker/Railway OMR' },
                    { step: '04', name: 'Python Cleaner', desc: 'music21 sanitization' },
                    { step: '05', name: 'SATB Sorter', desc: 'Canonical voice split' },
                    { step: '06', name: 'OSMD Engine', desc: 'WebView 2-way bridge' },
                    { step: '07', name: '60 FPS Cursor', desc: 'Stave auto-scroll' },
                    { step: '08', name: 'TarsosDSP', desc: 'YIN pitch tracker' },
                  ].map((s) => (
                    <div key={s.step} className="p-2.5 rounded bg-[#14151a] border border-[#23252e] space-y-1">
                      <div className="text-amber-500/80 text-[10px]">{s.step}</div>
                      <div className="text-zinc-200 font-semibold text-[11px] leading-tight">{s.name}</div>
                      <div className="text-zinc-500 text-[10px] leading-tight">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Technical Contributions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-zinc-300 font-light pt-2">
                <div className="space-y-3 p-5 rounded border border-[#23252e] bg-[#14151a]/40">
                  <h5 className="font-editorial text-lg text-zinc-100 font-normal">
                    Verifiable Individual Contributions
                  </h5>
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span><strong>Soundslice-Inspired Touch Deck:</strong> Built vertical pitch drag, accidental manipulation, and undo/redo stacks inside the mobile score editor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span><strong>OMR Sanitization Engine:</strong> Authored Python scripts using <code className="text-zinc-200 font-mono text-xs">music21</code> and <code className="text-zinc-200 font-mono text-xs">partitura</code> to clean orphan measures and normalize clefs from raw Audiveris output.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span><strong>OOM Memory Decimation:</strong> Eliminated fatal Android Out-Of-Memory crashes on 3GB RAM devices by enforcing progressive bitmap downsampling prior to network transmission.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 p-5 rounded border border-[#23252e] bg-[#14151a]/40">
                  <h5 className="font-editorial text-lg text-zinc-100 font-normal">
                    Authorship & Team Context
                  </h5>
                  <p className="text-zinc-400 leading-relaxed">
                    Developed in a 5-member student capstone team. Team members contributed to initial navigation scaffolds, base layout setup, and Supabase auth configuration. As software engineer, John Sevilla engineered all sheet music editing logic, Audiveris OMR cleaning, audio-visual synchronization, and memory stabilization.
                  </p>
                  <div className="pt-2">
                    <span className="text-zinc-500 text-xs block mb-1.5 uppercase tracking-wider">Tech Stack:</span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {voxsight.techStack.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* ========================================================================= */}
          {/* CASE STUDY 2: SORAMI (空見)                                              */}
          {/* ========================================================================= */}
          {sorami && (
            <article className="border-t-2 border-zinc-700 pt-8 space-y-8">
              {/* Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                <div className="lg:col-span-8 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Case Study 02 · Algorithmic Frontend Engineering
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-400">2024 · 100% Solo Project</span>
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal tracking-tight">
                    Sorami (空見) — Japanese Calligraphy & Vector Stroke Engine
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                    An offline-first Japanese learning platform featuring a raw HTML5 Canvas calligraphy engine with brush pressure dynamics and geometric vector stroke order recognition.
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right space-y-2">
                  <div className="inline-block p-3 rounded border border-zinc-700/80 bg-zinc-900/60 text-left text-xs space-y-1">
                    <span className="text-zinc-200 font-medium block">100% Solo Engineering</span>
                    <span className="text-zinc-400 block text-[11px]">All 62 commits by John Sevilla</span>
                    <span className="text-zinc-500 block text-[10px]">Zero Third-Party Cloud Vision APIs</span>
                  </div>
                </div>
              </div>

              {/* Bespoke Calligraphy & Vector Demonstrator Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#14151a] border border-[#23252e] rounded-lg p-6 sm:p-8">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-editorial text-amber-400 border border-amber-500/30 px-3 py-1 rounded bg-amber-500/5">
                      空見
                    </span>
                    <div>
                      <h4 className="font-editorial text-xl text-zinc-200 font-normal">
                        Raw Mathematical Handwriting Recognizer
                      </h4>
                      <span className="text-xs text-zinc-500 font-mono">Hiragana · Katakana · Dakuten · Kanji</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    Instead of delegating stroke recognition to black-box cloud APIs, Sorami captures raw continuous coordinate vectors (X, Y, timestamp, pressure) directly from mouse and touch events. It computes vector angle differentials, bounding box aspect ratios, and inflection point heuristics to grade user stroke orders in real time.
                  </p>

                  <div className="p-3.5 rounded bg-zinc-950 border border-zinc-800 text-xs space-y-2">
                    <div className="text-zinc-300 font-medium">176-Question Comprehensive Mock Exam Engine</div>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Features timed drawing challenges with instant algorithmic feedback, hidden mnemonics in Hard Quiz Mode (90% accuracy threshold), and analog clock/calendar study studios.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href="https://sorami-three.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-amber-600 hover:bg-amber-500 text-zinc-950 font-medium text-xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch Live Web App</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-950/70" />
                    </a>

                    {sorami.repoUrl && (
                      <a
                        href={sorami.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs border border-zinc-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Inspect Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(sorami)}
                      className="text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 cursor-pointer"
                    >
                      View Complete Specifications →
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 flex justify-center w-full">
                  <div className="border border-[#23252e] rounded bg-zinc-950 p-6 w-full max-w-md space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#23252e] text-[11px] font-mono text-zinc-400">
                      <span>Vector Stroke Geometry Engine</span>
                      <span className="text-amber-400/90 font-medium">Coordinate Telemetry</span>
                    </div>

                    {/* Visual Vector Stroke Diagram for Japanese Kanji 空 */}
                    <div className="relative aspect-video bg-[#0e0f12] rounded border border-[#23252e] p-4 flex flex-col items-center justify-center overflow-hidden">
                      {/* Grid guidelines */}
                      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none opacity-20">
                        <div className="border-r border-b border-dashed border-zinc-500" />
                        <div className="border-b border-dashed border-zinc-500" />
                        <div className="border-r border-dashed border-zinc-500" />
                        <div />
                      </div>

                      {/* SVG Vector Path Representation of Kanji 空 */}
                      <svg className="w-36 h-36 text-amber-400" viewBox="0 0 200 200" fill="none" stroke="currentColor">
                        <path d="M100 25 L100 45" strokeWidth="6" strokeLinecap="round" />
                        <path d="M60 55 L50 80" strokeWidth="5" strokeLinecap="round" />
                        <path d="M62 58 L140 58 L145 78" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M78 85 L70 115" strokeWidth="5" strokeLinecap="round" />
                        <path d="M80 88 L125 85 L120 115" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M40 145 L160 142" strokeWidth="6" strokeLinecap="round" />
                        <path d="M98 120 L98 180" strokeWidth="6" strokeLinecap="round" />
                        <path d="M30 180 L170 180" strokeWidth="8" strokeLinecap="round" />

                        <circle cx="100" cy="25" r="3.5" fill="#f59e0b" stroke="#0e0f12" strokeWidth="1" />
                        <circle cx="140" cy="58" r="3.5" fill="#f59e0b" stroke="#0e0f12" strokeWidth="1" />
                        <circle cx="40" cy="145" r="3.5" fill="#f59e0b" stroke="#0e0f12" strokeWidth="1" />
                        <circle cx="170" cy="180" r="3.5" fill="#f59e0b" stroke="#0e0f12" strokeWidth="1" />
                      </svg>

                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-400">
                        P0 (100, 25) → P1 (100, 45)
                      </div>
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[9px] font-mono text-amber-300">
                        Angle Delta: ±2.4° (Match PASS)
                      </div>
                    </div>

                    {/* Engine Telemetry Strip */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-400 pt-1">
                      <div>
                        <span className="text-zinc-600 block text-[9px]">SAMPLING METHOD</span>
                        <span className="text-zinc-300">Resampled Bezier (64 pts)</span>
                      </div>
                      <div>
                        <span className="text-zinc-600 block text-[9px]">EVALUATION SPEED</span>
                        <span className="text-amber-400 font-semibold">&lt; 4ms (Client-Side)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Implementation Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light">
                <div className="p-4 rounded bg-[#14151a] border border-[#23252e] space-y-1.5">
                  <span className="font-semibold text-zinc-200 block text-sm font-sans">Pressure Simulation</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Custom velocity and pressure interpolation imitating traditional Japanese sumi ink brush spreading across virtual washi paper.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#14151a] border border-[#23252e] space-y-1.5">
                  <span className="font-semibold text-zinc-200 block text-sm font-sans">Geometric Vector Matching</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Multi-segment vector direction matching evaluating complex digraphs, dakuten accents, and small tsu without network latency.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#14151a] border border-[#23252e] space-y-1.5">
                  <span className="font-semibold text-zinc-200 block text-sm font-sans">Client-Side Persistence</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Zero-dependency local storage state preservation with offline test recording and progress analytics.
                  </p>
                </div>
              </div>
            </article>
          )}

          {/* ========================================================================= */}
          {/* CASE STUDY 3: WASHMATE                                                   */}
          {/* ========================================================================= */}
          {washmate && (
            <article className="border-t-2 border-zinc-700 pt-8 space-y-8">
              {/* Header Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                <div className="lg:col-span-8 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Case Study 03 · Enterprise Full-Stack Architecture
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-400">2024 · 100% Solo Full-Stack</span>
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal tracking-tight">
                    WashMate — Laundry Operations & Vertical Slice Architecture
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                    An end-to-end service ecosystem refactored into cohesive vertical slices, featuring Spring Boot 3, PostgreSQL, Google OAuth 2.0 social login, and PayMongo webhook reconciliation.
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right space-y-2">
                  <div className="inline-block p-3 rounded border border-zinc-700/80 bg-zinc-900/60 text-left text-xs space-y-1">
                    <span className="text-zinc-200 font-medium block">81%+ Verified Test Coverage</span>
                    <span className="text-zinc-400 block text-[11px]">28 JaCoCo test classes · 49 commits</span>
                    <span className="text-zinc-500 block text-[10px]">Vertical Slice Architecture (VSA)</span>
                  </div>
                </div>
              </div>

              {/* Bespoke Enterprise Architecture Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#14151a] border border-[#23252e] rounded-lg p-6 sm:p-8">
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="font-editorial text-xl text-zinc-200 font-normal">
                    Decoupled Features Over Monolithic Layers
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    Traditional Spring Boot layered architectures (Controller → Service → Repository) often create tight technical coupling. WashMate refactored all core workflows (Order Creation, Payment Processing, Digital Wallet Top-Up, Machine Scheduling) into cohesive Vertical Slices where each slice encapsulates its own request, validator, handler, and database query.
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                      <strong className="text-zinc-100 font-medium block">Polymorphic Payment Ledger:</strong>
                      PayMongo webhook listeners process asynchronous event notifications for cards, GCash, and Maya using HMAC signature validation, updating a single ledger referencing orders, subscriptions, and wallet balances.
                    </div>

                    <div className="p-3 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                      <strong className="text-zinc-100 font-medium block">Google OAuth 2.0 & Stateless Security:</strong>
                      Spring Security 6 authorization code flow exchanging authorization grants for custom JJWT tokens with custom JwtDecoder filters and role-based permissions.
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    {washmate.repoUrl && (
                      <a
                        href={washmate.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs border border-zinc-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Inspect Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(washmate)}
                      className="text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4"
                    >
                      View Architecture Specifications →
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 flex justify-center w-full">
                  <div className="border border-[#23252e] rounded bg-zinc-950 p-6 w-full max-w-md space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#23252e] text-[11px] font-mono text-zinc-400">
                      <span>Vertical Slice Architecture</span>
                      <span className="text-amber-400/90 font-medium">Spring Boot 3 + PostgreSQL</span>
                    </div>

                    {/* VSA & Webhook Schematic */}
                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="p-2.5 rounded bg-[#0e0f12] border border-[#23252e] flex items-center justify-between">
                        <span className="text-zinc-400">Client (React / Android)</span>
                        <span className="text-zinc-600">→</span>
                        <span className="text-amber-400">JwtAuthFilter</span>
                        <span className="text-zinc-600">→</span>
                        <span className="text-zinc-200 font-semibold">OrderSlice</span>
                      </div>

                      <div className="p-3.5 rounded bg-[#0e0f12] border border-[#23252e] space-y-2">
                        <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-sans font-semibold">
                          Polymorphic Payment Ledger Schema
                        </div>
                        <div className="text-[10px] text-zinc-400 leading-tight space-y-1">
                          <div><span className="text-zinc-600">PK:</span> <span className="text-zinc-200">payment_id</span>: UUID</div>
                          <div><span className="text-zinc-600">TYPE:</span> <span className="text-amber-400 font-semibold">reference_type</span> (ORDER | SUBSCRIPTION | TOPUP)</div>
                          <div><span className="text-zinc-600">FK:</span> <span className="text-zinc-200">reference_id</span>: UUID</div>
                          <div><span className="text-zinc-600">GATEWAY:</span> <span className="text-zinc-300">PayMongo HMAC-SHA256 Webhook</span></div>
                        </div>
                      </div>
                    </div>

                    {/* JaCoCo Test Coverage Status */}
                    <div className="p-3 rounded bg-amber-500/5 border border-amber-500/20 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-300">JaCoCo Branch Coverage:</span>
                      <span className="text-amber-300 font-bold">81.4% (28 Test Classes)</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};
