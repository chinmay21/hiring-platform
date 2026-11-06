const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    applicantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    resumeUUID:{
        type: String,
        required: true,
    },
    resumeURL:{
        type: String,
        required: true,
    },
    applicationStatus:{
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);