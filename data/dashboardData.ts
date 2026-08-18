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
  icon: "quantum" | "ai" | "robot" | "security" | "pqc" | "fde";
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
    slug: "quantum",
    icon: "quantum",
    title: "Quantum Technology & Computation",
    short: "Qiskit / Cirq circuit execution, hybrid quantum-classical algorithms, and enterprise optimization use cases.",
    l0: {
      code: "SQSP",
      name: "SkillReady Quantum Strategy Practitioner",
      focus: "Qubit mechanics, entanglement, and identifying enterprise use cases for quantum optimization.",
      deliverable: "A strategic roadmap identifying internal processes benefiting from quantum advantage.",
    },
    l1: {
      code: "SAQD",
      name: "SkillReady Applied Quantum Developer",
      focus: "Writing and executing quantum circuits using Qiskit or Cirq.",
      deliverable: "Deploying a hybrid quantum-classical algorithm to solve a simulated logistics problem.",
    },
  },
  {
    id: 2,
    slug: "ai-edge",
    icon: "ai",
    title: "Artificial Intelligence & Edge Computing",
    short: "Agentic AI pipelines, model quantization, and deployment on NVIDIA Jetson edge hardware.",
    l0: {
      code: "SAOS",
      name: "SkillReady AI Operations Strategist",
      focus: "Understanding AI data pipelines, agentic frameworks, and edge vs. cloud inferencing.",
      deliverable: "An architectural design document for deploying an AI model in bandwidth-constrained environments.",
    },
    l1: {
      code: "SEAA",
      name: "SkillReady Edge AI Architect",
      focus: "Model quantization, optimization, and deployment on edge hardware such as NVIDIA Jetson.",
      deliverable: "Optimizing and deploying a computer vision model that runs inference at the edge with restricted compute resources.",
    },
  },
  {
    id: 3,
    slug: "robotics",
    icon: "robot",
    title: "Robotics & Cyber-Physical Systems",
    short: "Kinematics, sensor fusion, OpenUSD digital twins, and reinforcement learning in Omniverse.",
    l0: {
      code: "SCPF",
      name: "SkillReady Cyber-Physical Foundation",
      focus: "Kinematics, sensor fusion, and the business case for autonomous industrial robotics.",
      deliverable: "A feasibility and safety assessment for integrating autonomous mobile robots into manufacturing floors.",
    },
    l1: {
      code: "SDTE",
      name: "SkillReady Digital Twin Engineer",
      focus: "Building and interacting with simulated physical environments using OpenUSD and Omniverse.",
      deliverable: "Constructing a digital twin of a robotic workcell and training a robotic arm using reinforcement learning.",
    },
  },
  {
    id: 4,
    slug: "infrastructure",
    icon: "security",
    title: "Digital Infrastructure & Security",
    short: "Zero-trust architecture, Purdue Model ICS/OT segmentation, and live cyberattack defense simulations.",
    l0: {
      code: "SISF",
      name: "SkillReady Infrastructure Security Foundation",
      focus: "Cloud architecture, zero-trust principles, and the Purdue Enterprise Reference Architecture for isolating critical systems.",
      deliverable: "A high-level risk assessment and network segmentation strategy for a multi-site enterprise.",
    },
    l1: {
      code: "SISA",
      name: "SkillReady ICS/OT Security Architect",
      focus: "Hands-on defense of Industrial Control Systems (ICS) and Operational Technology (OT).",
      deliverable: "Successfully defending a simulated factory network against a coordinated cyberattack via strict Purdue Model segmentation and traffic analysis.",
    },
  },
  {
    id: 5,
    slug: "pqc",
    icon: "pqc",
    title: "Post-Quantum Cryptography",
    short: "Harvest-Now/Decrypt-Later threat model, NIST ML-KEM & ML-DSA migration, crypto-agility, hybrid key exchange.",
    l0: {
      code: "SPRS",
      name: "SkillReady PQC Readiness Strategist",
      focus: "The 'Harvest Now, Decrypt Later' threat model and the logistics of migrating to NIST-approved PQC standards (ML-KEM, ML-DSA).",
      deliverable: "Executing a simulated cryptographic inventory and drafting a prioritized migration timeline for enterprise assets.",
    },
    l1: {
      code: "SAPS",
      name: "SkillReady Applied PQC Specialist",
      focus: "Implementing crypto-agility and executing hybrid key exchanges.",
      deliverable: "Upgrading a legacy application's CI/CD pipeline to automatically manage and issue quantum-resistant certificates without downtime.",
    },
  },
  {
    id: 6,
    slug: "fde",
    icon: "fde",
    title: "Forward Deployed Engineering",
    short: "Client discovery, secure RAG pipeline deployments with OpenTelemetry observability in secure environments.",
    l0: {
      code: "SFDF",
      name: "SkillReady Forward Deployed Fundamentals",
      focus: "Client discovery, framing technical use cases, and bridging deep-tech products with legacy client infrastructure.",
      deliverable: "A comprehensive deployment proposal that identifies a client's data bottlenecks and proposes a secure integration strategy.",
    },
    l1: {
      code: "SAFO",
      name: "SkillReady Advanced FDE Orchestration",
      focus: "Production-grade deployments in hostile or highly secure environments.",
      deliverable: "Building a secure, multi-agent RAG pipeline on a simulated client's on-premise infrastructure with OpenTelemetry observability.",
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
      { name: "Qubits, Superposition & Entanglement", dur: "2h 10m", done: true },
      { name: "Quantum Gates & Circuit Composition", dur: "3h 05m", done: true },
      { name: "Qiskit Lab: First Circuit Compilation", dur: "2h 40m", done: true },
      { name: "Hybrid Quantum-Classical Algorithms", dur: "3h 30m", done: true },
      { name: "Optimization: QAOA in Production Practice", dur: "2h 55m", done: false },
      { name: "Capstone: Logistics Optimization Deliverable", dur: "6h 00m", done: false },
    ],
  },
  {
    trackId: 5,
    level: "L1",
    progress: 31,
    status: "active",
    modules: [
      { name: "Harvest Now, Decrypt Later: Threat Modeling", dur: "1h 45m", done: true },
      { name: "NIST Standards: ML-KEM & ML-DSA Cryptosystems", dur: "2h 20m", done: true },
      { name: "Crypto-Agility & Key Encapsulation Patterns", dur: "2h 00m", done: false },
      { name: "Hybrid Key Exchange Lab Implementation", dur: "3h 10m", done: false },
      { name: "Capstone: CI/CD Quantum-Resistant Cert Pipeline", dur: "5h 30m", done: false },
    ],
  },
  {
    trackId: 4,
    level: "L1",
    progress: 100,
    status: "complete",
    certDate: "12 Jun 2026",
    modules: [
      { name: "Purdue Enterprise Reference Architecture", dur: "2h 00m", done: true },
      { name: "ICS/OT Zero Trust Network Isolation", dur: "3h 15m", done: true },
      { name: "Live Attack Surface & PCAP Telemetry", dur: "2h 45m", done: true },
      { name: "Capstone: Industrial Cyber Range Defense", dur: "5h 00m", done: true },
    ],
  },
  {
    trackId: 2,
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
    title: "Quantum Circuit Design & QAOA — Cohort Alpha",
    track: "Track 01 · L1 Engineering",
    engineer: "Dr. Sarah Jenkins",
    live: true,
    id: "894 2183 7461",
    pass: "SKILL2026",
    checklist: [
      "Lab environment activated in portal",
      "Qiskit / Cirq notebook cloned",
      "Pre-reading: NIST Quantum Optimization brief",
      "Zoom desktop client updated",
    ],
  },
  {
    day: "25",
    mon: "JUL",
    time: "14:00 IST",
    title: "PQC Enterprise Migration Strategy Workshop",
    track: "Track 05 · L0 Strategy",
    engineer: "Michael Chang",
    live: false,
    id: "821 4492 1038",
    pass: "SKILL2026",
    checklist: [
      "Cryptographic inventory template downloaded",
      "Migration timeline worksheet open",
      "Zoom desktop client updated",
    ],
  },
  {
    day: "28",
    mon: "JUL",
    time: "11:00 IST",
    title: "Edge AI Deployment on NVIDIA Jetson Hardware",
    track: "Track 02 · L1 Engineering",
    engineer: "Elena Rostova",
    live: false,
    id: "763 8821 5502",
    pass: "SKILL2026",
    checklist: [
      "Jetson simulator instance running",
      "Model quantization notebook cloned",
      "Zoom desktop client updated",
    ],
  },
  {
    day: "30",
    mon: "JUL",
    time: "15:30 IST",
    title: "ICS/OT Cyberattack Defense Live Range Simulation",
    track: "Track 04 · L1 Engineering",
    engineer: "David Vance",
    live: false,
    id: "941 3302 8819",
    pass: "SKILL2026",
    checklist: [
      "ICS network sandbox reserved",
      "Purdue Model reference topology sheet reviewed",
      "VPN access to simulation range verified",
    ],
  },
  {
    day: "02",
    mon: "AUG",
    time: "10:00 IST",
    title: "Omniverse Digital Twin Bootcamp & USD Pipelines",
    track: "Track 03 · L1 Engineering",
    engineer: "Marcus Sterling",
    live: false,
    id: "554 2291 7743",
    pass: "SKILL2026",
    checklist: [
      "Omniverse cloud workstation session booked",
      "OpenUSD starter scene downloaded",
      "Zoom desktop client updated",
    ],
  },
];

export const RECORDED_SESSIONS: RecordedSession[] = [
  {
    title: "Purdue Model Segmentation Deep-Dive & Live Attack Telemetry",
    track: "Track 04 · L1",
    date: "18 Jun 2026",
    duration: "1h 42m",
    engineer: "David Vance",
  },
  {
    title: "Qiskit Fundamentals & Quantum State Superposition Kickoff",
    track: "Track 01 · L1",
    date: "02 Jul 2026",
    duration: "2h 05m",
    engineer: "Dr. Sarah Jenkins",
  },
  {
    title: "ML-KEM & ML-DSA in Production Enterprise Systems",
    track: "Track 05 · L1",
    date: "11 Jul 2026",
    duration: "1h 28m",
    engineer: "Michael Chang",
  },
];

export const LABS_DATA: LabItem[] = [
  {
    id: "lab-quantum",
    name: "Quantum Simulation Cluster",
    spec: "QISKIT AER · 32 vCPU · 128 GB RAM · REGION: AP-SOUTH",
    status: "running",
    sessionTime: "2H 14M REMAINING",
  },
  {
    id: "lab-pqc",
    name: "PQC Cryptography Workbench",
    spec: "ML-KEM / ML-DSA TOOLCHAIN · CI/CD SANDBOX · REGION: AP-SOUTH",
    status: "running",
    sessionTime: "5H 40M REMAINING",
  },
  {
    id: "lab-ics",
    name: "ICS Network Simulator",
    spec: "PURDUE MODEL RANGE · 14-NODE FACTORY WORKCELL SIM",
    status: "stopped",
    lastUsed: "12 JUN 2026",
  },
  {
    id: "lab-jetson",
    name: "Jetson Edge AI Inference Bench",
    spec: "GPU: NVIDIA T4 · TENSORRT 10 PIPELINE · UNLOCKS WITH TRACK 02",
    status: "locked",
  },
];
