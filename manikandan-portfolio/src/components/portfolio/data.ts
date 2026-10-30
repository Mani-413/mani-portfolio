import resumeAsset from "@/assets/Manikandan_Resume.pdf.asset.json";

export const LINKS = {
  linkedin: "https://linkedin.com/in/manikandan-p-a",
  github: "https://github.com/Mani-413",
  email: "pamanikandan29072005@gmail.com",
  resume: resumeAsset.url,
};

export const NAV = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Achievements", "Contact"];

export const SKILLS = [
  { title: "Programming", items: ["Java", "Python", "JavaScript"] },
  { title: "Web Technologies", items: ["HTML5", "CSS3"] },
  { title: "Database", items: ["MySQL", "MongoDB"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "VS Code"] },
  { title: "Core Concepts", items: ["Object-Oriented Programming", "Database Management Systems"] },
  { title: "Soft Skills", items: ["Adaptability", "Team Management", "Problem Solving", "Quick Learner"] },
];

export const PROJECTS = [
  {
    title: "Sign Language to Text Converter",
    desc: "Developed a real-time sign language recognition system that converts hand gestures into readable text using Computer Vision and Machine Learning.",
    features: ["Real-time hand gesture recognition", "Hand tracking using MediaPipe", "Gesture detection using OpenCV", "Text conversion and user-friendly interface"],
    tech: ["Python", "OpenCV", "Machine Learning", "MediaPipe", "NumPy"],
    github: "https://github.com/Mani-413/Sign2Text",
  },
  {
    title: "Smart Railway Track Obstacle Monitoring System",
    subtitle: "with Intent-Based Risk Classification",
    desc: "Designed a real-time railway track monitoring system using IoT sensors and Artificial Intelligence to detect obstacles and classify potential risks.",
    features: ["Obstacle detection", "Risk classification", "Real-time alerts", "Railway safety monitoring"],
    tech: ["ESP32", "Arduino IDE", "Ultrasonic Sensor", "IR Sensor"],
  },
  {
    title: "AI Traffic Management System",
    desc: "Developed an AI-based traffic monitoring solution for intelligent traffic monitoring and congestion control during a hackathon.",
    tech: ["AI", "Hackathon"],
  },
  {
    title: "RESQ AI Emergency Response System",
    desc: "Participated in developing an AI-powered emergency response system focused on rapid emergency detection and response coordination.",
    tech: ["AI", "Hackathon"],
  },
];

export const CERTS = [
  { name: "Java Programming Certification", issuer: "Certification" },
  { name: "Frontend Development", issuer: "Infosys Springboard" },
  { name: "Introduction to IoT", issuer: "NPTEL" },
  { name: "Machine Learning", issuer: "NPTEL" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS · Course Completion" },
];

export const HACKATHONS = [
  { place: "St. Joseph's College of Engineering", project: "AI Traffic Management System" },
  { place: "KonguNadu College", project: "Sign Language to Text Converter" },
  { place: "PSG College", project: "RESQ AI Emergency Response System" },
  { place: "Mailam Engineering College", project: "Sign Language to Text Converter" },
];

export const PAPERS = [
  { place: "Annapoorana Engineering College", project: "Fake Currency Detection" },
  { place: "Dhanalakshmi Srinivasan College", project: "Fake Currency Detection" },
];
