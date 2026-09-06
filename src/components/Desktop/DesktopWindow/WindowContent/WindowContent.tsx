import './WindowContent.scss';
import type { WindowMode, ActiveContent } from "../DesktopWindow.types";
import Curriculum from './WindowActiveContent/Curriculum/CurriculumMain';

type WindowContentProps = {
    windowMode: WindowMode;
    activeContent: ActiveContent;
};

export default function WindowContent({ windowMode, activeContent }: WindowContentProps){

    const handleActiveContent = (content: ActiveContent)=>{
        switch(content){
            case "w-curriculum":
                return <Curriculum />;
            
            default:
                return;
        }
    }

    return(
        <article className={`window-content window-content-${windowMode}`}>
            {handleActiveContent(activeContent)}
        </article>
    );
}