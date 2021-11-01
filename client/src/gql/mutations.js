import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PROJECT = gql`
mutation addProject(
  $projectRef: String
  $projectTitle: String
  $projectDescription: String
  $projectClient: String
  $tags: String
  ) {
  addProject(
    projectRef: $projectRef
    projectTitle: $projectTitle
    projectDescription: $projectDescription
    projectClient: $projectClient
    tags: $tags
    ) {
    _id
    projectRef
    projectTitle
    projectDescription
    projectClient
    tags      
    projectManager{_id}
    createdAt
  }
}
`;

export const UPDATE_PROJECT = gql`
mutation updateProject ($projectId: ID, $projectRef: String, $projectTitle: String, $tags: String, $projectClient: String, $projectDescription: String){
  updateProject(projectId: $projectId, projectRef: $projectRef, projectTitle: $projectTitle, tags: $tags, projectClient: $projectClient, projectDescription: $projectDescription){
    _id
    projectId
    projectRef
    projectTitle
    tags
    projectClient
    projectDescription
    projectManager {_id}
    createdAt
  }
}
`;


export const DELETE_PROJECT = gql`
mutation deleteProject($projectId: ID) {
  deleteProject(projectId: $projectId) {
    _id
    projectId
    

  }
}


`;