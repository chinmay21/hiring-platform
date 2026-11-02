const express = require("express");
const router = express.Router();
const { createJob, updateJob, deleteJob, getAllJobs, applyForJob, getAllAppliedJobs, getAllApplicants, getUserJobs } = require('../controllers/JobControllers');
const { auth, isEmployer, isEmployee } = require('../middlewares/auth');

router.post("/job/createJob", auth, isEmployer, createJob);
router.post("/job/:id/updatejob", auth, isEmployer, updateJob);
router.post("/job/:id/applyForJob", auth, isEmployee, applyForJob);
router.delete("/job/:id/deletejob", auth, isEmployer, deleteJob);
router.get("/job/getAllJobs", auth, getAllJobs);
router.get("/job/:id/getAllApplicants", auth, isEmployer, getAllApplicants);
router.get("/job/getAppliedJobs", auth, isEmployee, getAllAppliedJobs);
router.get("/job/getUserJobs", auth, isEmployee, getAllAppliedJobs);

module.exports = router;