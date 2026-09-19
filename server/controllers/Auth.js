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

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({name: name, email:email, role:role, password:hashedPassword});

        user.password = undefined;

        return res.status(200).json({
            success:true,
            message:"User signed up successfully",
            data: user
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while signing up"
        });
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:"All details are required"
            });
        }

        const user = await User.findOne({email});
        
        if(!user) {
            return res.status(404).json({
                success:false,
                message:"User does not exists"
            });
        }

        const payload = {
            id: user._id,
            role: user.role,
            email: user.email,
        }

        if(await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            );

            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };

            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in successfully"
            })
        }
        else{
            return res.status(500).json({
                success:false,
                message:"Login failure, Please try again"
            });
        }
    }
    catch(error) {
        return res.status(500).json({
            succes:false,
            message:"Error while logging in"
        });
    }
}