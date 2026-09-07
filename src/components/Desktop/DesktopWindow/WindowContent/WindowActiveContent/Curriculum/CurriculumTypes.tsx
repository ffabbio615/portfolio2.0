import './Curriculum.scss';
import type { ActiveContent } from '../../../DesktopWindow.types';

type CurriculumTypes = {
    content: ActiveContent;
}

export default function CurriculumTypes({content} : CurriculumTypes){

    return(
        <>
            { 
                content === "w-interactive-curriculum" ?
                    <iframe className="curriculum-pdf" src="/archive/curriculum/Fabio_Marques_CV.pdf#toolbar=0&navpanes=0" title="Currículo Interativo de Fábio Marques Melo" />
                
                : content === "w-simple-curriculum-pt" ?
                    <iframe className="curriculum-pdf" src="/archive/curriculum/Fabio_Marques_CV_EUR_PT.pdf#toolbar=0&navpanes=0" title="Currículo Simples de Fábio Marques Melo" />
                
                :
                    <iframe className="curriculum-pdf" src="/archive/curriculum/Fabio_Marques_CV_EUR_EN.pdf#toolbar=0&navpanes=0" title="European Curriculum of Fábio Marques Melo" />
            }
        </>
    );
}