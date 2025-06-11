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

export const experiences = [
  {
    type: "internship" as const,
    title: "IT Wagering Solutions Summer Intern",
    company: "Hong Kong Jockey Club",
    period: "Jul - Aug 2025 (Upcoming)",
    shortDescription:
      "Expected to assist with wagering system maintenance and optimization to support transaction processing improvements under senior developer guidance.",
  },
  {
    type: "internship" as const,
    title: "Business Development Intern (Part-time)",
    company: "Versitech Limited / Technology Transfer Office (TTO), HKU",
    period: "Sep 2024 - Jun 2025",
    shortDescription:
      "Analyzed invention manuscripts and assessed commercial viability to identify global business opportunities, and built a comprehensive documentation website for the Versitech e-Form processor GUI application using the Docsify framework.",
  },
  {
    type: "internship" as const,
    title: "Student Research Assistant Intern",
    company: "Department of Data and Systems Engineering (DASE), HKU",
    period: "Dec 2024 - Jan 2025",
    skills: ["VR Development", "Video Production", "Motion Capture"],
    shortDescription: "Contributed to the XRCC 3.0 system development and video tutorials.",
    longDescription: ["Collected 7.5+ hours of motion capture data from 15 participants in a third-person VR environment to train AI computer vision models, enabling full-body gesture recognition without motion capture cameras.", "Demonstrated vCave system and XRCC capabilities to 100+ industry partners and prospective students in total.", "Developed an immersive VR combat game “Zombie Fight” for both headsets and vCave systems using XRCC.", "Produced video tutorials for XRCC 3.0 that introduce buttons, linkage, and creating a weapon that shoots bullets. (https://www.youtube.com/playlist?list=PLVeJmBvfS6ZgpowPKPxVYtatqt_qPfmHT)"]
  },
  {
    type: "internship" as const,
    title: "Student Teaching Assistant for ENGG1330 Computer Programming I",
    company: "School of Computing & Data Science, HKU",
    period: "Sep - Nov 2024",
    shortDescription:
      "Selected as one of 38 tutors from 535 students to host weekly Python tutorial sessions for first-year engineering students. Provided comprehensive guidance on fundamental programming concepts including syntax, control statements, functions, and data types through teaching materials and active participation in course forums.",
  },
  {
    type: "internship" as const,
    title: "IT Software Technician Intern",
    company: "Yew Chung Education Foundation",
    period: "Jun - Aug 2024",
    shortDescription:
      "Coordinated the deployment of the Asset Management and Tracking System (AMTS) across 10 campuses for 18,000+ assets.",
  },
];

export const projects = [
  {
    id: 1,
    title: "The Hidden Eden",
    description:
      "An aesthetic 3D artwork of a serene world designed for exploration in VR",
    technologies: ["Blender", "Meta Quest 3", "Gravity Sketch"],
    githubUrl: "https://github.com/gracetyy/CCST9049_ProjectII_Group2D3",
    details:
      "Created as a CCST9049 group project, where I was responsible for creating the whole 3D world model. Players can view and interact with the 3D world in Gravity Sketch on Meta Quest 3, such as painting on the easel, grabbing the food, and diving into the underwater world.",
  },
  {
    id: 2,
    title: "Turn-based C++ Terminal Game",
    description:
      "A turn-based terminal adventure game where you guide a lost explorer to safety while escaping from hunters' attack",
    technologies: ["C++", "Bash", "GitHub", "GitHub Action"],
    videoUrl: "https://the-bithub.com/ENGG1340ProjectDemo",
    details:
      "Created for the group project of ENGG1340 Computer Programming II, featuring real-time keyboard controls, autosave, region-based computer enemy movement using Dijkstra’s algorithm, and dynamic map obstacles.",
  },
  {
    id: 3,
    title: "Xin Sheng 馨聲",
    description:
      "AI companion app that addresses elderly loneliness through emotional recognition, personalized interactions, and community-building features",
    technologies: ["GenAI", "Figma"],
    prototypeUrl: "https://the-bithub.com/XinShengFigma",
    pitchDeckUrl: "https://the-bithub.com/XinShengPitchDeck",
    details:
      "A real-time collaborative task management application with features like drag-and-drop kanban boards, team collaboration, file sharing, and progress tracking.",
  },
  {
    id: 4,
    title: "Text-based terminal game inspired by 2048",
    description:
      "Selected as one of the Top 10 Featured Projects among 107 groups",
    technologies: ["Python", "Curses Library"],
    videoUrl: "https://the-bithub.com/ENGG1330ProjectDemo",
    details:
      "Completed as a group project for ENGG1330 Computer Programming I, with the restriction that no third-party external libraries were allowed.",
  },
  {
    id: 5,
    title: "Baby Chat",
    description:
      "AI-powered Parenting App made for the GenAI Hackathon for Social Good 2023",
    technologies: ["OpenAI API", "Embeddings", "RAG", "Sketch", "GitHub"],
    videoUrl: "https://the-bithub.com/BabyChatDemoVid",
    details:
      "Engaged in collaborative work with a diverse team of participants, including master's and PhD students. Received invaluable mentorship provided by professors and judges to develop a GenAI-powered chatbot app for newborn parents.",
  },
];

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
