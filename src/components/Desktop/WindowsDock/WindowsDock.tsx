import './WindowsDock.scss';

export default function WindowsDock({children}){
    return(
        <nav className='windows-dock' aria-label='Minimized Windows'>
            {children}
        </nav>
    );
}