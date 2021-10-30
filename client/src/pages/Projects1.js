import React, {useState} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ProjectList from '../components/ProjectList';
import { SEARCH_PROJECTS } from '../gql/queries';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Projects1 = () => {

    const [searchText, setSearchText] = useState("Design");
    
    console.log(searchText);
    
    const { loading, error, data } = useQuery(SEARCH_PROJECTS, {
        variables: { searchkey: searchText }
    });

    console.log(data);

    if (loading) {
        return <p>Loading....</p>;
    }
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <Box>
                <TextField id="outlined-basic" value={searchText} variant="outlined" onChange={(event) => {setSearchText(event.target.value)}} />
                <Button variant="contained" onClick={()=>{}}>Search</Button>
            </Box>
            <ProjectList
                projects={data.searchProject}
            />
        </div>
    );
};

export default Projects1;

//
// Parent page Projects
//     - filtertext variable
//     - searchbar - renders always
//         - has a callback to set the text
//     - projectsList - has a default render mode
//         - also takes in filtertext


