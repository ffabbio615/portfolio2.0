import './SoftSkills.scss';

import { useTranslation } from "react-i18next";

type SoftSkill = {
    title: string;
    description: string;
};

export default function SoftSkills() {
    const { t } = useTranslation();

    const softSkills: SoftSkill[] = [
        {
            title: t("softSkills.communication.title"),
            description: t("softSkills.communication.description")
        },
        {
            title: t("softSkills.problemSolving.title"),
            description: t("softSkills.problemSolving.description")
        },
        {
            title: t("softSkills.teamwork.title"),
            description: t("softSkills.teamwork.description")
        },
        {
            title: t("softSkills.organization.title"),
            description: t("softSkills.organization.description")
        },
        {
            title: t("softSkills.analyticalThinking.title"),
            description: t("softSkills.analyticalThinking.description")
        },
        {
            title: t("softSkills.continuousLearning.title"),
            description: t("softSkills.continuousLearning.description")
        },
        {
            title: t("softSkills.productVision.title"),
            description: t("softSkills.productVision.description")
        },
        {
            title: t("softSkills.adaptability.title"),
            description: t("softSkills.adaptability.description")
        }
    ];

    return (
        <div className="soft-skills-main-container">
            <div className="soft-skills-container">
                <div className="soft-skills-text-container">
                    <h4 className="soft-skills-title">{t("softSkills.title")}</h4>
                    <span className="soft-skills-subtitle">{t("softSkills.subtitle")}</span>
                </div>

                <div className="soft-skills-content">
                    {softSkills.map((skill) => (
                        <article className="soft-skill-card" key={skill.title}>
                            <h5 className="soft-skill-card-title">{skill.title}</h5>
                            <p className="soft-skill-card-description">{skill.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}