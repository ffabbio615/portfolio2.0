import './WindowSidebar.scss';
import type { ActiveContent, WindowMode } from "../DesktopWindow.types";
import { useEffect, useState } from 'react';

type WindowSidebarProps = {
    windowMode: WindowMode;
    windowSidebarContent: ActiveContent;
    setActiveContent: React.Dispatch<React.SetStateAction<ActiveContent>>;
};

interface SidebarSection {
  title: string;
  buttons: Record<string, ButtonConfig>; // Permite button1, button2, etc.
}

interface ButtonConfig {
  label: string;
  activeContent: ActiveContent; // Usa o mesmo tipo importado
}

export default function WindowSidebar({ windowMode, windowSidebarContent, setActiveContent }: WindowSidebarProps){

    const [sidebarContent, setSidebarContent] = useState<SidebarSection[]>([]);

    useEffect(() => {

        const handleSidebarContent = () => {

            switch (windowSidebarContent) {

                case "w-curriculum":
                    setSidebarContent([
                        {
                            title: "Download",
                            buttons: {
                                button1: {
                                    label: "Salvar currículos",
                                    activeContent: "w-curriculum"
                                }
                            }
                        },
                        {
                            title: "Currículos",
                            buttons: {
                                button1: {
                                    label: "Simples",
                                    activeContent: "w-simple-curriculum"
                                },
                                button2: {
                                    label: "Interativo",
                                    activeContent: "w-interactive-curriculum"
                                }
                            }
                        }
                    ]);

                break;

                case "w-aboutMe":
                    setSidebarContent([
                        {
                            title: "Profissional",
                            buttons: {
                                button1: {
                                    label: "Soft Skills",
                                    activeContent: "w-soft-skills"
                                },
                                button2: {
                                    label: "Hard Skills",
                                    activeContent: "w-hard-skills"
                                }
                            }
                        },
                        {
                            title: "Pessoal",
                            buttons: {
                                button1: {
                                    label: "Músicas",
                                    activeContent: "w-music"
                                },
                                button2: {
                                    label: "Filmes",
                                    activeContent: "w-movies"
                                },
                                button3: {
                                    label: "Atividades",
                                    activeContent: "w-hobbies"
                                }
                            }
                        }
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
                            <button key={buttonId} className="sidebar-menu-button" type="button" onClick={() => setActiveContent(button.activeContent)}>
                                {button.label}
                            </button>
                        )
                    )}
                </section>
            ))}
        </aside>
    );
}