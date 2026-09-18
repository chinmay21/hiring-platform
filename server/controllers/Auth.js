const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try{
        const {name, email, role, password} = req.body;

        if(!name || !email || !role || !password) {
            return res.status(400).json({
                success:false,
                message:"All the details are required!"
            });
        }

        const existingUser = await User.findOne({email});

        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }

        
    }
    catch(error) {

    }
}