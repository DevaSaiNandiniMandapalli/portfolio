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
    "I defend, hunt and automate — pairing hands-on SOC operations and threat hunting with AI-driven security engineering. Currently a final-year Cyber Security student and founder of NxtGenSec.",
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
    "Final-year B.Tech (Computer Science & Engineering, Cyber Security) student with hands-on experience in SOC operations, VAPT, threat hunting, incident response and digital forensics.",
    "Skilled in CrowdStrike Falcon EDR, Fortinet FortiGate, Wazuh SIEM and Splunk. Founder of NxtGenSec, building AI-powered security solutions and mentoring students.",
  ],
  stats: [
    { value: "4,000+", label: "students trained" },
    { value: "3+", label: "CTF hackathons conducted" },
    { value: "5+", label: "internships and roles" },
  ] as Stat[],
};

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
    role: "Founder & Security Lead",
    organization: "NxtGenSec",
    dates: "[Dates]",
    description:
      "Led cybersecurity workshops, internships, hackathons and mentorship programs; building AI-powered security solutions for students and early-career professionals.",
  },
  {
    role: "Head of Mentors",
    organization: "Saredufy Web Plus Academy",
    dates: "[Dates]",
    description:
      "Mentored students in Ethical Hacking, VAPT and Full-Stack Development, guiding projects from concept to delivery.",
  },
  {
    role: "Cyber Security (SOC) Intern",
    organization: "BlueCloud Softech",
    dates: "[Dates]",
    description:
      "Built an end-to-end SOC pipeline using CrowdStrike Falcon EDR, Wazuh SIEM and Fortinet FortiGate.",
  },
  {
    role: "Cyber Security Advanced Intern",
    organization: "Supraja Technologies",
    dates: "[Dates]",
    description:
      "Performed Ethical Hacking, VAPT, Web Security Testing and Digital Forensics across client engagements.",
  },
  {
    role: "Blockchain Intern",
    organization: "NIT Puducherry",
    dates: "[Dates]",
    description:
      "Developed blockchain applications and co-authored a blockchain research paper.",
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
  { name: "Sophos Firewall" },
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
