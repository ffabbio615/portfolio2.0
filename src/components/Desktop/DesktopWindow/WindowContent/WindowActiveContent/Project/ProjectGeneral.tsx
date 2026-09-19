import "./Projects.scss";
import type { GeneralProject, Reference } from "./project.types";



type ProjectGeneralProps = {
   setSelectedProject: (project: Reference | null) => void;
}

export default function ProjectGeneral({setSelectedProject} : ProjectGeneralProps){

    const projects: GeneralProject[] = [
        {
            image: "/image/project/pronto-abrigo-mockup.webp",
            name: "ProntoAbrigo",
            reference: "pronto-abrigo",
            technologies: ["react", "typescript", "node", "express", "postgresql", "supabase"]
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
            technologies: ["react", "javascript", "node", "express"]
        },
        {
            image: "/image/project/vocabary-mockup.webp",
            name: "Vocabary",
            reference: "vocabary",
            technologies: ["react", "typescript", "firebase"]
        },
        {
            image: "/image/project/capiwaras-mockup.webp",
            name: "Capiwaras",
            reference: "capiwaras",
            technologies: ["react", "javascript", "sass", "vite"]
        },
        {
            image: "/image/project/portfolio2.0-mockup.webp",
            name: "Portfolio 2.0",
            reference: "portfolio-2",
            technologies: ["react", "typescript", "sass", "vite", "node", "express"]
        }
    ];

    return(
        <div>
            {
                projects.map((project) => (
                    <div className="project-card" key={project.reference}>
                        <img className="project-card-image" src={project.image} alt={`Imagem do projeto ${project.name}`} />

                        <div className="project-card-content">
                            <h5 className="project-card-title">{project.name}</h5>

                            <div className="project-card-technologies">
                                {project.technologies.map((technology) => (
                                    // <img className="project-card-technology-icon" key={technology} src={technologyIcons[technology]} alt={technology} />
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>

                            <button className="project-card-button" type="button" onClick={() => setSelectedProject(project.reference)}>
                                Saiba mais
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}