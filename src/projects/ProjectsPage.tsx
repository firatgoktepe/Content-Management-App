import React from 'react'
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

const ProjectsPage = () => {
  return (
     <>
        <h1>Projects</h1>
        <ProjectList projects={MOCK_PROJECTS}/>
    </>
  )
}

export default ProjectsPage