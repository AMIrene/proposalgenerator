import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProjectList from '../components/ProjectList';

import { QUERY_PROJECTS } from '../gql/queries';

const Projects1 = () => {
    const { loading, error, data } = useQuery(QUERY_PROJECTS);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) return <p>Error :(</p>;
    
    return (
        
        <ProjectList
            projects={data.projects}
                          
        />
    );
};

export default Projects1;