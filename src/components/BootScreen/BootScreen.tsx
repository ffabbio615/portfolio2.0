import "./BootScreen.scss";
import { useState } from "react";

type BootScreenProps = {
  progress: number;
};

export default function BootScreen({progress,}: BootScreenProps) {
  const [logoLoaded, setLogoLoaded] = useState(false);

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