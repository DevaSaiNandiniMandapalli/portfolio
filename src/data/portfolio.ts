/**
 * Single source of truth for all portfolio content.
 * Edit text here — components read only from this file.
 */

export interface SocialLink {
  id: "linkedin" | "github" | "tryhackme" | "email";
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  icon: "shield" | "bot" | "code" | "wrench";
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  /** Use placeholders like "[Dates]" until you add real dates. */
  dates: string;
  description: string;
  link?: { label: string; href: string };
}

export interface Project {
  title: string;
  abbreviation?: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  context?: string;
}

export interface Achievement {
  title: string;
  detail?: string;
}

export interface Certification {
  name: string;
}

export interface EducationEntry {
  qualification: string;
  institution: string;
  period: string;
  detail: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export const profile = {
  name: "Deva Sai Nandini Mandapalli",
  headline: "Cyber Security Engineer | SOC, Threat Hunting & AI Security",
  location: "Andhra Pradesh, India",
  email: "devasainandinimandapalli@gmail.com",
  phone: "+91 9392194979",
  phoneHref: "+919392194979",
  /** Upload your photo to /public/photo.jpg and change this path. */
  photoUrl: "/photo.jpg",
  resumeUrl: "/resume.pdf",
  intro:
    "Co-founder, CTO and Director of NxtGenSec Private Limited — building AI-driven security platforms. I pair hands-on SOC operations, threat hunting and VAPT with security engineering, and have trained 4,000+ students in ethical hacking.",
  typingRoles: ["SOC Operations", "Threat Hunting", "SOAR Automation", "AI Security"],
} as const;

export const socials: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devasainandini-cyber/",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/DevaSaiNandiniMandapalli",
  },
  {
    id: "tryhackme",
    label: "TryHackMe",
    href: "https://tryhackme.com/p/devasainandini",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:devasainandinimandapalli@gmail.com",
  },
];

export const about = {
  paragraphs: [
    "Cybersecurity engineer, security researcher and educator based in Andhra Pradesh. I am Co-Founder, CTO and Director of NxtGenSec Private Limited, a cybersecurity firm incorporated in December 2025 and registered in Tirupati, focused on security solutions and AI-driven security platforms.",
    "I hold a B.Tech in Computer Science & Engineering with a specialisation in Cyber Security, plus specialised training in Full Stack Development and Data Structures & Algorithms. My work spans SOC operations, threat hunting, incident response, VAPT and digital forensics with CrowdStrike Falcon EDR, Fortinet FortiGate, Wazuh SIEM and Splunk.",
    "Alongside the company, I mentor at the Bharat Space Education Research Centre (BSERC) and previously led mentoring at Saredufy Web Plus Academy — training 4,000+ students through workshops, hackathons and internship programs in ethical hacking, bug bounty, VAPT and full-stack development.",
  ],
  stats: [
    { value: "4,000+", label: "students trained" },
    { value: "3+", label: "CTF hackathons conducted" },
    { value: "5+", label: "internships and roles" },
  ] as Stat[],
};

export const education: EducationEntry[] = [
  {
    qualification: "B.Tech — Computer Science & Engineering (Cyber Security)",
    institution: "Andhra Pradesh, India",
    period: "2023 — 2027 (expected)",
    detail: "Current CGPA 8.5",
  },
  {
    qualification: "Intermediate (Class XII)",
    institution: "Narayana Junior College, Tirupati",
    period: "2023",
    detail: "8.9 GPA",
  },
  {
    qualification: "SSC (Class X)",
    institution: "Vijaya Bharathi English Medium High School",
    period: "2020",
    detail: "9.0 GPA",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Security",
    icon: "shield",
    items: [
      "SOC Operations",
      "Threat Hunting",
      "Incident Response",
      "Detection Engineering",
      "VAPT",
      "Web Application Security",
      "Digital Forensics",
      "SIEM",
      "EDR",
      "Firewall Administration",
      "Sophos Firewall",
      "Blockchain Security",
      "Bug Bounty",
      "Linux",
      "MITRE ATT&CK",
    ],
  },
  {
    title: "Automation & AI",
    icon: "bot",
    items: [
      "SOAR (n8n)",
      "RAG",
      "AI Security",
      "Security Automation",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Development",
    icon: "code",
    items: ["Java", "SQL", "HTML", "CSS", "JavaScript", "MERN Stack"],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: [
      "CrowdStrike Falcon EDR",
      "Fortinet FortiGate",
      "Wazuh SIEM",
      "Splunk",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Wireshark",
      "Nessus",
      "SQLMap",
      "Autopsy",
      "Volatility",
      "Git",
      "Postman",
      "Kali Linux",
      "VirusTotal",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Co-Founder, CTO & Director",
    organization: "NxtGenSec Private Limited",
    dates: "Dec 2025 — Present",
    description:
      "Co-founded a cybersecurity company registered in Tirupati, Andhra Pradesh, incorporated in December 2025. Leading technology and security engineering: AI-driven security platforms, API, mobile and IoT security, SOC services, VAPT and blockchain research.",
  },
  {
    role: "Mentor",
    organization: "Bharat Space Education Research Centre (BSERC)",
    dates: "",
    description:
      "Mentor for students and early-career professionals in cybersecurity fundamentals, ethical hacking and applied security research.",
  },
  {
    role: "Full Stack Development Intern",
    organization: "Saredufy Web Plus Academy",
    dates: "03 Apr 2025 — 30 May 2025",
    description:
      "Online internship building full-stack web application features, from UI components to API integration.",
  },
  {
    role: "Campus Ambassador",
    organization: "Saredufy Web Plus Academy",
    dates: "From 05 Aug 2025",
    description:
      "Representing Saredufy on campus: driving student outreach, workshops and internship pipeline for cybersecurity and full-stack programs.",
  },
  {
    role: "Head of Mentors",
    organization: "Saredufy Web Plus Academy",
    dates: "[Dates]",
    description:
      "Led the mentor team and trained 4,000+ students through workshops, hackathons and internship programs in ethical hacking, bug bounty, VAPT and full-stack development.",
  },
  {
    role: "Cyber Security (SOC) Intern",
    organization: "BlueCloud Softech",
    dates: "25 Jun 2026 — 25 Oct 2026",
    description:
      "Onsite internship. Built an end-to-end SOC pipeline using CrowdStrike Falcon EDR, Wazuh SIEM and Fortinet FortiGate. Converted to apprentice on completion.",
  },
  {
    role: "Cyber Security Advanced Intern",
    organization: "Supraja Technologies",
    dates: "21 May 2026 — 21 Aug 2026",
    description:
      "Online advanced internship. Performed Ethical Hacking, VAPT, Web Security Testing and Digital Forensics across client engagements.",
  },
  {
    role: "Blockchain Intern",
    organization: "NIT Puducherry",
    dates: "16 Jun 2025 — 16 Aug 2025",
    description:
      "Onsite internship. Developed blockchain applications and co-authored a blockchain research paper.",
  },
  {
    role: "Cyber Security Trainer & Resource Person",
    organization: "Independent",
    dates: "[Dates]",
    description:
      "Trained 4,000+ students in cyber security and full-stack web development as a resource person.",
  },
  {
    role: "Freelance Web Developer",
    organization: "Independent",
    dates: "[Dates]",
    description:
      "Designed and built responsive websites for clients, from requirements through deployment.",
    link: {
      label: "View project",
      href: "https://digitalstudio-website.vercel.app/",
    },
  },
];

export const projects: Project[] = [
  {
    title: "N8N SOAR Automation",
    description:
      "Security orchestration, automation and response workflows built in n8n.",
    tags: ["SOAR", "n8n", "Automation"],
    github:
      "https://github.com/DevaSaiNandiniMandapalli/N8N-SOAR-Automation",
  },
  {
    title: "Cyber Risk Financial Impact System",
    abbreviation: "CRFIS",
    description:
      "Cyber-risk financial intelligence platform with risk and asset registers, scenario analysis and a local AI analyst.",
    tags: ["Risk", "AI", "Platform"],
    github: "https://github.com/DevaSaiNandiniMandapalli/CRFIS-BCSS",
  },
  {
    title: "Advanced Professional Office Suite",
    abbreviation: "APOS",
    description:
      "Privacy-first, database-free office suite with browser-local PDF tools and a FastAPI backend.",
    tags: ["Privacy", "PDF", "FastAPI"],
    live: "https://apos.nxtgensec.org",
    github: "https://github.com/DevaSaiNandiniMandapalli/APOS",
  },
  {
    title: "AssistiveWorkmate",
    abbreviation: "AWMate",
    description:
      "Open source AI coding agent that plans changes, runs commands and edits code with permission.",
    tags: ["AI Agent", "Developer Tools", "Open Source"],
    live: "https://awmate.nxtgensec.org",
  },
  {
    title: "Campfire Restaurant Project",
    description:
      "Real-world client project delivered at Saredufy Web Plus Academy.",
    tags: ["Web", "Client Project"],
    context: "Client delivery",
  },
  {
    title: "Dharma",
    description:
      "₹10L legal technology solution for lawyers, built for the Smart India Hackathon.",
    tags: ["LegalTech", "SIH", "Full Stack"],
    context: "Smart India Hackathon",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Developed and conducted 3+ CTF hackathons",
    detail: "Designed challenges, ran the events and mentored participants.",
  },
  { title: "Best Trainer Award", detail: "Saredufy Web Plus Academy." },
  { title: "1st Prize", detail: "Ethnotech CTF Challenge." },
  { title: "2nd Prize", detail: "VAPT CTF Competition." },
  { title: "Top global ranking", detail: "TryHackMe." },
  { title: "Blockchain-integrated AI research paper", detail: "Co-authored research." },
];

export const certifications: Certification[] = [
  { name: "CrowdStrike Falcon Fundamentals" },
  { name: "Fortinet Certified Associate in Cybersecurity" },
  { name: "Palo Alto Networks Certification" },
  { name: "Spharaka" },
  { name: "Vulnerability Assessment & Penetration Testing (VAPT)" },
  { name: "Bug Bounty & Web Security" },
  { name: "NPTEL Java Programming (Elite)" },
  { name: "MERN Full Stack Development" },
];

export const tryhackme = {
  label: "TryHackMe",
  href: "https://tryhackme.com/p/devasainandini",
  message: "Hands-on labs & CTFs",
  detail:
    "I practice offensive and defensive security daily through guided rooms and capture-the-flag challenges.",
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const siteMeta = {
  title: "Deva Sai Nandini Mandapalli — Cyber Security Engineer",
  description:
    "Deva Sai Nandini Mandapalli — Cyber Security Engineer specializing in SOC operations, threat hunting, incident response and AI security. Founder of NxtGenSec.",
  footerYear: 2026,
} as const;
