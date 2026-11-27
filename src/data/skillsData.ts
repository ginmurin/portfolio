import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend & API Engineering',
    description: 'Server-side architectures, database design, secure authentication, and RESTful service development.',
    skills: [
      {
        name: 'Java 17 / Spring Boot 3.x',
        level: 'Core Strength',
        context: 'Engineered multi-tier REST APIs in VoxSight, WashMate, and MerchPoint using Spring Data JPA, Spring Security, and Maven.'
      },
      {
        name: 'Spring Security 6 & OAuth 2.0',
        level: 'Core Strength',
        context: 'Implemented Google OAuth 2.0 Authorization Code Flow, JJWT token issuance, custom JwtDecoder, and role-based access control.'
      },
      {
        name: 'Python & Django 5.x',
        level: 'Proficient',
        context: 'Built backend AI services in Scholaris (Django + Google Gemini API) and automation scripts in Folder Locker and InfoSec tools.'
      },
      {
        name: 'Relational Database Modeling',
        level: 'Core Strength',
        context: 'Designed normalized schemas in PostgreSQL and MySQL; implemented polymorphic reference patterns and transaction guards.'
      },
      {
        name: 'Software Testing (JaCoCo & JUnit)',
        level: 'Proficient',
        context: 'Wrote unit and integration tests for Spring Boot controllers and auth filters, achieving 81% branch coverage in WashMate.'
      }
    ]
  },
  {
    title: 'Frontend & Mobile Development',
    description: 'Interactive user interfaces, vector graphics, state management, and native Android development.',
    skills: [
      {
        name: 'React 19 & TypeScript 6',
        level: 'Core Strength',
        context: 'Authored Sorami from scratch with custom vector canvas algorithms; built WashMate web portal and VoxSight web showcase.'
      },
      {
        name: 'HTML5 Canvas & Vector Mathematics',
        level: 'Core Strength',
        context: 'Engineered geometric handwriting recognizers, stroke direction heuristics, and simulated brush calligraphy in Sorami.'
      },
      {
        name: 'Android Kotlin & Jetpack Compose',
        level: 'Proficient',
        context: 'Built mobile UI screens, CameraX capture pipelines, and Coroutine audio pacing loops in VoxSight and WashMate Mobile.'
      },
      {
        name: 'Tailwind CSS v4 & Responsive Design',
        level: 'Core Strength',
        context: 'Crafted mobile-first, high-contrast accessible layouts across Sorami, WashMate, and modern web applications.'
      },
      {
        name: 'Vite 8 & Modern Build Tooling',
        level: 'Core Strength',
        context: 'Configured optimized static compilation pipelines, tree-shaking, and asset bundling across all React applications.'
      }
    ]
  },
  {
    title: 'Architecture & System Principles',
    description: 'Design patterns and methodologies applied to solve concrete engineering constraints.',
    skills: [
      {
        name: 'Vertical Slice Architecture (VSA)',
        level: 'Core Strength',
        context: 'Refactored WashMate to cohesive vertical feature slices, eliminating tight technical layer coupling.'
      },
      {
        name: 'Signal Processing & Audio Sync',
        level: 'Proficient',
        context: 'Integrated TarsosDSP YIN pitch tracker and synchronized 60 FPS visual staves with Kotlin Coroutine audio ticks in VoxSight.'
      },
      {
        name: 'Win32 System Security & ACLs',
        level: 'Proficient',
        context: 'Utilized icacls subprocess commands, system attribute flags, and Windows Credential Manager in Folder Locker.'
      },
      {
        name: 'Agile & Systems Analysis',
        level: 'Proficient',
        context: 'Led technical implementation as Lead Developer in Scholaris; formulated FRS specifications and sprint backlogs in HarborHop.'
      }
    ]
  }
];
