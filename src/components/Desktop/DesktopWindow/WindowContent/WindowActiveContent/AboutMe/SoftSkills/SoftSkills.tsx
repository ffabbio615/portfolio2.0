import './SoftSkills.scss';

type SoftSkill = {
    title: string;
    description: string;
};

const softSkills: SoftSkill[] = [
    {
        title: "Comunicação",
        description: "Facilidade para comunicar ideias, explicar decisões, lidar com equipes e diversos perfis profissionais."
    },
    {
        title: "Resolução de Problemas",
        description: "Capacidade de analisar problemas, identificar possíveis causas e desenvolver soluções práticas."
    },
    {
        title: "Trabalho em Equipe",
        description: "Experiência colaborando com diferentes pessoas e contribuindo para objetivos compartilhados."
    },
    {
        title: "Organização",
        description: "Planejamento de tarefas, prioridades e etapas de desenvolvimento de forma estruturada."
    },
    {
        title: "Pensamento Analítico",
        description: "Análise de requisitos, interfaces e fluxos para identificar melhorias e tomar decisões fundamentadas."
    },
    {
        title: "Aprendizado Contínuo",
        description: "Interesse constante em aprender novas tecnologias, ferramentas e práticas de desenvolvimento."
    },
    {
        title: "Visão de Produto",
        description: "Capacidade de observar aplicações além do código, considerando usabilidade, experiência do usuário e objetivos do produto."
    },
    {
        title: "Adaptabilidade",
        description: "Facilidade para aprender novos processos, ferramentas e tecnologias conforme as necessidades de cada projeto."
    }
];

export default function SoftSkills() {
    return (
        <div className="soft-skills-main-container">
            <div className='soft-skills-container'>

                <div className="soft-skills-text-container">
                    <h4 className='soft-skills-title'>Soft Skills</h4>
                    <span className='soft-skills-subtitle'>Competências que fazem parte da forma como trabalho, colaboro e resolvo problemas:</span>
                </div>

                <div className="soft-skills-content">
                    {softSkills.map((skill) => (
                        <article className="soft-skill-card" key={skill.title}>
                            <h5 className='soft-skill-card-title'>{skill.title}</h5>
                            <p className='soft-skill-card-description'>{skill.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
}