import './TopBar.scss';
import { useEffect, useState } from "react";

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
      .replace(/\b\w/g, char => char.toUpperCase());
    

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

                  setLocation(city || "Localização desconhecida");
              } catch (error) {
                  console.error(error);
                  setLocation("Localização indisponível");
              }
          },
          (error) => {
              console.error(error);
              setLocation("Localização indisponível");
          }
      );
  }, []);


  return (

    <div className="top-bar">

      <div className='left-side'>
        <div className='top-bar-logo-container'>
          <img className='top-bar-logo' src='/icon/logo/fm-gray-logo-icon.svg' alt='Logo do Portfólio'/>
          <h1>Fábio Marques - Portfólio</h1>
        </div>
      </div>

      <div className='middle'>
        <img className='settings-icon' src='/icon/topbar/settings-icon.svg' alt='Botão para trocar tema claro e escuro'/>
      </div>

      <div className='right-side'>
        {/* <p className='top-bar-language-button'>Change to English</p> */}
        {/* <p>Ter 04 Ago 01:20</p> */}
        <time className="topbar-datetime" dateTime={now.toISOString()}>{formattedDate}</time>
        <span className='topbar-location'>{location}</span>
      </div>

    </div>
  );
}