import './HardSkills.scss';

type HardSkillGroup = {
    title: string;
    skills: string[];
};

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
        title: "Back-end",
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT",
            "Autenticação",
            "CRUD"
        ]
    },
    {
        title: "Banco de Dados e Serviços",
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
        title: "Integração e JavaScript",
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
            "Componentização",
            "UX / UI"
        ]
    },
    {
        title: "Design Gráfico",
        skills: [
            "Photoshop",
            "Illustrator",
            "Indesign"
        ]
    },
    {
        title: "Ferramentas e Deploy",
        skills: [
            "Git",
            "GitHub",
            "npm",
            "Vercel",
            "Render"
        ]
    },
    {
        title: "Outros Conhecimentos",
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

export default function HardSkills() {
    return (
        <div className="hard-skills-main-container">
            <div className="hard-skills-container">

                <div className="hard-skills-text-container">
                    <h4 className='hard-skills-title'>Hard Skills</h4>
                    <p className='hard-skills-subtitle'>Tecnologias, ferramentas e conhecimentos que utilizo no desenvolvimento de aplicações:</p>
                </div>

                <div className="hard-skills-content">
                    {hardSkills.map((group) => (
                        <section className="hard-skills-group" key={group.title}>
                            <h5 className='hard-skill-card-title'>{group.title}</h5>

                            <div className="hard-skills-list">
                                {group.skills.map((skill) => (
                                    <span className="hard-skill" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </div>
    );
}