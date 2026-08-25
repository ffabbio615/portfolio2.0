import './Dock.scss';
import type { DockProps, DockItem } from './Dock.types';

export default function Dock({onOpen}: DockProps) {
  
  const dockApps: DockItem[] = [
      {
          id: "aboutMe",
          name: "Sobre Mim",
          icon: "/icon/dock/about-me-icon.svg",
          type: "window",
      },
      {
          id: "curriculum",
          name: "Currículo",
          icon: "/icon/dock/curriculum-icon.svg",
          type: "window",
      },
      {
          id: "projects",
          name: "Projetos",
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
          name: "Contato",
          icon: "/icon/dock/contact-icon.svg",
          type: "window",
      },
  ];

  const handleOpenLink = (link: string) => {
    if(!link) return;

    window.open(`${link}`, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="dock" aria-label='Applications'>
      {dockApps.map(item => (
        <button key={item.id} 
        className={`dock-button ${(item.id === "projects" || item.id === "linkedin") ? "dock-button-separated" : ""}`}
        onClick={() => {
          if(item.type === "window") {
            onOpen?.(item);
          } else{
            handleOpenLink?.(item.link);
          }
        }}>

          <span className='dock-button-title'>{item.name}</span>
          <img className='dock-button-image' src={item.icon} alt={`Imagem do botão "${item.name}" do dock`} />

        </button>
      ))}
    </nav>
  );
} 