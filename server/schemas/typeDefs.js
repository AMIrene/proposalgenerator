const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    projects: [Project]
  }

  type Project {
    _id: ID
    projectRef: Int
    projectTitle: String
    projectManager: User
    createdAt: String
      
  }

  type Auth {
    token: ID
    user: User

  }

  type Query {
    user: User
    projects: [Project]
    project(projectId: ID): Project
    
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    addProject( projectRef: Int, projectTitle: String): Project
    updateProject(projectId: ID, projectRef: Int, projectTitle: String): Project
    deleteProject(projectId: ID): Project
  }
`;

module.exports = typeDefs;
