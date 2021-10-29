import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../gql/mutations';

import { Container } from '../components/Container';
import { H2 } from '../components/Text';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles/home.css';



const styles = {
  cardPosition: {
    display: 'flex',
 
    justifyContent: 'center',
    paddingLeft: '50px',
    
    marginTop: '100px',
   

    

  },

  cardStyle: {
    padding: '10px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    
    

  },

  labelStyle: {
    paddingRight: '5px',
    display: 'flex',
   alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },

  buttonStyle: {
    padding: '4px',
    display: 'flex',
    alignContents: 'center',
    justifyContent: 'center',
    fontSize: '1.5em',
    

  },
}


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      
      <div className="authLoginCard" style={styles.cardPosition} >
      <Card sx={{ width: 400 }}>
      
      <CardContent >
       <H2 style={styles.cardStyle}>Signup</H2>
            <form onSubmit={handleFormSubmit}>
            <div style={styles.cardStyle} className="flex-row space-between my-2">
          <label style={styles.labelStyle} htmlFor="username">Name:</label>
          <input
            placeholder="First"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
       
          <div style={styles.cardStyle} className="flex-row space-between my-2">
            <label style={styles.labelStyle}  htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div style={styles.cardStyle} className="flex-row space-between my-2">
            <label style={styles.labelStyle} htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div  style={styles.buttonStyle} className="flex-row flex-end">
            <Button type="submit">Submit</Button>
          </div>
          </form>
        </CardContent>
        <div style={styles.cardStyle}>
        <Breadcrumb location={'/login'} text={` Let's Login`} />
        </div>
        </Card>
        </div>
    </>
  );
}

export default Signup;
