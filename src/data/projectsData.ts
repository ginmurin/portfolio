import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'voxsight',
    title: 'VoxSight',
    subtitle: 'Choral Sight-Reading & Real-Time Pitch Practice Platform',
    badge: 'Senior Capstone',
    category: 'flagship',
    status: 'completed',
    statusText: 'Completed & Released (v1.0.0 – v1.4.0 APKs)',
    role: 'Software Engineer (#1 Contributor)',
    roleType: 'lead',
    verifiedCommits: '95 of 192 commits',
    timeframe: 'Senior Capstone (2026)',
    summary:
      'A multi-platform system that digitizes physical choral sheet music through server-side Optical Music Recognition (OMR), provides an interactive mobile score editor, and synchronizes audio playback with 60 FPS glowing note animations and microphone pitch tracking.',
    techStack: [
      'Kotlin',
      'Jetpack Compose',
      'Java 17',
      'Spring Boot 3.5',
      'CameraX',
      'TarsosDSP',
      'OpenSheetMusicDisplay',
      'Audiveris 5.11',
      'Python',
      'Supabase',
      'Docker'
    ],
    keyFeatures: [
      'Multi-page physical score scanning with Android CameraX and background processing notifications',
      'Server-side Audiveris machine vision pipeline converting scanned scores into standardized MusicXML',
      'Touch score editor with vertical note pitch dragging, accidental toggling, and undo/redo support',
      'Real-time 60 FPS glowing SATB notehead auras synchronized to Kotlin coroutine playback',
      'Dynamic hands-free auto-scrolling linked to active audio and visual voice parts',
      'Live microphone pitch feedback using the YIN pitch detection algorithm (TarsosDSP)',
      'Companion web portal for score previews and APK release downloads'
    ],
    verifiableContributions: [
      'Engineered the mobile interactive score editor (interactive_editor.html + NoteEditorBottomSheet.kt) with touch drag-and-drop pitch editing and undo/redo history.',
      'Wrote the Python/Audiveris MusicXML sanitization scripts to enforce canonical SATB voice ordering and strip orphan staves.',
      'Built the 60 FPS visual canvas overlay and smooth auto-scrolling loop, resolving polyphonic timing jitter across multi-page scores.',
      'Eliminated Android Out-Of-Memory (OOM) crashes by implementing progressive bitmap downsampling during camera score capture.',
      'Developed the companion web showcase and release pipeline for APK v1.4.0.'
    ],
    teamAttribution:
      'Developed with a 5-member student capstone team. My teammates contributed to initial Android UI scaffolding, base Audiveris setup, and Supabase authentication. I served as the primary contributor (95 commits), authoring the score editor, OMR cleaning pipeline, audio-visual sync, and performance optimizations.',
    architectureHighlights: [
      'Pipeline: CameraX capture -> Spring Boot OMR server -> MusicXML normalization (STANDARD_TPQ = 480) -> OSMD SVG score engraving -> Kotlin coroutines audio loop -> 60 FPS Canvas Aura Sync -> YIN pitch detection.',
      'Decoupled heavy Audiveris scanning (server-side Docker container) from client-side vector engraving (local Android WebView).'
    ],
    challengesSolved: [
      'Auto-Scroll Jitter: Replaced naive interval polling with coordinate-based matching between audio timeline ticks and SVG notehead positions.',
      'Memory Pressure: High-resolution camera score photos caused heap exhaustion on low-end test devices; solved via progressive thumbnail downsampling before upload.'
    ],
    metrics: [
      { label: 'Commits', value: '95 Commits' },
      { label: 'Releases', value: '5 APK Versions' },
      { label: 'Animation', value: '60 FPS Canvas Sync' },
      { label: 'Team Size', value: '5 Members' }
    ],
    repoUrl: 'https://github.com/lVIN15/VoxSight',
    demoUrl: 'https://voxsight.vercel.app/',
    videoUrl: 'https://www.youtube.com/watch?v=31P9AGV1Fak',
    videoEmbed: 'https://www.youtube.com/embed/31P9AGV1Fak',
    releasesUrl: 'https://github.com/lVIN15/VoxSight/releases'
  },
  {
    id: 'sorami',
    title: 'Sorami (空見)',
    subtitle: 'Japanese Calligraphy & Kana Learning Studio',
    badge: 'Solo Project',
    category: 'flagship',
    status: 'completed',
    statusText: 'Completed Solo Project (Local Build)',
    role: '100% Solo Developer',
    roleType: 'solo',
    verifiedCommits: '62 commits (100% Solo)',
    timeframe: 'Independent Project (2026)',
    summary:
      'A web application for learning Japanese kana and calligraphy with pressure-sensitive brush strokes, real-time geometric vector accuracy evaluation, adaptive quiz modes, and interactive date/time clocks.',
    techStack: [
      'React 19',
      'TypeScript 6',
      'Vite 8',
      'Tailwind CSS v4',
      'HTML5 Canvas',
      'Web Audio API'
    ],
    keyFeatures: [
      'Calligraphy canvas with simulated brush pressure, ink density, guidelines, and instant undo/clear history',
      'Geometric vector stroke evaluation comparing drawn strokes against authentic glyph vectors and directional flow',
      'Handwriting recognition converting user-drawn canvas strokes into Hiragana and Katakana characters (with dakuten, handakuten, and sokuon tsu)',
      'Row-by-row character selection across all 71 standard kana characters',
      'Hard Quiz Mode with 90% accuracy benchmark, hidden mnemonics, and a strict 3-attempt budget per question',
      'Interactive Date & Time studio featuring an interactive analog clock and blank calendar translation drills',
      '176-item comprehensive mock exam suite incorporating drawing canvas identification tests'
    ],
    verifiableContributions: [
      'Independently designed and built the entire application from scratch across 62 Git commits.',
      'Authored the vector recognition algorithms (hiraganaRecognizer.ts and accuracyEvaluator.ts) for stroke direction matching and loop tolerance heuristics.',
      'Developed the HTML5 Canvas calligraphy engine with touch support, coordinate normalization, and guideline rendering.',
      'Compiled the 176-question curriculum dataset, mock exam views, and audio pronunciation service.',
      'Engineered an optimized static build with React 19, Vite 8, and Tailwind v4.'
    ],
    teamAttribution:
      '100% solo project. Note: Completed as a verified local software project with compiled distribution assets, not a commercial cloud deployment.',
    architectureHighlights: [
      'Vector Normalization: Normalizes raw touch/mouse coordinates to a 1000x1000 glyph grid, ensuring fair scoring across phone and desktop viewports.',
      'Loop Detection Heuristics: Evaluates curve direction and intersection points to distinguish open curves from closed loops in characters like ね and れ.'
    ],
    challengesSolved: [
      'Touch Latency: Optimized canvas redraw loops using requestAnimationFrame and throttled pointer events to maintain smooth brush rendering on mobile devices.',
      'Accent Disambiguation: Grouped dakuten and handakuten accent strokes with the base character bounding box before evaluation to avoid false multi-character triggers.'
    ],
    metrics: [
      { label: 'Commits', value: '62 Commits' },
      { label: 'Authorship', value: '100% Solo' },
      { label: 'Curriculum', value: '176 Exam Items' },
      { label: 'Bundle Size', value: '<400 KB' }
    ],
    repoUrl: 'https://github.com/ginmurin/Sorami',
    demoUrl: 'https://sorami-three.vercel.app/'
  },
  {
    id: 'washmate',
    title: 'WashMate',
    subtitle: 'Laundry Service & Polymorphic Payment Platform',
    badge: 'Solo Full-Stack',
    category: 'flagship',
    status: 'completed',
    statusText: 'Completed Solo Full-Stack Project',
    role: '100% Solo Developer',
    roleType: 'solo',
    verifiedCommits: '49 commits (100% Solo)',
    timeframe: 'Systems Integration (2026)',
    summary:
      'A full-stack laundry management and payment system supporting booking workflows, tier subscriptions, and wallet management across web and mobile clients, refactored to Vertical Slice Architecture.',
    techStack: [
      'Java 17',
      'Spring Boot 3.x',
      'Spring Security 6.x',
      'PostgreSQL',
      'Redis',
      'React 19',
      'TypeScript',
      'Kotlin (Android)',
      'Google OAuth 2.0',
      'PayMongo API',
      'JJWT',
      'JaCoCo'
    ],
    keyFeatures: [
      'Vertical Slice Architecture (VSA) organizing modules by cohesive feature slices instead of traditional layered boundaries',
      'Google OAuth 2.0 authorization code flow with automatic subscription provisioning and account linking',
      'Polymorphic payment pattern managing Orders, Subscriptions, and Wallet Top-ups through a unified schema',
      'PayMongo gateway integration supporting Credit/Debit Cards, GCash, Maya, and GrabPay',
      'Automated test suite achieving 81% branch coverage on authentication routines verified via JaCoCo',
      'Dual clients: React web dashboard and Android Jetpack Compose mobile app'
    ],
    verifiableContributions: [
      '100% solo project across 49 commits. Designed the database schema, Spring Boot REST controllers, security filters, React frontend, and Android mobile app.',
      'Refactored the application from traditional layered architecture to Vertical Slice Architecture (VSA), improving cohesion and testability.',
      'Implemented Google OAuth 2.0 authorization code flow with JWT issuance (access + refresh) and secure account linking.',
      'Structured the polymorphic payment table pattern (reference_type and reference_id) to support orders, subscriptions, and wallet reloads without schema bloat.',
      'Wrote automated unit and integration tests achieving 81% branch coverage on core authentication routines.'
    ],
    teamAttribution:
      '100% solo project developed independently for the IT342 Systems Integration course.',
    architectureHighlights: [
      'Vertical Slice Architecture: Organizes codebase into self-contained slices (auth, order, payment, subscription, wallet), keeping commands, queries, and DTOs collocated.',
      'Polymorphic Transactions: Uses reference_type enums and reference_id indexes to decouple transaction handling from rigid entity foreign keys.'
    ],
    challengesSolved: [
      'OAuth Account Linking: Handled collision scenarios where existing email/password users sign in via Google OAuth by verifying email claims and binding oauth_id.',
      'Refresh Token Rotation: Implemented secure token rotation across both React browser storage and Android secure preferences.'
    ],
    metrics: [
      { label: 'Commits', value: '49 Commits' },
      { label: 'Test Coverage', value: '81% Branch Coverage' },
      { label: 'Architecture', value: 'Vertical Slices' },
      { label: 'Payment Options', value: '5 Methods' }
    ],
    repoUrl: 'https://github.com/ginmurin/IT342-Sevilla-WashMate'
  },
  {
    id: 'folder-locker',
    title: 'Folder Locker',
    subtitle: 'Desktop Folder Security via Windows Access Control Lists',
    badge: 'Desktop Utility',
    category: 'supporting',
    status: 'completed',
    statusText: 'Completed Utility (100% Solo)',
    role: '100% Solo Creator',
    roleType: 'solo',
    timeframe: 'Personal Project (2025/2026)',
    summary:
      'A desktop folder protection tool that enforces real directory access restrictions using Windows icacls (DENY) permissions and system attribute flags, secured with Windows Credential Manager.',
    techStack: [
      'Python 3',
      'Tkinter GUI',
      'Windows Credential Manager',
      'Win32 icacls',
      'SHA-256'
    ],
    keyFeatures: [
      'Master password hashing and secure storage in Windows Credential Manager via keyring',
      'Enforced directory access denial using native Windows icacls "(DENY)" commands rather than surface-level folder renames',
      'Combined folder hiding with system (+S) and hidden (+H) attributes',
      'Audit logging (folder_locker.log) tracking all lock, unlock, and credential change actions'
    ],
    verifiableContributions: [
      '100% solo project. Designed the Tkinter GUI and implemented the subprocess hooks for icacls and attrib operations.',
      'Integrated Windows Credential Manager to secure master passwords without saving credentials in plain text files.'
    ],
    architectureHighlights: [
      'Native Windows ACLs: Operates directly at the Windows NT security subsystem level, keeping locked folders protected even if the application process is closed.'
    ],
    challengesSolved: [
      'Permission Verification: Wrote subprocess parsers to inspect active user (DENY) ACLs, eliminating false-positive lock statuses.'
    ],
    metrics: [
      { label: 'Mechanism', value: 'Native Win32 icacls' },
      { label: 'Key Storage', value: 'Credential Manager' }
    ]
  },
  {
    id: 'scholaris',
    title: 'Scholaris (Learning Pathway)',
    subtitle: 'AI-Assisted Study Plan & Dynamic Quiz Platform',
    badge: 'Academic Team Project',
    category: 'supporting',
    status: 'completed',
    statusText: 'Completed Academic Team Project',
    role: 'Lead Developer (Team of 6)',
    roleType: 'lead',
    verifiedCommits: 'Lead Developer in 6-Member Team',
    timeframe: 'Information Management (2025)',
    summary:
      'An educational web platform that gathers student learning style preferences (VARK) and connects to the Google Gemini API to generate personalized study plans and self-grading quizzes.',
    techStack: [
      'Python 3',
      'Django 5.2.7',
      'PostgreSQL',
      'Google Gemini API',
      'JavaScript'
    ],
    keyFeatures: [
      'Google Gemini API service (core/ai_service.py) generating tailored study plans based on student learning profiles',
      'Automated quiz generation engine with configurable difficulty levels and answer explanations',
      'Student progress dashboard tracking completed topics and study milestones',
      'Admin moderation portal overseeing study plans and content validation'
    ],
    verifiableContributions: [
      'Served as the Lead Developer in a 6-member team (PO, BA, Scrum Master, Lead Dev, Frontend, Backend).',
      'Built the core AI service layer (core/ai_service.py) interfacing Django with the Google Gemini API.',
      'Implemented the automated quiz generator, study plan CRUD routing, and admin moderation endpoints.'
    ],
    teamAttribution:
      'Academic team project. Team members handled business analysis, project management, and HTML/CSS templates. I led backend development, Gemini API integration, and database migrations.',
    architectureHighlights: [
      'Structured Prompting: Formats student VARK preferences into structured prompts for the Gemini API and parses JSON outputs directly into Django model instances.'
    ],
    challengesSolved: [
      'Quota Management: Implemented prompt optimizations and response caching to prevent hitting free-tier Gemini API rate limits.'
    ],
    metrics: [
      { label: 'Role', value: 'Lead Developer' },
      { label: 'AI Service', value: 'Google Gemini' }
    ],
    repoUrl: 'https://github.com/ginmurin/CSIT327-G6-Scholaris'
  },
  {
    id: 'merchpoint',
    title: 'MerchPoint',
    subtitle: 'Merchandise Reservation System with Loyalty Points Rewards',
    badge: 'Academic Prototype',
    category: 'supporting',
    status: 'completed',
    statusText: 'Completed Academic Prototype (100% Solo)',
    role: '100% Solo Developer',
    roleType: 'solo',
    verifiedCommits: '9 commits (100% Solo)',
    timeframe: 'Systems Analysis (2025/2026)',
    summary:
      'A school merchandise reservation and administrative approval platform featuring an automated loyalty points engine where approved pickups yield points redeemable as checkout discounts.',
    techStack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'React (Vite)',
      'Tailwind CSS'
    ],
    keyFeatures: [
      'Two-sided approval lifecycle separating student reservations from merchandising office approval',
      'Loyalty rewards engine awarding points upon approved pickup and calculating discounts on subsequent orders',
      'Shopping cart with real-time stock inventory checks and reservation locks',
      'Detailed 40KB Functional Specification Document (FSD.md) detailing business rules and data models'
    ],
    verifiableContributions: [
      '100% solo project. Designed the database schema (schema.sql), Spring Boot REST API endpoints, and React user/admin interface.',
      'Authored the complete 40KB Functional Specification Document (FSD.md) defining user stories, acceptance criteria, and edge cases.'
    ],
    teamAttribution:
      '100% solo project developed as an academic software engineering prototype.',
    architectureHighlights: [
      'Transactional Balance Updates: Ensures loyalty points balance adjustments and inventory decrements execute atomically on admin reservation approval.'
    ],
    challengesSolved: [
      'Points Calculation Precision: Handled edge cases where partial point redemption clashed with minimum order values through database transaction constraints.'
    ],
    metrics: [
      { label: 'Commits', value: '9 Commits' },
      { label: 'Specification', value: '40KB FSD' }
    ],
    repoUrl: 'https://github.com/ginmurin/MerchPoint'
  },
  {
    id: 'citepass',
    title: 'CITePASS',
    subtitle: 'Student Campus Pass & Attendance Check-In System',
    badge: 'Collaborative Project',
    category: 'collaborative',
    status: 'completed',
    statusText: 'Completed Collaborative Academic Project',
    role: 'Backend & Integration Contributor',
    roleType: 'collaborator',
    verifiedCommits: '5 commits on repository',
    timeframe: 'Academic Team Project (2025)',
    summary:
      'A campus event pass and check-in system using dynamic QR code passes to streamline student attendance logging.',
    techStack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'React',
      'QR Generation'
    ],
    keyFeatures: [
      'Dynamic QR code generation linked to student records',
      'Event check-in scanner logging timestamped attendance records',
      'Student profile management and registration API endpoints'
    ],
    verifiableContributions: [
      'Collaborative project developed with a friend (lead repository owner Gabs64).',
      'Initialized the Spring Boot backend service, built entity CRUD REST APIs, connected frontend registration to backend endpoints, and developed attendance history tracking.'
    ],
    teamAttribution:
      'Developed with peer Gabs64. Frontend layouts and scanner UI were developed collaboratively; I handled the Spring Boot backend initialization and registration integration.',
    architectureHighlights: [
      'Spring Boot REST architecture interfacing with MySQL to persist scan logs and timestamped student event attendance.'
    ],
    challengesSolved: [
      'Local Network Testing: Resolved CORS and proxy routing issues between React client and Spring Boot backend during physical device testing on local Wi-Fi.'
    ],
    metrics: [
      { label: 'Role', value: 'Backend Contributor' },
      { label: 'Backend', value: 'Spring Boot + MySQL' }
    ],
    repoUrl: 'https://github.com/Gabs64/CITePASS.git'
  },
  {
    id: 'harborhop',
    title: 'HarborHop',
    subtitle: 'Maritime Ferry Ticketing & Harbor Booking System',
    badge: 'Project Management & Analysis',
    category: 'collaborative',
    status: 'completed',
    statusText: 'Academic Project (PM & Documentation)',
    role: 'Project Manager & Systems Analyst',
    roleType: 'pm',
    timeframe: 'Project Management (2025)',
    summary:
      'A maritime ferry reservation management platform. Contributed to sprint planning, backlog curation, user stories, and Functional Requirements Specification (FRS) documentation.',
    techStack: [
      'Agile / Scrum',
      'Sprint Planning',
      'Functional Requirements (FRS)',
      'MoSCoW Prioritization'
    ],
    keyFeatures: [
      'Sprint backlog planning and user story formulation for maritime ticket reservations',
      'Functional Requirements Specification (FRS) covering vessel capacity, route schedules, and checkout rules',
      'MoSCoW requirement prioritization matrix'
    ],
    verifiableContributions: [
      'Contributed strictly to project management, Agile sprint documentation, and functional specifications (HarborHop_Sprint 2_Final Backlog.pdf).',
      'Did not author core software code (core repository developed by team lead daas-me). Accurately presented as systems analysis and project management experience.'
    ],
    teamAttribution:
      'Team project. Software development was authored by team lead daas-me (Craig Salgado). My verified role was Project Management and Systems Analysis documentation.',
    architectureHighlights: [
      'Agile Sprint Framework: Mapped out sprint epics, acceptance criteria, and edge cases for passenger booking workflows.'
    ],
    challengesSolved: [
      'Scope Management: Applied MoSCoW prioritization to keep student team deliverables focused on essential ticketing flows.'
    ],
    metrics: [
      { label: 'Role', value: 'Project Management' },
      { label: 'Methodology', value: 'Agile / Scrum' }
    ],
    repoUrl: 'https://github.com/daas-me/HarborHop.git'
  }
];
