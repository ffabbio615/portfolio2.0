import './TopBar.scss';
import { useEffect, useRef, useState } from "react";

export default function TopBar() {

  const [now, setNow] = useState(new Date());
  
  useEffect(() => {
      const interval = setInterval(() => {
          setNow(new Date());
      }, 1000);

      return () => clearInterval(interval);
  }, []);
  
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
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
    

  const [location, setLocation] = useState("Localizando...");

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

                  setLocation(city || "RJ - Brasil");
              } catch (error) {
                  console.error(error);
                  setLocation("RJ - Brasil");
              }
          },
          (error) => {
              console.error(error);
              setLocation("RJ - Brasil");
          }
      );
  }, []);

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


  return (

    <div className="top-bar">

      <div className='left-side'>
        <div className='top-bar-logo-container'>
          <img className='top-bar-logo' src='/icon/logo/fm-gray-logo-icon.svg' alt='Logo do Portfólio'/>
          <h1>Fábio Marques</h1>
        </div>
      </div>

      <div className='middle' ref={settingsRef}>
        <button className='settings-main-button' onClick={()=> setSettingsMenu(true)}>
          <img className={`${settingsMenu ? "settings-icon settings-icon-activated" : "settings-icon" }`} title='Preferências' src='/icon/topbar/settings-icon.svg' alt='Botão para trocar tema claro e escuro'/>
        </button>

        <nav className={`${settingsMenu ? "settings-menu" : "settings-menu-invisible"}`} aria-label="Configurações do portfólio">
            <span className="settings-menu-label">Linguagem <span>❯</span></span>

            <ul className="settings-submenu language-submenu">
                <li>
                    <button className='settings-submenu-button' type="button" onClick={()=> setSettingsMenu(false)}>Português</button>
                </li>

                <li>
                    <button className='settings-submenu-button' type="button" onClick={()=> setSettingsMenu(false)}>English</button>
                </li>
            </ul>

            <span className="settings-menu-label">Tema <span>❯</span></span>

            <ul className="settings-submenu theme-submenu">
                <li>
                    <button className='settings-submenu-button' type="button" onClick={()=> setSettingsMenu(false)}>Claro</button>
                </li>

                <li>
                    <button className='settings-submenu-button' type="button" onClick={()=> setSettingsMenu(false)}>Escuro</button>
                </li>
            </ul>

            <button type="button" className="settings-about" onClick={()=> setSettingsMenu(false)}>Sobre o Portfólio</button>
        </nav>
      </div>

      <div className='right-side'>
        <time className="topbar-datetime" dateTime={now.toISOString()}>{formattedDate}</time>
        <span className='topbar-location'>{location}</span>
      </div>

    </div>
  );
}