// Content for portfolio sections

export const skillsets = {
  Programming: ["Python", "C++", "Java", "R", "Bash"],
  "DevOps & Tools": ["Linux CLI", "Git", "GitHub"],
  "Web Development": ["HTML", "CSS", "JavaScript", "TypeScript"],
  "Cloud & Automation": [
    "Google Cloud Platform",
    "Microsoft Office 365",
    "Power Automate",
  ],
  "Design & Media": ["Blender", "CapCut", "Canva", "Figma"],
};

export type InfoCardLink = [string, string?, string?];

export interface Experience {
  type: "work" | "internship" | "project" | "hackathon";
  title: string;
  company: string;
  period: string;
  shortDescription: string;
  skills?: string[];
  longDescription?: string | string[];
  links?: InfoCardLink[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  skills: string[];
  shortDescription: string;
  longDescription?: string | string[];
  links: InfoCardLink[];
  image?: string;
}

export const experiences: Experience[] = [
  {
    type: "internship",
    title: "IT Wagering Solutions Summer Intern",
    company: "Hong Kong Jockey Club",
    period: "Jul - Aug 2025 (Upcoming)",
    shortDescription:
      "Expected to assist with wagering system maintenance and optimization to support transaction processing improvements under senior developer guidance.",
  },
  {
    type: "internship",
    title: "Business Development Intern (Part-time)",
    company: "Versitech Limited / Technology Transfer Office (TTO), HKU",
    period: "Sep 2024 - Jun 2025",
    shortDescription:
      "Analyzed invention manuscripts and assessed commercial viability to identify global business opportunities, and built a comprehensive documentation website for the Versitech e-Form processor GUI application using the Docsify framework.",
  },
  {
    type: "internship",
    title: "Student Research Assistant Intern",
    company: "Department of Data and Systems Engineering (DASE), HKU",
    period: "Dec 2024 - Jan 2025",
    skills: ["VR Development", "Video Production", "Motion Capture"],
    shortDescription: "Contributed to the XRCC 3.0 system development and video tutorials.",
    longDescription: [
      "Collected 7.5+ hours of motion capture data from 15 participants in a third-person VR environment to train AI computer vision models, enabling full-body gesture recognition without motion capture cameras.",
      "Demonstrated vCave system and XRCC capabilities to 100+ industry partners and prospective students in total.",
      "Developed an immersive VR combat game “Zombie Fight” for both headsets and vCave systems using XRCC.",
      "Produced video tutorials for XRCC 3.0 that introduce buttons, linkage, and creating a weapon that shoots bullets."
    ],
    links: [
      ["https://www.youtube.com/playlist?list=PLVeJmBvfS6ZgpowPKPxVYtatqt_qPfmHT", "Video Tutorials", "CirclePlay"]
    ]
  },
  {
    type: "internship",
    title: "Student Teaching Assistant for ENGG1330 Computer Programming I",
    company: "School of Computing & Data Science, HKU",
    period: "Sep - Nov 2024",
    shortDescription:
      "Selected as one of 38 tutors from 535 students to host weekly Python tutorial sessions for first-year engineering students. Provided comprehensive guidance on fundamental programming concepts including syntax, control statements, functions, and data types through teaching materials and active participation in course forums.",
  },
  {
    type: "internship",
    title: "IT Software Technician Intern",
    company: "Yew Chung Education Foundation",
    period: "Jun - Aug 2024",
    shortDescription:
      "Coordinated the deployment of the Asset Management and Tracking System (AMTS) across 10 campuses for 18,000+ assets.",
  },
];

const unsortedProjects: Project[] = [
  {
    id: 1,
    title: "Baby Chat",
    subtitle:
      "AI-powered Parenting App made for the GenAI Hackathon for Social Good 2023",
    skills: ["OpenAI API", "Embeddings", "RAG", "Sketch", "GitHub"],
    shortDescription:
      "Engaged in collaborative work with a diverse team of participants, including master's and PhD students. Received invaluable mentorship provided by professors and judges to develop a GenAI-powered chatbot app for newborn parents.",
    links: [
      ["https://the-bithub.com/BabyChatDemoVid", "Video Demo", "CirclePlay"]
    ]
  },
  {
    id: 2,
    title: "Text-based terminal game inspired by 2048",
    subtitle:
      "Selected as one of the Top 10 Featured Projects among 107 groups",
    skills: ["Python", "Curses Library"],
    shortDescription:
      "Completed as a group project for ENGG1330 Computer Programming I, with the restriction that no third-party external libraries were allowed.",
    links: [
      ["https://the-bithub.com/ENGG1330ProjectDemo", "Video Demo", "CirclePlay"]
    ]
  },
  {
    id: 3,
    title: "Xin Sheng 馨聲",
    subtitle:
      "AI companion app that addresses elderly loneliness through emotional recognition, personalized interactions, and community-building features",
    skills: ["GenAI", "Figma"],
    shortDescription:
      "A real-time collaborative task management application with features like drag-and-drop kanban boards, team collaboration, file sharing, and progress tracking.",
    links: [
      ["https://the-bithub.com/XinShengFigma", "Figma Prototype", "Figma"],
      ["https://the-bithub.com/XinShengPitchDeck", "Pitch Deck", "Presentation"]
    ]
  },
  {
    id: 4,
    title: "Turn-based C++ Terminal Game",
    subtitle:
      "A turn-based terminal adventure game where you guide a lost explorer to safety while escaping from hunters' attack",
    skills: ["C++", "Bash", "GitHub", "GitHub Action"],
    shortDescription:
      "Created for the group project of ENGG1340 Computer Programming II, featuring real-time keyboard controls, autosave, region-based computer enemy movement using Dijkstra'’'s algorithm, and dynamic map obstacles.",
    links: [
      ["https://the-bithub.com/ENGG1340ProjectDemo", "Video Demo", "CirclePlay"]
    ]
  },
  {
    id: 5,
    title: "The Hidden Eden",
    subtitle:
      "An aesthetic 3D artwork of a serene world designed for exploration in VR",
    skills: ["Blender", "Meta Quest 3", "Gravity Sketch"],
    shortDescription:
      "Created as a CCST9049 group project, where I was responsible for creating the whole 3D world model. Players can view and interact with the 3D world in Gravity Sketch on Meta Quest 3, such as painting on the easel, grabbing the food, and diving into the underwater world.",
    links: [
      ["https://github.com/gracetyy/CCST9049_ProjectII_Group2D3", "Github Repo", "Github"]
    ],
    image: "/images/eden.jpg"
  },
];

export const projects: Project[] = unsortedProjects.sort((a, b) => b.id - a.id);

export const contactInfo = [
  {
    icon: "mail",
    label: "School Email",
    value: "gracetyy@connect.hku.hk",
    href: "mailto:gracetyy@connect.hku.hk",
  },
  {
    icon: "mail",
    label: "Personal Email",
    value: "tinyan.yuen@gmail.com",
    href: "mailto:tinyan.yuen@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "@gracetyy",
    href: "https://linkedin.com/in/gracetyy",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "@gracetyy",
    href: "https://github.com/gracetyy",
  },
];
