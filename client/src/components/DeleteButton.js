import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../gql/mutations';
import { QUERY_PROJECTS } from '../gql/queries';
import Auth from '../utils/auth';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



const styles = {
   
    IconStyle: {
        fontSize: '30px',
        paddingLeft: '10px',
        paddingTop: '5px',
        color: "#1C3144",
        float: 'right',
        display: 'block',

    },
}

const DeleteButton = ({ projectId }) => {
    const [deleteProject, {error }] = useMutation(DELETE_PROJECT);

    const handleProjectDelete = async (event) => {
        event.preventDefault();
        try {
            const deletedProject = await deleteProject({
                variables: {
                   
                    projectId: projectId
                }
            });
            
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <HighlightOffIcon onClick={handleProjectDelete}/>
    )
   
}
  
  
  export default DeleteButton;