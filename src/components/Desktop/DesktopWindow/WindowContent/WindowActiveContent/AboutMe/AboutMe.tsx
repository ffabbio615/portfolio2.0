import './AboutMe.scss';

import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className="about-me-main-container">
            <div className="about-me-content">
                <h4 className="about-me-title">{t("aboutMe.title")}</h4>

                <p className="about-me-paragraph">
                    {t("aboutMe.paragraph1")}
                </p>

                <p className="about-me-paragraph">
                    {t("aboutMe.paragraph2")}
                </p>

                <p className="about-me-paragraph">
                    {t("aboutMe.paragraph3")}
                </p>

                <p className="about-me-paragraph">
                    {t("aboutMe.paragraph4")}
                </p>

                <p className="about-me-paragraph">
                    {t("aboutMe.paragraph5")}
                </p>
            </div>
        </div>
    );
}