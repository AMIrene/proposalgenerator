import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_PROJECT } from '../gql/mutations';
import { QUERY_PROJECTS, QUERY_USER } from '../gql/queries';

import Auth from '../utils/auth';

import { Button } from '../components/Button';

const styles = {

  DisplayText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1C3144',
    margin: '20px',
    marginLeft: '20px',
  },  
  AddInputRef: {
    width: '50%',
    margin: '3px',
    padding: '10px',
    display: 'flex',
    marginLeft: '20px',
    marginTop: '20px',
       
  },

  Btn: {
    margin: '20px',
    display: 'flex',
     
  },

  

}

const AddProjectForm = () => {

    const [newProject, setNewProject] = useState('');
    const [projectRef, setProjectRef] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [projectClient, setProjectClient] = useState('');
    const [tags, setTags] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectId, setProjectId] = useState('');

    const { loading, data } = useQuery(QUERY_PROJECTS);
    const project = data?.project || [];

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
          // const { user } = cache.readQuery({ query: QUERY_USER });
          // cache.writeQuery({
          //   query: QUERY_USER,
          //   data: { user: { ...user, project: [...user.project, addProject] } },
          // });
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
          // setProjectRef('');
          // setProjectTitle('');
          // setProjectClient('');
          // setTags('');
          // setProjectDescription('');
          // setProjectId('');
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <div>
          <h4 style={styles.DisplayText}>Enter project details</h4>
    
          {Auth.loggedIn() ? (
            <form
              
              onSubmit={handleFormSubmit}
            >
              <div >
                <input style={styles.AddInputRef}
                  placeholder="Add project reference"
                  value={newProject.projectRef}
                 
                  onChange={(event) => setProjectRef(event.target.value)}
                        />
              <input style={styles.AddInputRef}
                  placeholder="Add project title"
                  value={newProject.projectTitle}
                  
                  onChange={(event) => setProjectTitle(event.target.value)}
                />
                <input style={styles.AddInputRef}
                  placeholder="Add project client"
                  value={newProject.projectClient}
                
                  onChange={(event) => setProjectClient(event.target.value)}
                 />
                 <input style={styles.AddInputRef}
                  placeholder="Add project description"
                  value={newProject.projectDescription}
               
                  onChange={(event) => setProjectDescription(event.target.value)}
                        />
                 <input style={styles.AddInputRef}
                  placeholder="Add project tags. Add multiple separated by comma."
                  value={newProject.tags}
            
                  onChange={(event) => setTags(event.target.value)}
                />
              </div>
              
    
              <div className="col-12 col-lg-3">
                <Button style={styles.Btn} type="submit">
                 Add project
                        </Button>
                     
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