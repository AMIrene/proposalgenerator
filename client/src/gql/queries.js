import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      email
      username
      projects {
        _id
        projectRef
        projectTitle
        projectManager
        createdAt
      }
    }
  }
`;

//get all projects

export const QUERY_PROJECTS = gql`
query getProjects {
  projects {
    _id
    projectRef
    projectTitle
    projectManager
    createdAt
  }
}
`;

// get a single project
export const QUERY_SINGLE_PROJECT = gql`
query getSingleProject($projectId: ID!) {
  project(projectId: $$projectId) {
    _id
    projectRef
    projectTitle
    projectManager
    createdAt
  }
}


`;
