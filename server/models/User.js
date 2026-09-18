const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["Employee", "Employer"],
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    appliedJobs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
    }],
    token:{
        type: String,
    }
});

module.exports = mongoose.model("User", userSchema);