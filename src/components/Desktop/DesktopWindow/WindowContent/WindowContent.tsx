import './WindowContent.scss';
import type { WindowMode, ActiveContent } from "../DesktopWindow.types";
import Curriculum from './WindowActiveContent/Curriculum/CurriculumMain';
import CurriculumTypes from './WindowActiveContent/Curriculum/CurriculumTypes';

type WindowContentProps = {
    windowMode: WindowMode;
    activeContent: ActiveContent;
};

export default function WindowContent({ windowMode, activeContent }: WindowContentProps){

    const handleActiveContent = (content: ActiveContent)=>{
        switch(content){
            case "w-curriculum":
                return <Curriculum />;

            case "w-interactive-curriculum":
                return <CurriculumTypes content={content} />;

            case "w-simple-curriculum-pt":
                return <CurriculumTypes content={content} />;;
            
            case "w-simple-curriculum-en":
                return <CurriculumTypes content={content} />;;
            
            default:
                return;
        }
    }

    return(
        <>{
            (windowMode === "windowed" || windowMode === "maximized") ?
                <article className={`window-content window-content-${windowMode}`}> {handleActiveContent(activeContent)} </article>
            : 
                <article className={`window-content window-content-${windowMode}`}></article>
        }</>
    );
}