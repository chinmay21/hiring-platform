const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    applicant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    job:{
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

applicationSchema.index(
    { applicant: 1, job: 1 },
    { unique: true }
);

module.exports = mongoose.model("Application", applicationSchema);