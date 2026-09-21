const express = require("express");
const router = express.Router();
const { createJob, updateJob, deleteJob } = require('../controllers/JobControllers');
const { auth, isEmployer } = require('../middlewares/auth');

router.post("/job/createJob", auth, isEmployer, createJob);
router.post("/job/:id/updatejob", auth, isEmployer, updateJob);
router.delete("/job/:id/deletejob", auth, isEmployer, deleteJob);

module.exports = router;