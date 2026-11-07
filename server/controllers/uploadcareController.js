const { randomUUID } = require("crypto");

exports.generateUploadToken = async (req, res) => {
    try{
        const secretKey =  process.env.UPLOADCARE_SECRET_KEY;

        if(!secretKey) {
            console.log("Upload care secret key missing");

            return res.status(500).json({
                success:false,
                message:"Uploadcare configuration error",
            });
        }

        const { generateAuthToken } = await import("@uploadcare/signed-uploads");

        const token = generateAuthToken(secretKey, {
            lifetime: 30 * 60 * 1000,
            subject: req.user.id,
            tokenId: randomUUID(),
            operations: 10,
        });

        return res.status(200).json({
            success: true,
            token,
        });
    }
    catch(error) {
        console.error("Uploadcare token generation failed", error);

        return res.status(500).json({
            success: false,
            message: "Unable to generate Uploadcare authentication token",
        });
    }
}