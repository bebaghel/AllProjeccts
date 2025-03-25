require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/aggregate');


app.get('/aggregate', async (req, res) => {
    try {
        const result = await mongoose.connection.collection('orders').aggregate([
            // { $match: { status: "completed" } },
            { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
            // { $sort: { totalSpent: -1 } },
            // { $limit: 5 }
        ]).toArray();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
