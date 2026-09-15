import { useState } from 'react';
import { useTranslation } from "react-i18next";

import './HardSkills.scss';

type HardSkillGroup = {
    title: string;
    skills: string[];
};

export default function HardSkills() {
    const { t } = useTranslation();

    const [selectedSkillGroup, setSelectedSkillGroup] = useState<number | null>(null);

    const hardSkills: HardSkillGroup[] = [
        {
            title: "Front-end",
            skills: [
                "React",
                "Next.js",
                "JavaScript ES6+",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Sass / SCSS",
                "Tailwind CSS",
                "React Router",
                "Zustand",
                "Redux",
                "Context API",
                "React Hooks",
                "Vite"
            ]
        },
        {
            title: t("hardSkills.backend"),
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT",
                t("hardSkills.authentication"),
                "CRUD"
            ]
        },
        {
            title: t("hardSkills.databaseServices"),
            skills: [
                "PostgreSQL",
                "Supabase",
                "Firebase Auth",
                "Firestore",
                "Firebase Storage",
                "MySQL"
            ]
        },
        {
            title: t("hardSkills.integrationJavaScript"),
            skills: [
                "Axios",
                "Fetch API",
                "Async / Await",
                "Promises",
                "DOM",
                "Local Storage",
                "Session Storage"
            ]
        },
        {
            title: "UI / UX",
            skills: [
                "Figma",
                "Responsive Design",
                "Mobile First",
                "Flexbox",
                "CSS Grid",
                t("hardSkills.componentization"),
                "UX / UI"
            ]
        },
        {
            title: t("hardSkills.graphicDesign"),
            skills: [
                "Photoshop",
                "Illustrator",
                "Indesign"
            ]
        },
        {
            title: t("hardSkills.toolsDeploy"),
            skills: [
                "GitHub",
                "Vercel",
                "Render",
                "Supabase",
                "Firebase App Hosting",
                "LocalWeb"
            ]
        },
        {
            title: t("hardSkills.otherKnowledge"),
            skills: [
                "Clean Code",
                "Frontend Architecture",
                "Web Performance",
                "SEO",
                "Scrum",
                "Kanban"
            ]
        }
    ];

    return (
        <div className="hard-skills-main-container">
            <div className="hard-skills-container">
                <div className="hard-skills-text-container">
                    <h4 className="hard-skills-title">{t("hardSkills.title")}</h4>
                    <p className="hard-skills-subtitle">{t("hardSkills.subtitle")}</p>
                </div>

                <div className="hard-skills-content">
                    {hardSkills.map((group, index) => (
                        <div className="hard-skills-group" key={group.title}>
                            <h5 className={selectedSkillGroup === index ? " hard-skill-card-title-selected hard-skill-card-title" : "hard-skill-card-title"} onClick={selectedSkillGroup !== index ? () => setSelectedSkillGroup(index) : () => setSelectedSkillGroup(null)}>
                                {group.title} <span>❯</span>
                            </h5>

                            <div className={selectedSkillGroup === index ? " hard-skills-list-selected hard-skills-list" : "hard-skills-list"}>
                                {group.skills.map((skill) => (
                                    <span className="hard-skill" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}