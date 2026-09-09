import './WindowSidebar.scss';
import type { ActiveContent, WindowMode } from "../DesktopWindow.types";
import { useEffect, useState } from 'react';

type WindowSidebarProps = {
    windowMode: WindowMode;
    windowSidebarContent: ActiveContent;
    activeContent: ActiveContent;
    setActiveContent: React.Dispatch<React.SetStateAction<ActiveContent>>;
};

interface SidebarSection {
  title: string;
  buttons: Record<string, ButtonConfig>; // Permite button1, button2, etc.
}

interface ButtonConfig {
  label: string;
  content: ActiveContent; // Usa o mesmo tipo importado
  link?: string;
}

export default function WindowSidebar({ windowMode, windowSidebarContent, activeContent, setActiveContent }: WindowSidebarProps){

    const [sidebarContent, setSidebarContent] = useState<SidebarSection[]>([]);

    useEffect(() => {

        const handleSidebarContent = () => {

            switch (windowSidebarContent) {
                
                //FOLDERS
                case "w-hobbies":
                
                break;

                case "w-music":
                
                break;

                case "w-movies":
                
                break;

                case "w-trips":

                break;

                //DOCK
                case "w-about-me":
                    setSidebarContent([
                        {
                            title: "Profissional",
                            buttons: {
                                button1: {
                                    label: "Sobre Mim",
                                    content: "w-about-me"
                                },
                                button2: {
                                    label: "Soft Skills",
                                    content: "w-soft-skills"
                                },
                                button3: {
                                    label: "Hard Skills",
                                    content: "w-hard-skills"
                                }
                            }
                        },
                    ]);
                break;
                
                case "w-curriculum":
                    setSidebarContent([
                        {
                            title: "Download",
                            buttons: {
                                button1: {
                                    label: "Salvar currículo",
                                    content: "w-curriculum"
                                }
                            }
                        },
                        {
                            title: "Currículos",
                            buttons: {
                                button1: {
                                    label: "Layout Personalizado",
                                    content: "w-interactive-curriculum"
                                },
                                button2: {
                                    label: "Simples Português",
                                    content: "w-simple-curriculum-pt"
                                },
                                button3: {
                                    label: "European English",
                                    content: "w-simple-curriculum-en"
                                },
                            }
                        }
                    ]);

                break;

                case "w-projects":
                
                break;

                case "w-contact":
                    setSidebarContent([
                        {
                            title: "Links Diretos",
                            buttons: {
                                button1: {
                                    label: "WhatsApp",
                                    content: "w-whatsapp",
                                    link: "https://api.whatsapp.com/send?phone=5521998008185",
                                },
                                button2: {
                                    label: "LinkedIn",
                                    content: "w-linkedin",
                                    link: "https://www.linkedin.com/in/fabiomarquesme/",
                                },
                                button3: {
                                    label: "Instagram",
                                    content: "w-instagram",
                                    link: "https://www.instagram.com/fabio_marques_me/",
                                }
                            }
                        },
                    ]);
                break;


                default:
                    setSidebarContent([]);
            }
        };

        handleSidebarContent();

    }, [windowSidebarContent]);

    return (
        <aside className={`window-sidebar window-sidebar-${windowMode}`}>
            {sidebarContent.map((section) => (
                <section className="sidebar-menu" key={section.title}>
                    <h3 className="sidebar-menu-title">{section.title}</h3>

                    {Object.entries(section.buttons).map(
                        ([buttonId, button]) => (
                            button.link ?
                                <a 
                                key={buttonId}
                                className={`sidebar-menu-button ${activeContent === button.content ? 'sidebar-menu-button-activated' : ''}`}
                                href={button.link} 
                                target="_blank"
                                >
                                    {button.label}
                                </a>
                            :
                                <button 
                                key={buttonId} 
                                className={`sidebar-menu-button ${activeContent === button.content ? 'sidebar-menu-button-activated' : ''}`} 
                                type="button" 
                                onClick={() => setActiveContent(button.content)}
                                >
                                    {button.label}
                                </button>
                        )
                    )}
                </section>
            ))}
        </aside>
    );
}