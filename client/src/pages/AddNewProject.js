import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROJECT } from '../gql/mutations';
import { QUERY_PROJECTS, QUERY_USER } from '../gql/queries';

import Auth from '../utils/auth';

import AddProjectForm from '../components/AddProjectForm';


const AddNewProject = () => {
    return (

        <AddProjectForm />
    );
};

export default AddNewProject