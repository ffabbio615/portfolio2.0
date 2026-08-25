import './WindowsDock.scss';
import type { ReactNode } from "react";

interface WindowsDockProps {
    children: ReactNode;
}

export default function WindowsDock({children}: WindowsDockProps){
    return(
        <nav className='windows-dock' aria-label='Minimized Windows'>
            {children}
        </nav>
    );
}