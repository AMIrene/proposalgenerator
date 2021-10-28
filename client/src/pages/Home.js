import React from "react";
import '../styles/home.css';
import Login from './Login';
import Image from '../components/iambanner3.png';

import { Container } from "../components/Container";
import { imageListItemBarClasses } from "@mui/material";



const styles = {
  login: {
    display: 'flex',
 
    
      
  },

 
};
const Home = () => {
  return (
   
    <div
    class="bg_image"
    style={{
      backgroundImage: 'url('+Image+')',
      backgroundSize: "cover",
      height: "100vh",
      zIndex: '-5'
      
    }}
    >
      <div style={styles.login}>
        <Login />
        </div>
  </div>
      
     
  

    

 

    
  );
};

export default Home;
