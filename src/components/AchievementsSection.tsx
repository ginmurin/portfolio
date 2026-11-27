import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  verifiedDetails?: string[];
  tags: string[];
}

export const AchievementsSection: React.FC = () => {
  const pitchPerfect: Achievement = {
    id: 'pitchperfect-2026',
    title: 'Top 10 Finalist ("The Magic 10") — PitchPerfect 2026',
    issuer: 'Wildcat Innovation Labs, Cebu Institute of Technology – University',
    date: 'November 2026',
    category: 'Innovation Competition Finalist',
    description:
      'Selected as one of the Top 10 Finalists ("The Magic 10") out of 28 participating tech innovation and capstone teams in the PitchPerfect 2026 Semi-Final Round, qualifying to present VoxSight at the Grand Finals at LRAC.',
    verifiedDetails: [
      'Pitched VoxSight (Group Code: 2627-sem1-it411-51) demonstrating mobile OMR, 60 FPS sheet music synchronization, and choir vocal training value proposition.',
      'Advanced from the 28-team university semi-finals at Wildcat Innovation Labs into the Top 10 Grand Finals cohort.',
      'Completed executive pitch coaching and presentation refinement with the Wildcat Innovation Labs team.'
    ],
    tags: ['Top 10 Finalist', 'PitchPerfect 2026', 'Magic 10', 'Wildcat Innovation Labs', 'CIT-U', 'VoxSight']
  };

  const certifications: Achievement[] = [
    {
      id: 'citu-java-oop',
      title: 'Java Object-Oriented Programming Certification Exam',
      issuer: 'Cebu Institute of Technology – University & CodeChum',
      date: 'May 03, 2025',
      category: 'Timed Examination',
      description:
        'Passed the formal timed Java certification examination validating core competency in Object-Oriented Programming principles, algorithmic data structures, inheritance hierarchies, and clean exception handling.',
      verifiedDetails: [
        'Demonstrated practical Java OOP design patterns (Strategy, Factory, Polymorphism).',
        'Verified via official CodeChum platform assessment.'
      ],
      tags: ['Java 17', 'OOP Principles', 'Data Structures', 'CodeChum', 'CIT-U']
    },
    {
      id: 'aws-cloud-foundations',
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'October 2026',
      category: 'Cloud Architecture',
      description:
        'Completed AWS Academy Cloud Foundations training covering essential cloud architecture, security & compliance (IAM, VPC), core compute (EC2), scalable storage (S3), relational databases (RDS), and cost optimization.',
      verifiedDetails: [
        'Training Badge earned from Amazon Web Services Training and Certification.',
        'Hands-on labs across core cloud infrastructure, networking, and access policies.'
      ],
      tags: ['AWS Cloud', 'Cloud Architecture', 'IAM & VPC', 'EC2 & S3', 'AWS Academy']
    },
    {
      id: 'aws-genai-foundations',
      title: 'AWS Academy Graduate — Generative AI Foundations',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'November 2026',
      category: 'Artificial Intelligence',
      description:
        'Completed specialized AWS Academy training covering Generative AI principles, foundation models, prompt engineering, generative application workflows, and AWS generative AI ecosystem services.',
      verifiedDetails: [
        'Training Badge earned from Amazon Web Services Training and Certification.',
        'Foundational principles in LLM deployment, model evaluation, and prompt engineering.'
      ],
      tags: ['Generative AI', 'Foundation Models', 'Prompt Engineering', 'AWS Academy', 'Cloud AI']
    },
    {
      id: 'ibm-cybersecurity',
      title: 'Cybersecurity Fundamentals Digital Credential',
      issuer: 'IBM SkillsBuild',
      date: 'November 2026',
      category: 'Security Assurance',
      description:
        'Earned official digital credential from IBM SkillsBuild validating fundamental mastery in threat landscape analysis, defense-in-depth network security, cryptography, and vulnerability management.',
      verifiedDetails: [
        'Digital Credential issued by IBM SkillsBuild.',
        'Demonstrated foundational principles of network defense, data integrity, and access controls.'
      ],
      tags: ['Cybersecurity', 'IBM SkillsBuild', 'Network Defense', 'Cryptography', 'Data Protection']
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-[#23252e] bg-[#0e0f12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-[#1c1e26]">
          <span className="text-xs uppercase tracking-widest text-amber-500/90 font-medium block mb-1">
            07 · Honors & Credentials
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-100 font-normal">
            Achievements & Certifications
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
            Verified competition honors, AWS Academy credentials, IBM SkillsBuild certifications, and timed programming exams.
          </p>
        </div>

        {/* Featured PitchPerfect Competition Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-lg bg-[#14151a] border border-amber-600/40 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#23252e] mb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-medium block mb-1">
                {pitchPerfect.category}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-100 font-normal">
                {pitchPerfect.title}
              </h3>
            </div>
            <div className="text-xs font-mono text-zinc-400">
              {pitchPerfect.date} · {pitchPerfect.issuer}
            </div>
          </div>

          <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4 max-w-3xl">
            {pitchPerfect.description}
          </p>

          <ul className="space-y-1.5 text-xs text-zinc-400 font-light mb-6">
            {pitchPerfect.verifiedDetails?.map((d, dIdx) => (
              <li key={dIdx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-3 border-t border-[#23252e]">
            {pitchPerfect.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-300/90">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2x2 Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg bg-[#14151a] border border-[#23252e] hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-[#23252e]">
                  <span className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-zinc-500 font-mono text-[11px]">
                    {item.date}
                  </span>
                </div>

                <h4 className="font-editorial text-xl text-zinc-100 font-normal leading-snug">
                  {item.title}
                </h4>

                <div className="text-xs text-amber-500/80 font-medium">
                  {item.issuer}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {item.verifiedDetails && (
                  <ul className="space-y-1 text-xs text-zinc-400 font-light pt-1">
                    {item.verifiedDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-zinc-500 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-3 border-t border-[#23252e] flex flex-wrap gap-1.5 font-mono text-[11px]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
