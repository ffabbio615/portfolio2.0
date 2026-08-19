import './WindowContent.scss';
import type { WindowMode } from "../DesktopWindow.types";

type WindowContentProps = {
    windowMode: WindowMode;
};

export default function WindowContent({ windowMode }: WindowContentProps){
    return(
        <article className={`window-content window-content-${windowMode}`}>

        </article>
    );
}