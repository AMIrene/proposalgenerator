const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
    projectRef: {
        type: Number,
        required: 'You need a project reference number.',
        minlength: 4,
        maxlength: 20,
        trim: true,
    },
    projectTitle: {
        type: String,
        required: true,
        trim: true,
    },

    tags: {
        type: String,
        required: true,
        trim: true,
    },

    
    projectManager: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
        
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),

    },


});




const Project = model('Project', projectSchema);
  
  module.exports = Project;