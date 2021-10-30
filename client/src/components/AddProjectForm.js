import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../gql/mutations';
import { QUERY_PROJECTS, QUERY_USER } from '../gql/queries';

import Auth from '../utils/auth';

const AddProjectForm = () => {

    const [newProject, setNewProject] = useState('');

    const [addProject, { error }] = useMutation(ADD_PROJECT, {
        update(cache, { data: { addProject } }) {
          try {
            const { project } = cache.readQuery({ query: QUERY_PROJECTS });
    
            cache.writeQuery({
              query: QUERY_PROJECTS,
              data: { project: [addProject, ...project] },
            });
          } catch (e) {
            console.error(e);
          }
    
          // update user object's cache
          const { user } = cache.readQuery({ query: QUERY_USER });
          cache.writeQuery({
            query: QUERY_USER,
            data: { user: { ...user, project: [...user.project, addProject] } },
          });
        },
    });
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const { data } = await addProject({
                variables: {
                    projectId,
                    projectRef,
                    projectTitle,
                    tags,
                    projectClient,
                    projectDescription,
                    projectManager: Auth.getProfile().data.username,
                },
            });
    
            setNewProject('');
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <div>
          <h4>Add a project.</h4>
    
          {Auth.loggedIn() ? (
            <form
              
              onSubmit={handleFormSubmit}
            >
              <div className="col-12 col-lg-9">
                <input
                  placeholder="Add project reference"
                  value={Project.projectRef}
                 
                  onChange={(event) => setNewProject(event.target.value)}
                        />
                <input
                  placeholder="Add project title"
                  value={Project.projectTitle}
                  
                  onChange={(event) => setNewProject(event.target.value)}
                />
                <input
                  placeholder="Add project client"
                  value={projectClient}
                
                  onChange={(event) => setNewProject(event.target.value)}
                 />
                 <input
                  placeholder="Add project description"
                  value={projectDescription}
               
                  onChange={(event) => setNewProject(event.target.value)}
                        />
                 <input
                  placeholder="Add project tags. Add multiple separated by comma."
                  value={tags}
            
                  onChange={(event) => setNewProject(event.target.value)}
                />
              </div>
              
    
              <div className="col-12 col-lg-3">
                <button type="submit">
                 Add project
                </button>
              </div>
              {error && (
                <div >
                  {error.message}
                </div>
              )}
            </form>
          ) : (
            <p>
              You need to be logged in to add a project. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>
      );

       

};
  
export default AddProjectForm;