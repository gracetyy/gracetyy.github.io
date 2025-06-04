"use client";
"use strict";
exports.__esModule = true;
exports.GridBackground = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
function GridBackground() {
    var _a = react_1.useState(false), isDark = _a[0], setIsDark = _a[1];
    var _b = react_1.useState([]), dotPositions = _b[0], setDotPositions = _b[1];
    react_1.useEffect(function () {
        // Detect dark mode using matchMedia
        var match = window.matchMedia("(prefers-color-scheme: dark)");
        var update = function () {
            return setIsDark(document.documentElement.classList.contains("dark") || match.matches);
        };
        update();
        match.addEventListener("change", update);
        // Also listen for class changes (theme toggle)
        var observer = new MutationObserver(update);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });
        // Generate random dot positions only on client
        setDotPositions(Array.from({ length: 20 }).map(function () { return ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 1.5
        }); }));
        return function () {
            match.removeEventListener("change", update);
            observer.disconnect();
        };
    }, []);
    return (React.createElement("div", { className: "absolute inset-0 w-full h-full overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 opacity-30 grid-bg block dark:hidden", style: {
                backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),\nlinear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            } }),
        React.createElement("div", { className: "absolute inset-0 opacity-40 grid-bg hidden dark:block", style: {
                backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),\nlinear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
            } }),
        React.createElement("div", { className: "absolute inset-0 block dark:hidden", style: {
                background: "linear-gradient(\n            to bottom,\n            rgba(255,255,255,0) 0%,\n            rgba(255,255,255,0.3) 60%,\n            rgba(255,255,255,0.8) 85%,\n            rgba(255,255,255,1) 100%\n          )"
            } }),
        React.createElement("div", { className: "absolute inset-0 hidden dark:block", style: {
                background: "linear-gradient(\n            to bottom,\n            rgba(107, 123, 172, 0.5) 0%,\n            rgba(10, 23, 97, 0.3) 60%,\n            rgba(2, 8, 23, 0.85) 100%\n          )"
            } }),
        React.createElement(framer_motion_1.motion.div, { className: "absolute inset-0", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 2 } }, dotPositions.map(function (dot, i) { return (React.createElement(framer_motion_1.motion.div, { key: i, className: "absolute w-1 h-1 bg-primary/20 rounded-full", style: {
                left: dot.left + "%",
                top: dot.top + "%"
            }, animate: {
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
            }, transition: {
                duration: dot.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: dot.delay
            } })); }))));
}
exports.GridBackground = GridBackground;
