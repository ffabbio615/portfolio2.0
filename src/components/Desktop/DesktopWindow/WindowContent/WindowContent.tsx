import './WindowContent.scss';
import type { WindowMode, ActiveContent } from "../DesktopWindow.types";
import Curriculum from './WindowActiveContent/Curriculum/CurriculumMain';
import CurriculumTypes from './WindowActiveContent/Curriculum/CurriculumTypes';
import ContactMain from './WindowActiveContent/Contact/ContactMain';
import AboutMe from './WindowActiveContent/AboutMe/AboutMe';
import SoftSkills from './WindowActiveContent/AboutMe/SoftSkills/SoftSkills';
import HardSkills from './WindowActiveContent/AboutMe/HardSkills/HardSkills';
import EmptyFolder from './WindowActiveContent/EmptyFolder/EmptyFolder';
import ProjectMain from './WindowActiveContent/Project/ProjectMain';
import ProjectTypes from './WindowActiveContent/Project/ProjectTypes';

type WindowContentProps = {
    windowMode: WindowMode;
    activeContent: ActiveContent;
};

export default function WindowContent({ windowMode, activeContent }: WindowContentProps){

    const handleActiveContent = (content: ActiveContent)=>{
        switch(content){

            //ITENS DO DOCK
            case "w-about-me":
                return <AboutMe />;

            case "w-soft-skills":
                return <SoftSkills />

            case "w-hard-skills":
                return <HardSkills />

            case "w-curriculum":
                return <Curriculum />;

            case "w-interactive-curriculum":
                return <CurriculumTypes content={content} />;

            case "w-simple-curriculum-pt":
                return <CurriculumTypes content={content} />;
            
            case "w-simple-curriculum-en":
                return <CurriculumTypes content={content} />;

            case "w-projects":
                return <ProjectMain />;

            case "w-pronto-abrigo":
                return <ProjectTypes content={content} />

            case "w-vocabary":
                return <ProjectTypes content={content} />

            case "w-prime-language":
                return <ProjectTypes content={content} />

            case "w-capiwaras":
                return <ProjectTypes content={content} />

            case "w-medicos-dentistas":
                return <ProjectTypes content={content} />

            case "w-portfolio2":
                return <ProjectTypes content={content} />

            case "w-contact":
                return <ContactMain />;
            
            default:
                return <EmptyFolder />;
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