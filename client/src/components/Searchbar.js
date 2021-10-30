import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_PROJECTS } from '../gql/queries';
import Auth from '../utils/auth';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


// const sea = () => {
//     const [searchedProjects, setSearchedProjects] = useState([]);
//     const [searchInput, setSearchInput] = useQuery(SEARCH_PROJECTS);
    
// };

// const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!searchInput) {
//         return false;
//     }

//     try {
//         const response = await 
//     }
// }


export default class Searchfield extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const newVal = event.target.value;
    this.setState({value: event.target.value});
    props.searchChanged()
  }


  return (
      
    <Box>
           
      <TextField id="outlined-basic" label="Outlined" value={this.state.value} variant="outlined" onChange={this.handleChange} />
      
      <Button variant="contained">Search</Button>

    </Box>
  );
}
