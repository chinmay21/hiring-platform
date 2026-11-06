const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    jobTitle:{
        type: String,
        required: true
    },
    openings:{
        type: Number,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true,
    },
    requiredSkills:[{
        type: String,
        required: true
    }],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    industry:{
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    applications:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
    }]
});

module.exports = mongoose.model("Job", jobSchema);