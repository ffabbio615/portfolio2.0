import "./Projects.scss";
import { useTranslation } from "react-i18next";

import type { DetailedProject, Reference } from "./project.types";
import { useEffect, useRef } from "react";

type ProjectDetailsProps = {
    reference: Reference;
    setSelectedProject: (project: Reference | null) => void;
};

export default function ProjectDetails({ reference, setSelectedProject }: ProjectDetailsProps) {

    const { t } = useTranslation();
const topoRef = useRef<HTMLDivElement>(null);
useEffect(() => {
    // Rola o container até alinhar a ref com o topo da tela
    topoRef.current?.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });
  }, []);

    const projects: DetailedProject[] = [
        {
            image: "/image/project/pronto-abrigo-mockup.webp",
            name: "Pronto-Abrigo",
            reference: "pronto-abrigo",
            technologies: ["react", "typescript", "zustand", "sass", "node", "express", "postgresql", "supabase"],
            projectUrl: "https://pronto-abrigo-frontend-seven.vercel.app/",
            frontendGithubUrl: "https://github.com/ffabbio615/pronto-abrigo-frontend",
            backendGithubUrl: "https://github.com/ffabbio615/pronto-abrigo-backend"
        },
        {
            image: "/image/project/prime-mockup.webp",
            name: "Prime Language School",
            reference: "prime-language-school",
            technologies: ["react", "javascript", "sass", "vite"],
            projectUrl: "https://prime-language-school.vercel.app/",
            githubUrl: "https://github.com/ffabbio615/primeLanguageSchool"
        },
        {
            image: "/image/project/medicos-dentistas-mockup.webp",
            name: "Médicos & Dentistas",
            reference: "medicos-dentistas",
            technologies: ["react", "javascript", "node", "express"],
            frontendGithubUrl: "https://github.com/ffabbio615/medicos-dentistas",
            backendGithubUrl: "https://github.com/ffabbio615/medicos-dentistas-API"
        },
        {
            image: "/image/project/vocabary-mockup.webp",
            name: "Vocabary",
            reference: "vocabary",
            technologies: ["react", "typescript", "firebase"],
            projectUrl: "https://vocabary615--vocabary.us-central1.hosted.app/login"
        },
        {
            image: "/image/project/capiwaras-mockup.webp",
            name: "CapiWaras",
            reference: "capiwaras",
            technologies: ["react", "javascript", "sass", "vite"],
            projectUrl: "https://capiwaras.vercel.app/",
            githubUrl: "https://github.com/ffabbio615/capiwaras"
        },
        {
            image: "/image/project/portfolio2.0-mockup.webp",
            name: "Portfolio 2.0",
            reference: "portfolio-2",
            technologies: ["react", "typescript", "sass", "vite", "node", "express"],
            githubUrl: "https://github.com/ffabbio615/portfolio2.0"
        }
    ];

    const project = projects.find((project) => project.reference === reference);

    if (!project) return null;

    const projectTranslation = t(`projects.details.${project.reference}`, { returnObjects: true }) as {
        category: string;
        description: string;
        features: string[];
    };

    return (
        <div className="project-details-container" ref={topoRef} style={{ scrollMarginTop: '24px' }}>
            <button className="btn-project-details-back" type="button" onClick={() => setSelectedProject(null)}>{t("projects.details.back")}</button>

            <div className="project-details-title-container">
                <h4 className="project-details-title">{project.name}</h4>
                <span className="project-details-category">{projectTranslation.category}</span>
            </div>

            <p className="project-details-description">{projectTranslation.description}</p>

            <div className="project-details-content">
                <img className="project-details-image" src={project.image} alt={`Imagem do projeto ${project.name}`} />

                <div className="project-details-text-container">

                    <div className="project-details-functionalities-container">
                        <h5 className="project-details-functionalities-title">
                            <img className="project-details-functionalities-image" src="/icon/windowsContents/project/projectDetails/functionality-icon.svg" alt={t("projects.details.functionalityIconAlt")} />
                            {t("projects.details.functionalities")}
                        </h5>
                        <ul className="project-details-features">
                            {projectTranslation.features.map((feature) => (
                                <li className="project-details-feature" key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-details-technologies-container">
                        <h5 className="project-details-technologies-title">
                            <img className="project-details-technologies-image" src="/icon/windowsContents/project/projectDetails/technology-icon.svg" alt={t("projects.details.technologyIconAlt")} />
                            {t("projects.details.technologies")}
                        </h5>
                        <div className="project-details-technologies">
                            {project.technologies.map((technology) => (
                                <span className="technology" key={technology}>{technology}</span>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="project-details-links">
                <div className="project-details-links">
                    {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">{t("projects.details.openProject")}</a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">{t("projects.details.github")}</a>}
                    {project.frontendGithubUrl && <a href={project.frontendGithubUrl} target="_blank" rel="noopener noreferrer">{t("projects.details.githubFrontend")}</a>}
                    {project.backendGithubUrl && <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer">{t("projects.details.githubBackend")}</a>}
                </div>
                </div>

            </div>
        </div>
    );
}