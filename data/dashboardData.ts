export interface CourseModule {
  name: string;
  dur: string;
  done: boolean;
}

export interface UserCourse {
  trackId: number;
  level: "L0" | "L1";
  progress: number;
  status: "active" | "complete" | "locked";
  certDate?: string;
  modules: CourseModule[];
}

export interface TrackData {
  id: number;
  slug: string;
  icon: "python" | "react" | "dsa" | "backend" | "devops" | "ai";
  title: string;
  short: string;
  l0: {
    code: string;
    name: string;
    focus: string;
    deliverable: string;
  };
  l1: {
    code: string;
    name: string;
    focus: string;
    deliverable: string;
  };
}

export interface LiveSession {
  day: string;
  mon: string;
  time: string;
  title: string;
  track: string;
  engineer: string;
  live: boolean;
  id: string;
  pass: string;
  checklist: string[];
}

export interface RecordedSession {
  title: string;
  track: string;
  date: string;
  duration: string;
  engineer: string;
}

export interface LabItem {
  id: string;
  name: string;
  spec: string;
  status: "running" | "stopped" | "locked";
  sessionTime?: string;
  lastUsed?: string;
}

export const TRACKS: TrackData[] = [
  {
    id: 1,
    slug: "full-stack-python",
    icon: "python",
    title: "Full Stack Python & FastAPI Development",
    short: "Modern Python backend architecture with FastAPI, Django, PostgreSQL, Redis caching, and React/Next.js frontend integration.",
    l0: {
      code: "SPSP",
      name: "SkillReady Python Strategy Practitioner",
      focus: "Microservices vs monoliths, async API design, database normalization, and secure authentication flows.",
      deliverable: "An architectural technical specification and data model for a high-traffic SaaS platform.",
    },
    l1: {
      code: "SFPD",
      name: "SkillReady Full Stack Python Developer",
      focus: "FastAPI async endpoints, Pydantic validation, SQLAlchemy ORM, Celery workers, and React state integration.",
      deliverable: "Building and deploying an end-to-end multi-tenant SaaS application with real-time WebSockets and Celery background queues.",
    },
  },
  {
    id: 2,
    slug: "nextjs-typescript",
    icon: "react",
    title: "Modern JavaScript, TypeScript & Next.js",
    short: "Enterprise web application development with React 19, Next.js App Router, Server Components, TypeScript, and Tailwind CSS.",
    l0: {
      code: "SWAS",
      name: "SkillReady Web Architecture Strategist",
      focus: "Core Web Vitals, SSR/SSG/ISR rendering paradigms, component design systems, and frontend state topology.",
      deliverable: "A comprehensive frontend architecture and performance optimization audit plan for enterprise portals.",
    },
    l1: {
      code: "SNXA",
      name: "SkillReady Next.js & Frontend Architect",
      focus: "Next.js 16 App Router, React Server Components, Server Actions, Zustand state management, and strict TypeScript patterns.",
      deliverable: "Architecting a production-ready enterprise dashboard with streaming SSR, optimistic UI updates, and zero-layout-shift audits.",
    },
  },
  {
    id: 3,
    slug: "dsa-system-design",
    icon: "dsa",
    title: "Data Structures, Algorithms & System Design",
    short: "Mastery of algorithmic complexity, tree/graph traversals, dynamic programming, and high-concurrency low-level/high-level system design.",
    l0: {
      code: "SSDF",
      name: "SkillReady System Design Foundations",
      focus: "CAP theorem, load balancing, horizontal scaling, database sharding, and consistent hashing algorithms.",
      deliverable: "A high-level design (HLD) document for a global-scale messaging and feed delivery service with fault tolerance.",
    },
    l1: {
      code: "SDSE",
      name: "SkillReady DSA & Problem Solving Engineer",
      focus: "Dynamic programming, graph algorithms (Dijkstra/Floyd-Warshall), trie structures, and low-level object-oriented design (LLD).",
      deliverable: "Implementing a distributed rate-limiter, LRU cache with concurrency locks, and solving 100+ FAANG-level algorithmic challenges.",
    },
  },
  {
    id: 4,
    slug: "backend-microservices",
    icon: "backend",
    title: "Backend Engineering & Distributed Microservices",
    short: "Scalable distributed backends with Node.js/Go, gRPC, Apache Kafka event streaming, and resilient database architectures.",
    l0: {
      code: "SBES",
      name: "SkillReady Backend Strategy Architect",
      focus: "Event-driven vs REST architecture, idempotency, distributed transactions (Saga pattern), and API gateway routing.",
      deliverable: "A distributed system topology mapping out service boundaries, data isolation, and disaster recovery.",
    },
    l1: {
      code: "SDME",
      name: "SkillReady Distributed Microservices Engineer",
      focus: "Node.js non-blocking event loops, gRPC microservice communication, Kafka topic partitioning, and Docker orchestration.",
      deliverable: "Deploying a fault-tolerant payment processing pipeline handling 10,000 requests/sec with Kafka and Redis distributed locks.",
    },
  },
  {
    id: 5,
    slug: "cloud-devops",
    icon: "devops",
    title: "Cloud Infrastructure, DevOps & Kubernetes",
    short: "Containerization with Docker, Kubernetes cluster orchestration, Terraform Infrastructure-as-Code (IaC), and CI/CD on AWS.",
    l0: {
      code: "SDRS",
      name: "SkillReady DevOps Readiness Strategist",
      focus: "12-factor application design, GitOps workflows, zero-trust cloud security, and cloud cost governance.",
      deliverable: "A multi-region cloud migration roadmap with automated disaster recovery and compliance guardrails.",
    },
    l1: {
      code: "SCDE",
      name: "SkillReady Cloud DevOps Engineer",
      focus: "Multi-stage Docker builds, Kubernetes manifests, Helm charts, Terraform AWS automation, and GitHub Actions pipelines.",
      deliverable: "Setting up a production Kubernetes cluster with automated Blue/Green deployments, Prometheus monitoring, and SSL ingress.",
    },
  },
  {
    id: 6,
    slug: "ai-llm-engineering",
    icon: "ai",
    title: "Applied AI Integration & LLM Engineering",
    short: "Building AI-powered applications, RAG pipelines, LangChain/LlamaIndex agents, vector databases, and model deployment.",
    l0: {
      code: "SAIF",
      name: "SkillReady Applied AI Fundamentals",
      focus: "LLM token economics, prompt engineering frameworks, vector embeddings, and enterprise data privacy in AI.",
      deliverable: "A feasibility and risk evaluation for integrating generative AI search into existing business workflows.",
    },
    l1: {
      code: "SLLE",
      name: "SkillReady LLM & AI Application Engineer",
      focus: "LangChain/LlamaIndex multi-agent workflows, Pinecone/Qdrant vector search, fine-tuning, and OpenTelemetry AI tracing.",
      deliverable: "Deploying a multi-agent RAG knowledge assistant with hybrid keyword-vector retrieval and streaming responses.",
    },
  },
];

export const INITIAL_USER_COURSES: UserCourse[] = [
  {
    trackId: 1,
    level: "L1",
    progress: 64,
    status: "active",
    modules: [
      { name: "Python Internals, Advanced OOP & AsyncIO", dur: "2h 10m", done: true },
      { name: "FastAPI REST Architecture & Pydantic Schemas", dur: "3h 05m", done: true },
      { name: "PostgreSQL Database Schema, Indexing & ORMs", dur: "2h 40m", done: true },
      { name: "JWT Auth, RBAC Middleware & Security Headers", dur: "3h 30m", done: true },
      { name: "Redis Caching, Celery Background Queues & WebSockets", dur: "2h 55m", done: false },
      { name: "Capstone: Multi-Tenant SaaS Backend with Real-Time Data", dur: "6h 00m", done: false },
    ],
  },
  {
    trackId: 2,
    level: "L1",
    progress: 31,
    status: "active",
    modules: [
      { name: "TypeScript Strict Generics & Utility Types", dur: "1h 45m", done: true },
      { name: "React 19 Server Components & Concurrent Mode", dur: "2h 20m", done: true },
      { name: "Next.js App Router, Server Actions & Streaming SSR", dur: "2h 00m", done: false },
      { name: "State Management with Zustand & TanStack Query", dur: "3h 10m", done: false },
      { name: "Capstone: Enterprise SaaS Portal with Optimized Web Vitals", dur: "5h 30m", done: false },
    ],
  },
  {
    trackId: 3,
    level: "L1",
    progress: 100,
    status: "complete",
    certDate: "12 Jun 2026",
    modules: [
      { name: "Arrays, Two-Pointers & Sliding Window Patterns", dur: "2h 00m", done: true },
      { name: "Trees, Binary Search Trees & Graph Traversals (BFS/DFS)", dur: "3h 15m", done: true },
      { name: "Dynamic Programming, Memoization & Backtracking", dur: "2h 45m", done: true },
      { name: "Capstone: Distributed Rate-Limiter & Concurrency Engine", dur: "5h 00m", done: true },
    ],
  },
  {
    trackId: 5,
    level: "L1",
    progress: 0,
    status: "locked",
    modules: [],
  },
];

export const SESSIONS_DATA: LiveSession[] = [
  {
    day: "24",
    mon: "JUL",
    time: "10:00 IST",
    title: "Advanced Dynamic Programming & Graph Algorithms — Cohort Alpha",
    track: "Track 03 · L1 Engineering",
    engineer: "Dr. Sarah Jenkins (Senior SDE)",
    live: true,
    id: "894 2183 7461",
    pass: "SKILL2026",
    checklist: [
      "DSA sandbox environment activated in portal",
      "LeetCode hard algorithmic patterns reviewed",
      "Pre-reading: Graph shortest-path optimization brief",
      "Zoom desktop client updated",
    ],
  },
  {
    day: "25",
    mon: "JUL",
    time: "14:00 IST",
    title: "Next.js 16 App Router & Server Actions Architecture Workshop",
    track: "Track 02 · L1 Engineering",
    engineer: "Michael Chang (Staff Frontend Architect)",
    live: false,
    id: "821 4492 1038",
    pass: "SKILL2026",
    checklist: [
      "Next.js starter repository cloned locally",
      "Server actions vs API routes comparison sheet open",
      "Zoom desktop client updated",
    ],
  },
  {
    day: "28",
    mon: "JUL",
    time: "11:00 IST",
    title: "High-Performance Backend Engineering with FastAPI & Redis",
    track: "Track 01 · L1 Engineering",
    engineer: "Elena Rostova (Lead Backend Engineer)",
    live: false,
    id: "763 8821 5502",
    pass: "SKILL2026",
    checklist: [
      "Python 3.12 & Docker runtime running",
      "SQLAlchemy async ORM benchmark notebook cloned",
      "Zoom desktop client updated",
    ],
  },
  {
    day: "30",
    mon: "JUL",
    time: "15:30 IST",
    title: "Kafka Event Streaming & High-Throughput Message Queues",
    track: "Track 04 · L1 Engineering",
    engineer: "David Vance (Principal Distributed Systems Architect)",
    live: false,
    id: "941 3302 8819",
    pass: "SKILL2026",
    checklist: [
      "Apache Kafka cluster sandbox reserved",
      "Event-driven saga pattern reference reviewed",
      "VPN access to microservice range verified",
    ],
  },
  {
    day: "02",
    mon: "AUG",
    time: "10:00 IST",
    title: "Zero-Downtime Blue/Green Kubernetes Deployments on AWS",
    track: "Track 05 · L1 Engineering",
    engineer: "Marcus Sterling (DevOps Lead)",
    live: false,
    id: "554 2291 7743",
    pass: "SKILL2026",
    checklist: [
      "AWS EKS cloud sandbox session booked",
      "Helm charts & Terraform manifests downloaded",
      "Zoom desktop client updated",
    ],
  },
];

export const RECORDED_SESSIONS: RecordedSession[] = [
  {
    title: "High-Level System Design: Designing a Global Distributed Cache",
    track: "Track 03 · L1",
    date: "18 Jun 2026",
    duration: "1h 42m",
    engineer: "Dr. Sarah Jenkins",
  },
  {
    title: "TypeScript Advanced Generics & Strict Typing for Enterprise Apps",
    track: "Track 02 · L1",
    date: "02 Jul 2026",
    duration: "2h 05m",
    engineer: "Michael Chang",
  },
  {
    title: "Database Indexing, B-Trees & Query Optimization in PostgreSQL",
    track: "Track 01 · L1",
    date: "11 Jul 2026",
    duration: "1h 28m",
    engineer: "Elena Rostova",
  },
];

export const LABS_DATA: LabItem[] = [
  {
    id: "lab-python",
    name: "Python & FastAPI Cloud Sandbox",
    spec: "FASTAPI · PYTHON 3.12 · POSTGRESQL · REDIS · 32 vCPU · 128 GB RAM",
    status: "running",
    sessionTime: "2H 14M REMAINING",
  },
  {
    id: "lab-nextjs",
    name: "Next.js & React Dev Environment",
    spec: "NODE.JS 22 · TYPESCRIPT 5 · TURBOPACK · TAILWIND CSS · FULL-STACK CI/CD",
    status: "running",
    sessionTime: "5H 40M REMAINING",
  },
  {
    id: "lab-dsa",
    name: "DSA Algorithmic Judge Playground",
    spec: "INTERACTIVE ONLINE JUDGE · FAANG INTERVIEW PATTERNS · 14-PROBLEM SUITE",
    status: "stopped",
    lastUsed: "12 JUN 2026",
  },
  {
    id: "lab-k8s",
    name: "Kubernetes & Docker Cloud Range",
    spec: "MULTI-NODE K3S CLUSTER · HELM · PROMETHEUS · UNLOCKS WITH TRACK 05",
    status: "locked",
  },
];
