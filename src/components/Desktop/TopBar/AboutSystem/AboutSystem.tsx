import "./AboutSystem.scss";

type AboutSystemProps = {
    onClose: () => void;
};


export default function AboutSystem({onClose} : AboutSystemProps){
    
    return(
        <div className="about-system-background">
            <div className="about-system-window-container">
                <div className="about-system-title-container">
                    <span className="about-system-title">Sobre Portfolio 2.0</span>

                    <button className="btn-close-about-system-container">
                        <img src="/icon/window/red-circle-icon.svg" alt="Botão do ícone de fechar janela" onClick={onClose} />
                    </button>
                </div>

                <div className="about-system-text-container">

                    <div className="about-system-card-container">
                        <img className='about-system-card-logo' src={"/icon/logo/fm-white-logo-icon.svg"} alt='Logo do Portfólio' />

                        <div className="about-system-card">
                            <div className="about-system-info-row">
                                <span className="about-system-info-label">Versão:</span>
                                <span className="about-system-info-value">2.0.0</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">Tecnologias:</span>
                                <span className="about-system-info-value">React • TypeScript • Vite • Sass</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">Back-end:</span>
                                <span className="about-system-info-value">Node.js • Express</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">Inteligência Artificial:</span>
                                <span className="about-system-info-value">Google Gemini • Mistral AI</span>
                            </div>

                            <div className="about-system-info-row">
                                <span className="about-system-info-label">Última atualização:</span>
                                <span className="about-system-info-value">Setembro de 2026</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-system-copyright-card">
                        <span>Portfolio 2.0 | © 2026 Fábio Marques Melo - Todos os direitos reservados.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}