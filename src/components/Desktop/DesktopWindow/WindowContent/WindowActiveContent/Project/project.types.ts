export type Reference = 
    "pronto-abrigo" |
    "prime-language-school" |
    "medicos-dentistas" |
    "vocabary" |
    "capiwaras" |
    "portfolio-2";

export type GeneralProject = {
    image: string;
    name: string;
    reference: Reference;
    technologies: string[];
};

export type DetailedProject = {
    image: string;
    name: string;
    reference: Reference;
    category: string;
    description: string;
    features: string[];
    technologies: string[];
    projectUrl?: string;
    githubUrl?: string;
    frontendGithubUrl?: string;
    backendGithubUrl?: string;
};