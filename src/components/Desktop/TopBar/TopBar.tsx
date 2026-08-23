import './TopBar.scss';

export default function TopBar() {
  return (
    <div className="top-bar">

      <div className='left-side'>
        <div className='top-bar-logo-container'>
          <img className='top-bar-logo' src='/icon/topbar/fm-gray-logo-icon.svg' alt='Logo do Portfólio'/>
          <h1>Fábio Marques - Portfólio</h1>
        </div>
      </div>

      <div className='middle'>
        <img className='light-dark-modes' src='/icon/topbar/contrast-icon.svg' alt='Botão para trocar tema claro e escuro'/>
      </div>

      <div className='right-side'>
        <p className='top-bar-language-button'>Change to English</p>
        <img className='top-bar-wifi-icon' src='/icon/topbar/wifi-icon.svg' alt='Ícone de Wifi'/>
        <p>Ter 04 Ago 01:20</p>
        <p><span>Rio de Janeiro</span></p>
      </div>

    </div>
  );
}