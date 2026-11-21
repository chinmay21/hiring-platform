const express = require('express');
const router = express.Router();
const { submitApplication, getMyApplications, getJobApplications, updateApplicationStatus } = require('../controllers/ApplicationController');
const { auth, isEmployer, isApplicant } = require('../middlewares/auth');

router.post("/application/:id/apply", auth, isApplicant, submitApplication);
router.get("/application/myApplications", auth, isApplicant, getMyApplications);
router.get("/application/job/:id", auth, isEmployer, getJobApplications);
router.post("/application/:id/status", auth, isEmployer, updateApplicationStatus);

module.exports = router;