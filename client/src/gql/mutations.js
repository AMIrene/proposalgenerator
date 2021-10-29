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
mutation addProject($projectId: Int, $projectRef: String, $projectTitle: String, $tags: String, $projectClient: String, $projectDescription: String){
  addProject(projectId: $projectId, projectRef: $projectRef, projectTitle: $projectTitle, tags: $tags, projectClient: $projectClient, projectDescription: $projectDescription){
    _id
    projectId
    projectRef
    tags
    projectClient
    projectDescription
    projectManager
    createdAt
  }
}
`;

export const UPDATE_PROJECT = gql`
mutation updateProject ($projectId: Int, $projectRef: String, $projectTitle: String, $tags: String, $projectClient: String, $projectDescription: String){
  addProject(projectId: $projectId, projectRef: $projectRef, projectTitle: $projectTitle, tags: $tags, projectClient: $projectClient, projectDescription: $projectDescription){
    _id
    projectId
    projectRef
    tags
    projectClient
    projectDescription
    projectManager
    createdAt
  }
}
`;


export const DELETE_PROJECT = gql`
mutation deleteProject($projectId: Int) {
  deleteProject(projectId: $projectId) {
    _id
    projectRef
    projectTitle
    projectManager

  }
}


`;