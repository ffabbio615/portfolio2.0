import './WindowSidebar.scss';
import type { WindowMode } from "../DesktopWindow.types";

type WindowSidebarProps = {
    windowMode: WindowMode;
};

export default function WindowSidebar({ windowMode }: WindowSidebarProps){

    return(
        <aside className={`window-sidebar window-sidebar-${windowMode}`}>

            <section className='sidebar-menu'>
                <h3 className='sidebar-menu-title'>Profissional</h3>
                <button className='sidebar-menu-button'>Soft Skills</button>
                <button className='sidebar-menu-button'>Hard Skills</button>
            </section>

            <section className='sidebar-menu'>
                <h3 className='sidebar-menu-title'>Pessoal</h3>
                <button className='sidebar-menu-button'>Músicas</button>
                <button className='sidebar-menu-button'>Séries</button>
                <button className='sidebar-menu-button'>Filmes</button>
                <button className='sidebar-menu-button'>Atividades</button>
            </section>
            
        </aside>
    );
}