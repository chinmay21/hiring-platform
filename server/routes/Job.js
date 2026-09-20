const express = require("express");
const router = express.Router();
const { createJob, updateJob } = require('../controllers/JobControllers');
const { auth, isEmployer } = require('../middlewares/auth');

router.post("/job/createJob", auth, isEmployer, createJob);
router.post("/job/:id/updatejob", auth, isEmployer, updateJob);

module.exports = router;