const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try{
        const token = req.cookies?.token || req.body?.token || req.header("Authorization")?.replace("Bearer ", "");

        if(!token) {
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            });
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }
        catch(error) {
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            });
        }

        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while validating token"
        });
    }
}

exports.isEmployee = async (req, res, next) => {
    try{
        if(req.user.role != "Employee") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for employees"
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"User role can't be verified"
        })
    }
}

exports.isEpmloyeer = async (req, res, next) => {
    try{
        if(req.user.role != "Employer") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Employers"
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"User role can't be verified"
        });
    }
}