import './Dock.scss';

import { useTranslation } from "react-i18next";

import type { DockProps, DockItem } from './Dock.types';

export default function Dock({ onOpen }: DockProps) {
    const { t } = useTranslation();

    const dockApps: DockItem[] = [
        {
            id: "about-me",
            name: t("dock.aboutMe"),
            icon: "/icon/dock/about-me-icon.svg",
            type: "window",
        },
        {
            id: "curriculum",
            name: t("dock.curriculum"),
            icon: "/icon/dock/curriculum-icon.svg",
            type: "window",
        },
        {
            id: "projects",
            name: t("dock.projects"),
            icon: "/icon/dock/projects-icon.svg",
            type: "window",
        },
        {
            id: "github",
            name: "GitHub",
            icon: "/icon/dock/github-icon.svg",
            type: "link",
            link: "https://github.com/ffabbio615",
        },
        {
            id: "linkedin",
            name: "LinkedIn",
            icon: "/icon/dock/linkedin-icon.svg",
            type: "link",
            link: "https://www.linkedin.com/in/fabiomarquesme/",
        },
        {
            id: "contact",
            name: t("dock.contact"),
            icon: "/icon/dock/contact-icon.svg",
            type: "window",
        },
    ];

    const handleOpenLink = (link?: string) => {
        if (!link) return;

        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <nav className="dock" aria-label={t("dock.ariaLabel")}>
            {dockApps.map(item => (
                <button key={item.id} className={`dock-button ${(item.id === "projects" || item.id === "linkedin") ? "dock-button-separated" : ""}`} onClick={() => {
                    if (item.type === "window") {
                        onOpen?.(item);
                    } else {
                        handleOpenLink(item.link);
                    }
                }}>
                    <span className="dock-button-title">{item.name}</span>
                    <img className="dock-button-image" src={item.icon} alt={t("dock.buttonAlt", { name: item.name })} />
                </button>
            ))}
        </nav>
    );
}