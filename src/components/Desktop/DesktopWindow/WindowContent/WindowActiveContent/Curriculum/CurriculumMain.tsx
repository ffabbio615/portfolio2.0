import './Curriculum.scss';

type CurriculumCard = {
    icon: string;
    title: string;
    description: string;
    link: string;
    cardColor: string;
    textCardColor: string;
};

const curriculumCards: CurriculumCard[] = [
    {
        icon: "/icon/windowsContents/curriculum/curriculum-in-icon.svg",
        title: "Currículo Interativo",
        description: "Currículo com layout personalizado e links clicáveis para contatos e projetos.",
        link: "/archive/curriculum/Fabio_Marques_CV.pdf",
        cardColor: "card-color-one",
        textCardColor: "text-card-color-one"
    },
    {
        icon: "/icon/windowsContents/curriculum/curriculum-pt-icon.svg",
        title: "Currículo Simples Português",
        description: "Resumo com experiência, formação, competências técnicas e principais projetos.",
        link: "/archive/curriculum/Fabio_Marques_CV_EUR_PT.pdf",
        cardColor: "card-color-two",
        textCardColor: "text-card-color-two"
    },
    {
        icon: "/icon/windowsContents/curriculum/curriculum-en-icon.svg",
        title: "European English Curriculum",
        description: "Resume in English featuring work experience, education, technical skills and key projects.",
        link: "/archive/curriculum/Fabio_Marques_CV_EUR_EN.pdf",
        cardColor: "card-color-three",
        textCardColor: "text-card-color-three"
    }
];

export default function Curriculum() {
    return (
        <div className="curriculum-main-container">
            <div className='curriculum-main-text-container'>
                <h4 className='curriculum-title'>Download de Currículo</h4>
                <span className='curriculum-description'>Escolha um modelo abaixo ou visualize direto na janela com as opções ao lado</span>
            </div>

            <div className="curriculum-cards-container">
                {curriculumCards.map((card) => (
                    <div className="curriculum-card" key={card.title}>

                        <div className='curriculum-card-icon-container'>
                            <div className={`curriculum-card-icon ${card.cardColor}`}>
                                <img src={card.icon} alt="" />
                            </div>
                        </div>
                        
                        <div className='curriculum-card-text-button-container'>
                            <h5 className={`curriculum-card-title ${card.textCardColor}`}>{card.title}:</h5>
                            <p className='curriculum-card-description'>{card.description}</p>
                            <a className={`curriculum-card-download-button ${card.cardColor}`} href={card.link} download>Baixar</a>
                        </div>
                        
                        <div className={`curriculum-card-background ${card.cardColor}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}