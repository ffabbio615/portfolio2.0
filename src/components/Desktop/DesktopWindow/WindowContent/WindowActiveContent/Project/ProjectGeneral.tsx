import "./Projects.scss";
import type { GeneralProject, Reference } from "./project.types";



type ProjectGeneralProps = {
   setSelectedProject: (project: Reference | null) => void;
}

export default function ProjectGeneral({setSelectedProject} : ProjectGeneralProps){

    const projects: GeneralProject[] = [
        {
            image: "/image/project/pronto-abrigo-mockup.webp",
            name: "Pronto-Abrigo",
            reference: "pronto-abrigo",
            technologies: ["react", "typescript", "sass", "vite", "node", "express", "postgresql", "supabase"]
        },
        {
            image: "/image/project/prime-mockup.webp",
            name: "Prime Language School",
            reference: "prime-language-school",
            technologies: ["react", "javascript", "sass", "vite"]
        },
        {
            image: "/image/project/medicos-dentistas-mockup.webp",
            name: "Médicos & Dentistas",
            reference: "medicos-dentistas",
            technologies: ["react", "javascript", "vite", "node", "express"]
        },
        {
            image: "/image/project/vocabary-mockup.webp",
            name: "Vocabary",
            reference: "vocabary",
            technologies: ["react", "typescript", "firebase", "nextjs"]
        },
        {
            image: "/image/project/capiwaras-mockup.webp",
            name: "CapiWaras",
            reference: "capiwaras",
            technologies: ["react", "javascript", "sass", "vite"]
        },
        {
            image: "/image/project/portfolio2.0-mockup.webp",
            name: "Portfólio 2.0",
            reference: "portfolio-2",
            technologies: ["react", "typescript", "sass", "vite", "node", "express", "supabase"]
        }
    ];

    const technologyIcons: Record<string, string> = {
        css: "/icon/windowsContents/project/css-icon.png",
        express: "/icon/windowsContents/project/express-icon.svg",
        firebase: "/icon/windowsContents/project/firebase-icon.svg",
        javascript: "/icon/windowsContents/project/javascript-icon.svg",
        node: "/icon/windowsContents/project/node-icon.svg",
        postgresql: "/icon/windowsContents/project/postgresql-icon.svg",
        react: "/icon/windowsContents/project/react-icon.svg",
        sass: "/icon/windowsContents/project/sass-icon.svg",
        supabase: "/icon/windowsContents/project/supabase-icon.svg",
        typescript: "/icon/windowsContents/project/typescript-icon.svg",
        nextjs: "/icon/windowsContents/project/nextjs-icon.svg",
        vite: "/icon/windowsContents/project/vite-icon.png"
    };

    return(
        <div className="project-general-container">
            <h4 className="project-general-title">Alguns de Meus Projetos</h4>
            {
                projects.map((project) => (
                    <div className="project-card" key={project.reference}>
                        <div className="project-card-image-container">
                            <img className="project-card-image" src={project.image} alt={`Imagem do projeto ${project.name}`} />
                        </div>

                        <div className="project-card-content">
                            <h5 className="project-card-title">{project.name}</h5>

                            <div className="project-card-technologies">
                                {project.technologies.map((technology) => (
                                    <img className="project-card-technology-icon" key={technology} src={technologyIcons[technology]} alt={technology} title={technology} />
                                ))}
                            </div>

                            <button className="btn-project-card" type="button" onClick={() => setSelectedProject(project.reference)}>
                                Saiba mais
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}