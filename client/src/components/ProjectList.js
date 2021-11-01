import React from 'react';

import Card from '@mui/material/Card';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../gql/mutations';
import { QUERY_PROJECTS } from '../gql/queries';
// import DeleteButton from './DeleteButton';

const styles = {
    Heading1: {
        fontSize: '16px',
        fontWeight: 'bold',
        padding: '10px',
    
    },
    Heading2: {
        fontSize: '14px',
        fontWeight: 'bold',
        paddingLeft: '10px',
        paddingBottom: '8px',
        paddingTop: '10px',

    },
    TagStyle: {
        fontSize: '12px',
        
        paddingLeft: '10px',
        paddingBottom: '8px',
        paddingTop: '10px',
        backgroundColor: '#1C3144',
        color: "#FDEEED",

    },

    IconStyle: {
        fontSize: '30px',
        paddingLeft: '10px',
        paddingTop: '5px',
        color: "#1C3144",
        float: 'right',
        display: 'block',

    },

    Subheading: {
        fontSize: '13px',
        paddingLeft: '5px',
        paddingBottom: '10px',
        paddingTop: '5px'

    },

    TextContent: {
        fontSize: '13px',
        paddingLeft: '10px',
        paddingBottom: '10px',
        lineHeight: '20px',
       

    },
    CardStyle: {
        margin: '20px',
        padding: '10px',
        
    }
}



const ProjectList = ({
    projects,
    
}) => {
    return (
        <div>
            {projects.map((project) =>
              
                <Card style={styles.CardStyle} key={project._id}>

                <HighlightOffIcon  style={styles.IconStyle} />   
                <div style={styles.Heading1}>{project.projectTitle}</div>
                <div style={styles.Heading2}>Project Reference: {project.projectRef}</div>   
                <div><span style={styles.Heading2}>Project Client:</span><span style={styles.Subheading}> {project.projectClient}</span></div>  
             
                <div style={styles.Heading2}>Project Description:</div>
                <div style={styles.TextContent}>{project.projectDescription}</div>
                <div style={styles.TagStyle}>{project.tags}</div>   
                        
                  
                           
                </Card>
              )}
        </div>
    );
};

export default ProjectList