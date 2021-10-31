const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]
  }

  type Project {
    _id: ID
    projectRef: String
    projectTitle: String
    tags: String
    projectClient: String
    projectDescription: String
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
    searchProject(searchkey: String!): [Project]
    
  }

  type Mutation {
    addUser(username: String, email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    addProject( projectRef: String, projectTitle: String, projectDescription: String,  projectClient: String, tags: String ): Project
    updateProject(projectId: ID, projectRef: String, projectTitle: String, tags: String, projectClient: String, projectDescription: String): Project
    deleteProject(projectId: ID): Project
  }
`;

module.exports = typeDefs;
