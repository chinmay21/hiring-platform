const express = require("express");
const router = express.Router();
const { createJob, updateJob, deleteJob, getAllJobs, applyForJob, getAllAppliedJobs, getAllApplicants, getUserJobs, getJob } = require('../controllers/JobControllers');
const { auth, isEmployer, isApplicant } = require('../middlewares/auth');

router.post("/job/createJob", auth, isEmployer, createJob);
router.post("/job/:id/updatejob", auth, isEmployer, updateJob);
router.post("/job/:id/applyForJob", auth, isApplicant, applyForJob);
router.delete("/job/:id/deletejob", auth, isEmployer, deleteJob);
router.get("/job/getAllJobs", auth, getAllJobs);
router.get("/job/:id/getAllApplicants", auth, isEmployer, getAllApplicants);
router.get("/job/getAppliedJobs", auth, isApplicant, getAllAppliedJobs);
router.get("/job/getUserJobs", auth, isApplicant, getUserJobs);
router.get("/job/getJob/:id", auth, isApplicant, getJob);

module.exports = router;