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
        tags
        projectClient
        projectDescription
        projectManager{_id}
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
    tags
    projectClient
    projectDescription
    projectManager{_id}
    createdAt
  }
}
`;

// get a single project
export const QUERY_SINGLE_PROJECT = gql`
query getSingleProject($projectId: ID!) {
  project(projectId: $projectId) {
    _id
    projectRef
    projectTitle
    tags
    projectClient
    projectDescription
    projectManager{_id}
    createdAt
  }
}
`;

export const SEARCH_PROJECTS = gql`
query searchProject($searchkey: String!) {
  searchProject(searchkey: $searchkey){
    _id
    projectRef
    projectTitle
    projectClient
    projectDescription
    tags
  }
}

`;
