require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Schema & Model
const ShowSchema = new mongoose.Schema({ title: String, genre: String, rating: Number });
const Show = mongoose.model('Show', ShowSchema);

// API Route
app.get('/api/shows', async (req, res) => {
    try {
        const shows = await Show.find();
        res.json(shows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
