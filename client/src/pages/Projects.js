import React from "react";

import { Container } from "../components/Container";
import { H2 } from '../components/Text';
// import * as collections from '../components/collections';
import Projectcard from '../components/Projectcard';






const Projects = () => {
  return (
   
    <Container>
      <H2>Project List</H2>
        <Projectcard/>     
     
    </Container>

   
  );
};

export default Projects;
