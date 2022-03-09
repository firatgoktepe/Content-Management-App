import React from 'react'
import { Project } from './Project'
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({projects}: ProjectListProps) => {
    const items = projects.map( (project) => (
        <div key={project.id} className="cols-sm">
            <ProjectCard project={project} />
            <ProjectForm />
        </div>
    
    ));

  return <div className="row">{items}</div>
}

export default ProjectList