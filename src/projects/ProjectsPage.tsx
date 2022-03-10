import React, {useState, useEffect} from 'react'
import { projectAPI } from './projectAPI'
import ProjectList from './ProjectList';
import {Project} from './Project'

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")

  // Approach 1: using async await
  useEffect( () => {
    async function loadProjects() {
      setLoading(true)
      try {
        const data = await projectAPI.get(1)
        setError('')
        setProjects(data)
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  },[])


  // Approach 2: using promise then
//  useEffect(() => {
//    setLoading(true);
//    projectAPI
//      .get(1)
//      .then((data) => {
//        setError(null);
//        setLoading(false);
//        setProjects(data);
//      })
//      .catch((e) => {
//        setLoading(false);
//        setError(e.message);
//      });
//  }, []);


  
  const saveProject = (project: Project) => {
    let updateProjects = projects.map((p:Project) => {
      return p.id === project.id ? project : p
    }) 
    setProjects(updateProjects)
  }

  return (
     <>
        <h1>Projects</h1>

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse"></span>
                  {error}
                </p>
              </section>
            </div>
          </div>
        )} 

        <ProjectList projects={projects} onSave={saveProject} />

        {loading && (
          <div className="center-page">
              <span className="spinner primary"></span>
              <p>Loading...</p>
          </div>
        )}

    </>
  )
}

export default ProjectsPage