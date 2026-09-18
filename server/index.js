const express = require("express");
require("dotenv").config();
const dbConnect = require('./config/database');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

dbConnect();

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "Server started successfully"
    })
});

app.listen(PORT, () => {
    console.log(`App is running at PORT ${PORT}`)
});
