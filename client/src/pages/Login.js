import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../gql/mutations';
import Auth from '../utils/auth';

import { H2 } from '../components/Text';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles/home.css';


const styles = {
  cardPosition: {
    display: 'flex',
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

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <H2 style={styles.cardStyle}>Login</H2>
        <CardContent >
        <form onSubmit={handleFormSubmit}>
          <div style={styles.cardStyle} className="flex-row space-between my-2">
            <label style={styles.labelStyle} htmlFor="email">Email address:</label>
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
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <div style={styles.buttonStyle} className="flex-row flex-end">
            <Button  type="submit">Submit</Button>
          </div>
        </form>
        </CardContent>
        <div style={styles.cardStyle}>
        <Breadcrumb location={'/signup'}  text={`Don't have an Account. Signup today.`} />
        </div>
        </Card>
        </div>
        
    </>
  );
}

export default Login;
