const express = require("express");
const router = express.Router();
const { generateUploadToken } = require('../controllers/uploadcareController');
const { auth, isApplicant } = require('../middlewares/auth');

router.get("/uploadcare/token", auth, isApplicant, generateUploadToken);

module.exports = router;