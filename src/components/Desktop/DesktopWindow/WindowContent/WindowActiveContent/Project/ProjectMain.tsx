import { useState } from "react";
import "./Projects.scss";
import type { Reference } from "./project.types";
import ProjectDetails from "./ProjectDetails";
import ProjectGeneral from "./ProjectGeneral";

export default function ProjectMain(){

    const [selectedProject, setSelectedProject] = useState<Reference | null>(null);

    return(
        <>
            {!selectedProject ?
            <ProjectGeneral setSelectedProject={setSelectedProject} />
            :
            <ProjectDetails reference={selectedProject} setSelectedProject={setSelectedProject}/>
            }
        </>
    );
}