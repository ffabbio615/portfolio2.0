import './WindowContent.scss';
import type { WindowMode, ActiveContent } from "../DesktopWindow.types";
import Curriculum from './WindowActiveContent/Curriculum/CurriculumMain';
import CurriculumTypes from './WindowActiveContent/Curriculum/CurriculumTypes';
import ContactMain from './WindowActiveContent/Contact/ContactMain';

type WindowContentProps = {
    windowMode: WindowMode;
    activeContent: ActiveContent;
};

export default function WindowContent({ windowMode, activeContent }: WindowContentProps){

    const handleActiveContent = (content: ActiveContent)=>{
        switch(content){
            case "w-about-me":
                return;

            case "w-curriculum":
                return <Curriculum />;

            case "w-interactive-curriculum":
                return <CurriculumTypes content={content} />;

            case "w-simple-curriculum-pt":
                return <CurriculumTypes content={content} />;
            
            case "w-simple-curriculum-en":
                return <CurriculumTypes content={content} />;

            case "w-projects":
                return;

            case "w-contact":
                return <ContactMain />;
            
            default:
                return;
        }
    }

    return(
        <>{
            (windowMode === "windowed" || windowMode === "maximized" || windowMode === "closed" || windowMode === "closed-maximized") ?
                <article className={`window-content window-content-${windowMode}`}> {handleActiveContent(activeContent)} </article>
            : 
                <article className={`window-content window-content-${windowMode}`}></article>
        }</>
    );
}