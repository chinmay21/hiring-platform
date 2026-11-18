import Application from "../models/Application";

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
                                                         resumeURL: `https://ucarecdn.com/${resumeUUID}/`, applicationStatus: "Pending" });

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