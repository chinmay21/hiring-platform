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
    applicants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
});

module.exports = mongoose.model("Job", jobSchema);