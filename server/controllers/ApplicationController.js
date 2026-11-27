const Application = require("../models/Application");
const Job = require("../models/Job");

exports.submitApplication = async (req, res) => {
    try{
        const { resumeUUID } = req.body;
        const applicantId = req.user.id;
        const jobId = req.params.jobId;

        if(!resumeUUID) {
            return res.status(500).json({
                success:false,
                message:"Invalid resume UUID"
            })
        }

        if(!jobId) {
            return res.status(500).json({
                success:false,
                message:"Invalid job ID"
            });
        }

        const alreadyApplied = await Application.findOne({applicant: applicantId, job: jobId});

        if(alreadyApplied) {
            return res.status(409).json({
                success:false,
                message:"Application already exists"
            });
        }

        const application = await Application.create({applicant: applicantId, job: jobId, resumeUUID: resumeUUID,
                                                         resumeURL: `https://lp7213gcij.ucarecd.net/${resumeUUID}/`, applicationStatus: "Pending" });

        return res.status(200).json({
            success: true,
            message: "Application submitted successfully",
            data: application,
        });
    }
    catch(error) {
        console.error("Error while applying for job", error);

        return res.status(500).json({
            success:false,
            message:"Error occured while applying for job!"
        });
    }
}

exports.getMyApplications = async (req, res) => {
    try{
        const userId = req.user.id;

        if(!userId) {
            return res.status(400).json({
                success:false,
                message:"Invalid user ID",
            });
        }

        const applications = await Application.find({ applicant: userId }).populate("job").exec();

        return res.status(200).json({
            success:true,
            message:"Applications fetched successfully",
            data:applications,
        });
    }
    catch(error) {
        console.error("Error has occured:", error);
        return res.status(500).json({
            success:false,
            message:"Unable to fetch applications, error occured",
        });
    }
}

exports.getJobApplications = async (req, res) => {
    try{
        const jobId = req.params.jobId;

        const job = await Job.findById(jobId);

        if(!job) {
            return res.status(404).json({
                success:false,
                message:"No job found",
            });
        }

        if(job.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                success:false,
                message:"You are not authorized to view these applications"
            });
        }

        const applications = await Application.find({ job:jobId }).populate("applicant").populate("job").exec();

        return res.status(200).json({
            success:true,
            message:"Applications for current job fetched successfully",
            data:applications,
        });

    }
    catch(error) {
        console.error("Error occured while getting job applications:", error);
        return res.status(500).json({
            success:false,
            message:"Error occured while getting job applications"
        });
    }
}

exports.updateApplicationStatus = async (req, res) => {
    try{
        const userId = req.user.id;

        const { status } = req.body;

        const applicationId = req.params.applicationId;

        const allowedStatuses = [
            "Pending",
            "Reviewed",
            "Shortlisted",
            "Rejected"
        ];

        if(!userId) {
            return res.status(400).json({
                success:false,
                message:"Invalid user ID",
            });
        }

        if(!allowedStatuses.includes(status)) {
            return res.status(400).json({
                success:false,
                message:"Request's body is empty",
            });
        }

        if(!applicationId) {
            return res.status(404).json({
                success:false,
                message:"Invalid application ID",
            });
        }

        const application = await Application.findById(applicationId).populate("job");
        

        if(!application) {
            return res.status(400).json({
                success:false,
                message:"No application found",
            });
        }

        if(!application.job) {
            return res.status(404).json({
                success:false,
                message:"Associated job not found",
            });
        }

        if(application.job.createdBy.toString() !== userId) {
            return res.status(403).json({
                success:false,
                message:"You are not authorized to update this application",
            });
        }

        application.applicationStatus = status;
        await application.save();
        
        return res.status(200).json({
            success:true,
            message:"Application's status updates successfully",
            data:application
        });

    }
    catch(error) {
        console.error("Error occured while updating application's status", error);
        return res.status(500).json({
            success:false,
            message:"Unable to update application's status",
        });
    }
}