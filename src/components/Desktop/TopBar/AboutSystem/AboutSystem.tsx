import "./AboutSystem.scss";

import { useTranslation } from "react-i18next";

type AboutSystemProps = {
    onClose: () => void;
};

export default function AboutSystem({ onClose }: AboutSystemProps) {
    const { t } = useTranslation();

    return (
        <div className="about-system-background">
            <div className="about-system-window-container">
                <div className="about-system-title-container">
                    <span className="about-system-title">{t("aboutSystem.title")}</span>

                    <button className="btn-close-about-system-container" onClick={onClose}>
                        <img src="/icon/window/red-circle-icon.svg" alt={t("aboutSystem.closeButtonAlt")} />
                    </button>
                </div>

                <div className="about-system-text-container">
                    <div className="about-system-card-container">
                        <img className="about-system-card-logo" src="/icon/logo/fm-white-logo-icon.svg" alt={t("aboutSystem.portfolioLogoAlt")} />

                        <div className="about-system-card">
                            <div className="about-system-info-row">
                                <span className="about-system-info-label">{t("aboutSystem.version")}</span>
                                <span className="about-system-info-value">2.0.0</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">{t("aboutSystem.technologies")}</span>
                                <span className="about-system-info-value">React • TypeScript • Vite • Sass</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">{t("aboutSystem.backend")}</span>
                                <span className="about-system-info-value">Node.js • Express</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">{t("aboutSystem.artificialIntelligence")}</span>
                                <span className="about-system-info-value">Google Gemini • Mistral AI</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">{t("aboutSystem.lastUpdate")}</span>
                                <span className="about-system-info-value">{t("aboutSystem.lastUpdateValue")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-system-copyright-card">
                        <span>Portfolio 2.0 | © 2026 Fábio Marques Melo - {t("aboutSystem.copyright")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}