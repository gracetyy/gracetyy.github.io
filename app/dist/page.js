"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var badge_1 = require("@/components/ui/badge");
var lucide_react_1 = require("lucide-react");
var theme_provider_1 = require("@/components/theme-provider");
var theme_toggle_1 = require("@/components/theme-toggle");
var floating_nav_1 = require("@/components/floating-nav");
var timeline_1 = require("@/components/timeline");
var project_card_1 = require("@/components/project-card");
var contact_card_1 = require("@/components/contact-card");
var grid_background_1 = require("@/components/grid-background");
var use_mobile_1 = require("@/components/ui/use-mobile");
function Portfolio() {
    var _this = this;
    var _a = react_1.useState(false), showBackToTop = _a[0], setShowBackToTop = _a[1];
    var scrollY = framer_motion_1.useScroll().scrollY;
    var heroRef = react_1.useRef(null);
    var isMobile = use_mobile_1.useIsMobile();
    react_1.useEffect(function () {
        var handleScroll = function () {
            setShowBackToTop(window.scrollY > window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    var scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    var skillsets = {
        Programming: ["Python", "C++", "Java", "R", "Bash"],
        "DevOps & Tools": ["Linux CLI", "Git", "GitHub"],
        "Web Development": ["HTML", "CSS", "JavaScript", "TypeScript"],
        "Cloud & Automation": [
            "Google Cloud Platform",
            "Microsoft Office 365",
            "Power Automate",
        ],
        "Design & Media": ["Blender", "CapCut", "Canva", "Figma"]
    };
    var experiences = [
        {
            type: "internship",
            title: "IT Wagering Solutions Summer Intern",
            company: "Hong Kong Jockey Club",
            period: "Jul - Aug 2025 (Upcoming)",
            description: "Expected to assist with wagering system maintenance and optimization to support transaction processing improvements under senior developer guidance."
        },
        {
            type: "internship",
            title: "Business Development Intern (Part-time)",
            company: "Versitech Limited / Technology Transfer Office (TTO), HKU",
            period: "Sep 2024 - Jun 2025",
            description: "Analyzed invention manuscripts and assessed commercial viability to identify global business opportunities, and built a comprehensive documentation website for the Versitech e-Form processor GUI application using the Docsify framework."
        },
        {
            type: "internship",
            title: "Student Research Assistant Intern",
            company: "Department of Data and Systems Engineering (DASE), HKU",
            period: "Dec 2024 - Jan 2025",
            description: "Collected 7.5+ hours of motion capture data from 15 participants to train AI models for camera-free gesture recognition and demonstrated the system to 100+ industry partners."
        },
        {
            type: "internship",
            title: "Student Teaching Assistant for ENGG1330 Computer Programming I",
            company: "School of Computing & Data Science, HKU",
            period: "Sep - Nov 2024",
            description: "Selected as one of 38 tutors from 535 students to host weekly Python tutorial sessions for first-year engineering students. Provided comprehensive guidance on fundamental programming concepts including syntax, control statements, functions, and data types through teaching materials and active participation in course forums."
        },
        {
            type: "internship",
            title: "IT Software Technician Intern",
            company: "Yew Chung Education Foundation",
            period: "Jun - Aug 2024",
            description: "Coordinated the deployment of the Asset Management and Tracking System (AMTS) across 10 campuses for 18,000+ assets."
        },
    ];
    var projects = [
        {
            id: 1,
            title: "The Hidden Eden",
            description: "An immersive 3D artwork designed for exploration in virtual reality",
            technologies: ["Blender", "Meta Quest 3", "Gravity Sketch"],
            prototypeUrl: "",
            githubUrl: "https://github.com/gracetyy/CCST9049_ProjectII_Group2D3",
            details: "Created as a CCST9049 group project, where I was responsible for creating the whole 3D world model. Players can view and interact with the 3D world in Gravity Sketch on Meta Quest 3, such as painting on the easel, grabbing the food, and diving into the underwater world."
        },
        {
            id: 2,
            title: "Turn-based C++ Terminal Game",
            description: "A turn-based terminal adventure game where you guide a lost explorer to safety while escaping from hunters' attack",
            technologies: ["C++", "Bash", "GitHub", "GitHub Action"],
            videoUrl: "https://the-bithub.com/ENGG1340ProjectDemo",
            details: "Created for the group project of ENGG1340 Computer Programming II, featuring real-time keyboard controls, autosave, region-based computer enemy movement using Dijkstra’s algorithm, and dynamic map obstacles."
        },
        {
            id: 3,
            title: "Xin Sheng 馨聲",
            description: "AI companion app that addresses elderly loneliness through emotional recognition, personalized interactions, and community-building features",
            technologies: ["GenAI", "Figma"],
            prototypeUrl: "https://the-bithub.com/XinShengFigma",
            pitchDeckUrl: "https://the-bithub.com/XinShengPitchDeck",
            details: "A real-time collaborative task management application with features like drag-and-drop kanban boards, team collaboration, file sharing, and progress tracking."
        },
        {
            id: 4,
            title: "Text-based terminal game inspired by 2048",
            description: "Selected as one of the Top 10 Featured Projects among 107 groups",
            technologies: ["Python", "Curses Library"],
            videoUrl: "https://the-bithub.com/ENGG1330ProjectDemo",
            details: "Completed as a group project for ENGG1330 Computer Programming I, with the restriction that no third-party external libraries were allowed."
        },
        {
            id: 5,
            title: "Baby Chat",
            description: "AI-powered Parenting App made for the GenAI Hackathon for Social Good 2023",
            technologies: ["OpenAI API", "Embeddings", "RAG", "Sketch", "GitHub"],
            videoUrl: "https://the-bithub.com/BabyChatDemoVid",
            details: "Engaged in collaborative work with a diverse team of participants, including master's and PhD students. Received invaluable mentorship provided by professors and judges to develop a GenAI-powered chatbot app for newborn parents."
        },
    ];
    return (React.createElement(theme_provider_1.ThemeProvider, null,
        React.createElement("div", { className: "min-h-screen bg-background text-foreground" },
            React.createElement(theme_toggle_1.ThemeToggle, null),
            React.createElement(floating_nav_1.FloatingNav, { mobileOffset: isMobile }),
            React.createElement(framer_motion_1.motion.section, { ref: heroRef, id: "home", className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden" },
                React.createElement(grid_background_1.GridBackground, null),
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center z-10 px-4" },
                    React.createElement(framer_motion_1.motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold mb-8 relative leading-tight md:leading-[1.1] lg:leading-[1.08] px-2 md:px-8", style: {
                            fontFamily: "Inter, sans-serif",
                            wordBreak: "keep-all",
                            whiteSpace: "pre-line"
                        } },
                        "Hey\uD83D\uDC4B, I'm",
                        " ",
                        React.createElement("span", { className: "relative inline-block" },
                            React.createElement("span", { className: "text-primary" }, "Grace Yuen"))),
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.3 }, className: "flex flex-col sm:flex-row gap-4 items-center justify-center mb-6" },
                        React.createElement(button_1.Button, { size: "lg", className: "hero-btn min-w-[160px]", onClick: function () { var _a; return (_a = document
                                .getElementById("contact")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" }); } }, "Contact Me"),
                        React.createElement(button_1.Button, { variant: "outline", size: "lg", className: "hero-btn min-w-[160px] flex items-center justify-center group border-2 border-primary dark:border-primary dark:bg-gray-900/95", onClick: function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var arrow;
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!isMobile) return [3 /*break*/, 3];
                                            arrow = document.getElementById("about-arrow");
                                            if (!arrow) return [3 /*break*/, 2];
                                            arrow.classList.add("-rotate-45");
                                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
                                        case 1:
                                            _c.sent();
                                            arrow.classList.remove("-rotate-45");
                                            _c.label = 2;
                                        case 2:
                                            (_a = document
                                                .getElementById("about")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                                            return [3 /*break*/, 4];
                                        case 3:
                                            (_b = document
                                                .getElementById("about")) === null || _b === void 0 ? void 0 : _b.scrollIntoView({ behavior: "smooth" });
                                            _c.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); } },
                            React.createElement("span", null, "About Me"),
                            React.createElement("span", { className: "ml-2 flex items-center" },
                                React.createElement(lucide_react_1.ArrowRight, { id: "about-arrow", className: "w-4 h-4 transition-transform duration-200 group-hover:-rotate-45" })))),
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.6 } },
                        React.createElement("div", { className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-4 py-2 rounded-full inline-flex items-center pointer-events-none" },
                            React.createElement("div", { className: "w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" }),
                            "Available for new projects")))),
            React.createElement("section", { id: "about", className: "py-20 px-6 md:px-8 max-w-4xl mx-auto" },
                React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl md:text-5xl font-bold text-center mb-16" }, "About Me"),
                React.createElement("div", { className: "grid md:grid-cols-2 gap-8" },
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 } },
                        React.createElement(card_1.Card, { className: "backdrop-blur-sm bg-background/95 border-border shadow-md dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700" },
                            React.createElement(card_1.CardContent, { className: "p-8" },
                                React.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Hello there!"),
                                React.createElement("p", { className: "text-muted-foreground leading-relaxed mb-4" }, "I'm a passionate Year 2 Computer Science student at the University of Hong Kong. I love turning complex problems into simple, beautiful, and intuitive solutions."),
                                React.createElement("p", { className: "text-muted-foreground leading-relaxed" }, "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or making 3D models and games.")))),
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.2 } },
                        React.createElement(card_1.Card, { className: "backdrop-blur-sm bg-background/95 border-border shadow-md dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700" },
                            React.createElement(card_1.CardContent, { className: "p-8" },
                                React.createElement("h3", { className: "text-xl font-semibold mb-6" }, "Skillsets"),
                                React.createElement("div", { className: "space-y-6" }, Object.entries(skillsets).map(function (_a) {
                                    var category = _a[0], technologies = _a[1];
                                    return (React.createElement("div", { key: category },
                                        React.createElement("div", { className: "flex items-center gap-2 mb-3" },
                                            category === "Programming" && (React.createElement(lucide_react_1.CodeXml, { className: "w-4 h-4" })),
                                            category === "DevOps & Tools" && (React.createElement(lucide_react_1.Settings, { className: "w-4 h-4" })),
                                            category === "Web Development" && (React.createElement(lucide_react_1.Globe, { className: "w-4 h-4" })),
                                            category === "Cloud & Automation" && (React.createElement(lucide_react_1.Server, { className: "w-4 h-4" })),
                                            category === "Design & Media" && (React.createElement(lucide_react_1.Palette, { className: "w-4 h-4" })),
                                            React.createElement("h4", { className: "font-medium" }, category)),
                                        React.createElement("div", { className: "flex flex-wrap gap-2" }, technologies.map(function (tech) { return (React.createElement(badge_1.Badge, { key: tech, variant: "secondary", className: "text-xs" }, tech)); }))));
                                }))))))),
            React.createElement("section", { id: "experience", className: "py-20 px-6 md:px-8 max-w-6xl mx-auto" },
                React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl md:text-5xl font-bold text-center mb-16" }, "Experience"),
                React.createElement(timeline_1.Timeline, { experiences: experiences })),
            React.createElement("section", { id: "projects", className: "py-20 px-6 md:px-8 max-w-4xl mx-auto" },
                React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl md:text-5xl font-bold text-center mb-16" }, "Featured Projects"),
                React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-stretch" }, projects.map(function (project, index) { return (React.createElement("div", { key: project.id, className: "flex h-full" },
                    React.createElement(project_card_1.ProjectCard, { project: project, index: index }))); }))),
            React.createElement("section", { id: "contact", className: "py-20 px-6 md:px-8 max-w-6xl mx-auto" },
                React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl md:text-5xl font-bold text-center mb-16" }, "Let's Get in Touch"),
                React.createElement(contact_card_1.ContactCard, null)),
            React.createElement(framer_motion_1.AnimatePresence, null, showBackToTop && (React.createElement(framer_motion_1.motion.button, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, whileHover: {
                    scale: 1.15,
                    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.18)"
                }, whileTap: { scale: 0.92, rotate: -12 }, onClick: scrollToTop, className: "fixed z-[60] p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110\n                " + (isMobile ? "bottom-24 right-4" : "bottom-20 right-8"), style: isMobile ? { marginBottom: "0", marginRight: "0" } : {}, "aria-label": "Back to Top" },
                React.createElement(lucide_react_1.ChevronUp, { className: "w-5 h-5" })))))));
}
exports["default"] = Portfolio;
