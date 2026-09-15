import './Curriculum.scss';

import { useTranslation } from "react-i18next";

type CurriculumCard = {
    icon: string;
    title: string;
    description: string;
    link: string;
    cardColor: string;
    textCardColor: string;
};

export default function Curriculum() {
    const { t } = useTranslation();

    const curriculumCards: CurriculumCard[] = [
        {
            icon: "/icon/windowsContents/curriculum/curriculum-in-icon.svg",
            title: t("curriculum.interactive.title"),
            description: t("curriculum.interactive.description"),
            link: "/archive/curriculum/Fabio_Marques_CV.pdf",
            cardColor: "card-color-one",
            textCardColor: "text-card-color-one"
        },
        {
            icon: "/icon/windowsContents/curriculum/curriculum-pt-icon.svg",
            title: t("curriculum.portuguese.title"),
            description: t("curriculum.portuguese.description"),
            link: "/archive/curriculum/Fabio_Marques_CV_EUR_PT.pdf",
            cardColor: "card-color-two",
            textCardColor: "text-card-color-two"
        },
        {
            icon: "/icon/windowsContents/curriculum/curriculum-en-icon.svg",
            title: t("curriculum.english.title"),
            description: t("curriculum.english.description"),
            link: "/archive/curriculum/Fabio_Marques_CV_EUR_EN.pdf",
            cardColor: "card-color-three",
            textCardColor: "text-card-color-three"
        }
    ];

    return (
        <div className="curriculum-main-container">
            <div className="curriculum-main-text-container">
                <h4 className="curriculum-title">{t("curriculum.title")}</h4>
                <span className="curriculum-description">{t("curriculum.description")}</span>
            </div>

            <div className="curriculum-cards-container">
                {curriculumCards.map((card) => (
                    <div className="curriculum-card" key={card.link}>
                        <div className="curriculum-card-icon-container">
                            <div className={`curriculum-card-icon ${card.cardColor}`}>
                                <img src={card.icon} alt="" />
                            </div>
                        </div>

                        <div className="curriculum-card-text-button-container">
                            <h5 className={`curriculum-card-title ${card.textCardColor}`}>{card.title}:</h5>
                            <p className="curriculum-card-description">{card.description}</p>
                            <a className={`curriculum-card-download-button ${card.cardColor}`} href={card.link} download>{t("curriculum.download")}</a>
                        </div>

                        <div className={`curriculum-card-background ${card.cardColor}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}