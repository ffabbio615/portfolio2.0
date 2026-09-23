import "./Projects.scss";

import type { DetailedProject, Reference } from "./project.types";

type ProjectDetailsProps = {
    reference: Reference;
    setSelectedProject: (project: Reference | null) => void;
};

export default function ProjectDetails({ reference, setSelectedProject }: ProjectDetailsProps) {

    const projects: DetailedProject[] = [
        {
            image: "/image/project/pronto-abrigo-mockup.webp",
            name: "ProntoAbrigo",
            reference: "pronto-abrigo",
            category: "Aplicação Full Stack",
            description: "Plataforma desenvolvida para facilitar a localização de abrigos e a realização de reservas.",
            features: [
                "Localização de abrigos próximos",
                "Geolocalização do usuário",
                "Cálculo de distância",
                "Reservas com expiração automática",
                "Autenticação de usuários",
                "Integração com mapas"
            ],
            technologies: ["react", "typescript", "zustand", "sass", "node", "express", "postgresql", "supabase"],
            projectUrl: "https://pronto-abrigo-frontend-seven.vercel.app/",
            frontendGithubUrl: "https://github.com/ffabbio615/pronto-abrigo-frontend",
            backendGithubUrl: "https://github.com/ffabbio615/pronto-abrigo-backend"
        },
        {
            image: "/image/project/prime-mockup.webp",
            name: "Prime Language School",
            reference: "prime-language-school",
            category: "Landing Page Profissional",
            description: "Website desenvolvido para a Prime Language School, com foco em apresentação dos serviços, experiência do usuário e identidade visual.",
            features: [
                "Interface responsiva",
                "Apresentação dos cursos",
                "FAQ",
                "Geração de certificados",
                "Identidade visual personalizada"
            ],
            technologies: ["react", "javascript", "sass", "vite"],
            projectUrl: "https://prime-language-school.vercel.app/",
            githubUrl: "https://github.com/ffabbio615/primeLanguageSchool"
        },
        {
            image: "/image/project/medicos-dentistas-mockup.webp",
            name: "Médicos & Dentistas",
            reference: "medicos-dentistas",
            category: "Aplicação Full Stack",
            description: "Aplicação Full Stack desenvolvida como projeto de curso para gerenciamento de profissionais voluntários das áreas de medicina e odontologia.",
            features: [
                "Cadastro de profissionais",
                "Listagem de médicos e dentistas",
                "Edição de dados cadastrados",
                "Exclusão de registros",
                "Integração entre Front-end e API",
                "Persistência de dados"
            ],
            technologies: ["react", "javascript", "node", "express"],
            frontendGithubUrl: "https://github.com/ffabbio615/medicos-dentistas",
            backendGithubUrl: "https://github.com/ffabbio615/medicos-dentistas-API"
        },
        {
            image: "/image/project/vocabary-mockup.webp",
            name: "Vocabary",
            reference: "vocabary",
            category: "Aplicação Web Fullstack",
            description: "Aplicação desenvolvida para auxiliar no aprendizado e na organização de vocabulário, permitindo ao usuário registrar e consultar palavras durante seus estudos.",
            features: [
                "Cadastro de palavras",
                "Organização de vocabulário",
                "Autenticação de usuários",
                "Armazenamento de dados",
                "Interface responsiva"
            ],
            technologies: ["react", "typescript", "firebase"],
            projectUrl: "https://vocabary615--vocabary.us-central1.hosted.app/login"
        },
        {
            image: "/image/project/capiwaras-mockup.webp",
            name: "Capiwaras",
            reference: "capiwaras",
            category: "Projeto de Estudo Mobile",
            description: "Projeto desenvolvido para estudo e prática de desenvolvimento Front-end, com interface criada especificamente para dispositivos móveis.",
            features: [
                "Interface Mobile First",
                "Layout responsivo",
                "Componentização da interface",
                "Navegação entre conteúdos"
            ],
            technologies: ["react", "javascript", "sass", "vite"],
            projectUrl: "https://capiwaras.vercel.app/",
            githubUrl: "https://github.com/ffabbio615/capiwaras"
        },
        {
            image: "/image/project/portfolio2.0-mockup.webp",
            name: "Portfolio 2.0",
            reference: "portfolio-2",
            category: "Aplicação Full Stack",
            description: "Portfólio profissional interativo desenvolvido com uma interface inspirada em sistemas operacionais desktop, reunindo informações profissionais, projetos, currículos e diferentes formas de contato.",
            features: [
                "Interface desktop interativa",
                "Sistema de janelas",
                "Pastas e Dock interativos",
                "Movimentação e gerenciamento de janelas",
                "Internacionalização da interface",
                "Assistente com Inteligência Artificial",
                "Formulário de contato integrado ao Back-end",
                "Design responsivo"
            ],
            technologies: ["react", "typescript", "sass", "vite", "node", "express"],
            projectUrl: "https://portfolio2-0-kappa-six.vercel.app/",
            githubUrl: "https://github.com/ffabbio615/portfolio2.0"
        }
    ];

    const project = projects.find((project) => project.reference === reference);

    if (!project) return null;

    return (
        <div className="project-details-container">
            <button className="project-details-back" type="button" onClick={() => setSelectedProject(null)}>Voltar aos projetos</button>

            <img className="project-details-image" src={project.image} alt={`Imagem do projeto ${project.name}`} />

            <div className="project-details-content">
                <h4 className="project-details-title">{project.name}</h4>

                <span className="project-details-category">Categoria: {project.category}</span>

                <p className="project-details-description">Descrição: {project.description}</p>

                <h5 className="project-details-functionalities">Principais funcionalidades:</h5>

                <ul className="project-details-features">
                    {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>

                <h5 className="project-details-technologies-title">Tecnologias</h5>

                <div className="project-details-technologies">
                    {project.technologies.map((technology) => (
                        <span className="technology" key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="project-details-links">
                    {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Abrir projeto</a>}

                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}

                    {project.frontendGithubUrl && <a href={project.frontendGithubUrl} target="_blank" rel="noopener noreferrer">GitHub Front-end</a>}

                    {project.backendGithubUrl && <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer">GitHub Back-end</a>}
                </div>
            </div>
        </div>
    );
}