const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
    projectRef: {
        type: Number,
        required: 'You need a project reference number.',
        minlength: 10,
        maxlength: 20,
        trim: true,
    },

    projectTitle: {
        type: String,
        required: true,
        trim: true,
    },

    projectDuration: {
        type: String,
        required: 'Specify project timeframe as Year to Year',
        trim: true,
    },
    
    projectActive: {
        type: Boolean,
        default: true,

    },
    projectLocation: {
        type: String,
        required: 'Enter State, Territory, Region or Country',
        trim: true,

    },

    projectType: {
        type: String,
        required: 'Enter type of project',
        trim: true,
    },

    projectSector: {
        type: String,
        required: 'Specify project sector',
        trim: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),

    },

    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tags',
        },
    ],
    

});




const Project = model('Project', projectSchema);
  
  module.exports = Project;