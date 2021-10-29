const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    //retrieve all project

    projects: async () => {
      return Project.find();
    },

    //retrieve one project

    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },

     user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    searchProject: async (parent, args, context) => {
      if (context.user) {
        let regexNew = new RegExp(args.searchkey, 'i')
        const projects = await Project.find({ projectTitle: regexNew });
        return projects
      }
      throw new AuthenticationError('Not logged in');
       
    }

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
 
    },

    //Add a new project
    addProject: async (parent, { projectId, projectRef, projectTitle, tags, projectClient, projectDescription }, context) => {
      if (context.user) {
        const project = await Project.create({
          projectId,
          projectRef,
          projectTitle,
          tags,
          projectClient,
          projectDescription,
          projectManager: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  //update an existing project
    updateProject: async (parent, { projectId, projectRef, projectTitle, tags, projectClient, projectDescription }, context) => {
      if (context.user) {
           const project = await Project.findOneAndUpdate({
          _id: projectId,
        },
          {
            projectRef,
            projectTitle,
            tags,
            projectClient,
            projectDescription,
          
          }, {
            new: true
          }
        
        );
          return project;
               
      }
      throw new AuthenticationError('You need to be logged in!');
    },
     
   
       
  //Delete a new project
    deleteProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
          
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: project._id } }
        );
        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
