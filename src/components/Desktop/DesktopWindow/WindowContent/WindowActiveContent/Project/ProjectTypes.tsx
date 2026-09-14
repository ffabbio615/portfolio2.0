import "./ProjectMain.scss";
import type {ActiveContent} from "../../../DesktopWindow.types";

type ProjectType = {
    content: ActiveContent;
}

export default function ProjectTypes({content} : ProjectType){

    return(
        <>
        <p>{content}</p>
        </>
    );
}