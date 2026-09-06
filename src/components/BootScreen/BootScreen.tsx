import "./BootScreen.scss";
import { useEffect, useState } from "react";
import axios from "axios";

type BootScreenProps = {
  progress: number;
};

export default function BootScreen({progress,}: BootScreenProps) {

  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    async function wakeUpApi() {
        try {
          await axios.get(
            "https://portfolio2-0-api.onrender.com/wakeup",
          )

        } catch (error) {
            console.error("Erro ao acordar a API:", error);
        }
    }

    wakeUpApi();
  }, []);

  return (
    <div className={`boot-screen ${progress === 100 && "boot-screen-loaded"}`}>
      <div className="progress-bar-container">
        <img className={`boot-logo-icon ${logoLoaded ? "boot-logo-icon-loaded" : ""}`} src={"/icon/logo/fm-white-logo-icon.svg"} alt="Logo de carregamento do Porfólio" onLoad={() => setLogoLoaded(true)} />
        <div className="boot-progress">
          <div className="boot-progress-bar" style={{ width: `${progress}%`, }} />
        </div>
      </div>
    </div>
  );
}