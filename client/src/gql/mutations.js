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
    $email: String!
    $password: String!
  ) {
    addUser(
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
mutation addProject($projectId: Int, $projectRef: String, $projectTitle: String, $projectManager: [String]){
  addProject(projectId: $projectId, projectRef: $projectRef, projectTitle: $projectTitle, projectManager: $projectManager){
    _id
    projectId
    projectRef
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