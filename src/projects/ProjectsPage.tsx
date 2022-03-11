import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { AppState } from '../state'
import { loadProjects } from './state/projectActions';
import ProjectList from './ProjectList';


const ProjectsPage = () => {
  
  const loading = useSelector( (appState: AppState) => appState.projectState.loading)
  const projects = useSelector( (appState: AppState) => appState.projectState.projects)
  const error = useSelector( (appState: AppState) => appState.projectState.error)
  const currentPage = useSelector( (appState: AppState) => appState.projectState.page)
  const dispatch = useDispatch()


  const handleMoreClick = () => {
      dispatch(loadProjects(currentPage + 1))
  }


      // // Approach 1: using async await
  // useEffect( () => {
  //   async function loadProjects() {
  //     setLoading(true)
  //     try {
  //       const data = await projectAPI.get(1)
  //       setError('')
  //       setProjects(data)
  //     } catch (e) {
  //       if (e instanceof Error) {
  //         setError(e.message)
  //       }
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   loadProjects()
  // },[])

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

  // Prefered using async await
  useEffect( () => {
     dispatch(loadProjects(1))
  },[dispatch])

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

        <ProjectList projects={projects} />

        { !loading && !error && (
          <div className="row">
            <div className="col-sm-12">
                <div className="button-group fluid">
                  <button className="button default" onClick={handleMoreClick}>More...
                  </button>
                </div>
            </div>
          </div>
        )}

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