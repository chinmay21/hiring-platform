const express = require("express");
require("dotenv").config();
const dbConnect = require('./config/database');
const cors = require("cors");
const userRoutes = require('./routes/User');
const jobRoutes = require('./routes/Job');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1', jobRoutes);

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
