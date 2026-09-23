const Job = require('../models/Job');
const User = require('../models/User');

exports.createJob = async (req, res) => {
    try{
        const {jobTitle, openings, jobDescription, salary, requiredSkills} = req.body;
        const user = req.user.id;
        console.log(user)

        if(!await User.findById(user)) {
            return res.status(401).json({
                success:false,
                message:"User is not valid"
            });
        }

        if(!jobTitle || !openings || !jobDescription || !salary || !requiredSkills) {
            return res.status(400).json({
                success:false,
                message:"All the details are required"
            });
        }

        const job = await Job.create({jobTitle:jobTitle, openings:openings, jobDescription:jobDescription, salary:salary,
                                     requiredSkills:requiredSkills, createdBy:user});
        
        const populateJob = await job.populate("createdBy", "name");
        
        await User.findByIdAndUpdate(user, {$push: { createdJobs: job._id } }, { new: true });

        return res.status(200).json({
            success:true,
            message:"Job created successfully",
            job: populateJob,
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while creating job",
        });
    }
}

exports.updateJob = async (req, res) => {
    try{
        const {jobTitle, openings, jobDescription, salary, requiredSkills} = req.body;
        const jobId = req.params.id;
        const userId = req.user.id;

        if(jobTitle || openings || jobDescription || salary || requiredSkills) {
            
            const job = await Job.findById(jobId);

            if(job.createdBy.toString() !== userId) {
                return res.status(401).json({
                    success:false,
                    message:"You are not authorized to update this job!"
                });
            }

            const updatedJob = await Job.findByIdAndUpdate(jobId, {jobTitle:jobTitle, openings:openings, jobDescription:jobDescription,
                                                         salary:salary, $push: {requiredSkills: { $each: requiredSkills } } }, { new: true });
            
            return res.status(200).json({
                success:true,
                message:"Job updated successfully",
                data:updatedJob
            });
        }
        else{
            return;
        }
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while updating job"
        });
    }
}

exports.deleteJob = async (req, res) => {
    try{
        const userId = req.user.id;
        const jobId = req.params.id;

        const job = await Job.findById(jobId);
        
        
        if(!job) {
            return res.status(401).json({
                success:false,
                message:"No such job exists"
            });
        }

        if(job.createdBy.toString() !== userId) {
            return res.status(401).json({
                success:false,
                message:"You are not authorized to delete this job"
            });
        }

        await Job.findOneAndDelete(jobId);
        await User.findByIdAndUpdate(userId, {$pull: { createdJobs: jobId } }, { new: true });

        return res.status(200).json({
            success:true,
            message:"Job deleted successfully"
        });

    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while deleting the job"
        });
    }
}

exports.getAllJobs = async (req, res) => {
    try{
        const userId = req.user.id;
        if(!userId) {
            return res.status(401).json({
                success:false,
                message:"Invalid user ID!"
            });
        }

        const jobs = await Job.find({});
        return res.status(200).json({
            success:true,
            message:"All jobs fetched successfully",
            data:jobs
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while getting all jobs"
        });
    }
}

exports.applyForJob = async(req, res) => {
    try{
        const userId = req.user.id;
        const jobId = req.params.id;

        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(401).json({
                success:false,
                message:"This job does not exist!"
            });
        }

        const alreadyApplied = job.applicants.includes(userId);
        if(alreadyApplied) {
           return res.status(401).json({
            success:false,
            message:"You have already applied for this job"
           });
        }

        const updatedJob = await Job.findByIdAndUpdate(jobId, { $push: { applicants: userId } }, { returnDocument: "after" });
        const populatedJob = await updatedJob.populate("applicants", "name").exec();

        await User.findByIdAndUpdate(userId, { $push: { appliedJobs: jobId } }, { returnDocument: "after" });

        return res.status(200).json({
            success:true,
            message:"Applied for job successfully",
            data: populatedJob,
        })

    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while applying for job!"
        });
    }
}

exports.getAllAppliedJobs = async (req, res) => {
    try{
        const userId = req.user.id;
        const user = await User.findById(userId);
        if(!user) {
            return res.status(401).json({
                success:false,
                message:"User does not exist!"
            });
        }

        const appliedJobs = user.appliedJobs;

        return res.status(200).json({
            success:false,
            message:"Fetched applied jobs successfully",
            data: appliedJobs
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while get applied jobs"
        });
    }
}