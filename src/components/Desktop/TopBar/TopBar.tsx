import './TopBar.scss';
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutSystem from './AboutSystem/AboutSystem';
import AssistantRobot from './AssistantRobot/AssistantRobot';

export default function TopBar() {

    const { t, i18n } = useTranslation();

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = new Intl.DateTimeFormat(i18n.language === "en" ? "en-GB" : "pt-BR", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    })
        .format(now)
        .replaceAll(".", "")
        .replace(",", "")
        .replace(/(?<=^|\s)\p{L}/gu, char => char.toUpperCase());

    const [location, setLocation] = useState(t("topBar.locating"));

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&addressdetails=1`
                    );

                    const data = await response.json();

                    const city =
                        data.address.city ||
                        data.address.town ||
                        data.address.village ||
                        data.address.municipality;

                    setLocation(city || t("topBar.defaultLocation"));
                } catch (error) {
                    console.error(error);
                    setLocation(t("topBar.defaultLocation"));
                }
            },

            (error) => {
                console.error(error);
                setLocation(t("topBar.defaultLocation"));
            }
        );
    }, [t]);

    const [settingsMenu, setSettingsMenu] = useState<boolean>(false);
    const settingsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (
                settingsRef.current &&
                !settingsRef.current.contains(event.target as Node)
            ) {
                setSettingsMenu(false);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, []);

    const [isAboutSystemVisible, setIsAboutSystemVisible] = useState<boolean>(false);

    return (
        <div className="top-bar">
            <div className="left-side">
                <div className="top-bar-logo-container">
                    <img className="top-bar-logo" src="/icon/logo/fm-gray-logo-icon.svg" alt="Logo do Portfólio" />
                    <h1>Fábio Marques</h1>
                </div>
            </div>

            <div className="middle" ref={settingsRef}>
                <button className="settings-main-button" onClick={() => setSettingsMenu(true)}>
                    <img className={`${settingsMenu ? "settings-icon settings-icon-activated" : "settings-icon"}`} title={t("topBar.preferences")} src="/icon/topbar/settings-icon.svg" alt={t("topBar.settingsAlt")} />
                </button>

                <nav className={`${settingsMenu ? "settings-menu" : "settings-menu-invisible"}`} aria-label={t("topBar.settingsAriaLabel")}>
                    <span className="settings-menu-label">{t("topBar.language")} <span>❯</span></span>

                    <ul className="settings-submenu language-submenu">
                        <li>
                            <button className="settings-submenu-button" type="button" onClick={() => { setSettingsMenu(false); i18n.changeLanguage("pt"); }}>Português</button>
                        </li>

                        <li>
                            <button className="settings-submenu-button" type="button" onClick={() => { setSettingsMenu(false); i18n.changeLanguage("en"); }}>English</button>
                        </li>
                    </ul>

                    {/* <span className="settings-menu-label">Tema <span>❯</span></span>

                    <ul className="settings-submenu theme-submenu">
                        <li>
                            <button className='settings-submenu-button' type="button" onClick={()=> setSettingsMenu(false)}>Claro</button>
                        </li>

                        <li>
                            <button className='settings-submenu-button' type="button" onClick={()=> setSettingsMenu(false)}>Escuro</button>
                        </li>
                    </ul> */}

                    <button type="button" className="settings-about" onClick={() => { setSettingsMenu(false); setIsAboutSystemVisible(!isAboutSystemVisible); }}>{t("topBar.aboutPortfolio")}</button>
                </nav>

                {isAboutSystemVisible && <AboutSystem onClose={() => setIsAboutSystemVisible(false)} />}
            </div>

            <div className="right-side">
                <AssistantRobot />

                <time className="topbar-datetime" dateTime={now.toISOString()}>{formattedDate}</time>

                <span className="topbar-location">{location}</span>
            </div>
            
        </div>
    );
}