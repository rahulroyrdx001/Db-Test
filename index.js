// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error(err));

// // Schema & Model
// // const ShowSchema = new mongoose.Schema({ title: String, genre: String, rating: Number });
// // Show Model
// const ShowSchema = new mongoose.Schema({
//     show_id: { type: String, required: true, unique: true },
//     type: String,
//     title: String,
//     director: String,
//     cast: String,
//     country: String,
//     date_added: String,
//     release_year: Number,
//     rating: String,
//     duration: String,
//     listed_in: String,
//     description: String
// });
// const Show = mongoose.model('Show', ShowSchema);

// // API Route
// app.get('/api/shows', async (req, res) => {
//     try {
//         const shows = await Show.find();
//         res.json(shows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


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

// Show Model
const ShowSchema = new mongoose.Schema({
    show_id: { type: String, required: true, unique: true },
    type: String,
    title: String,
    director: String,
    cast: String, // Cast is stored as a comma-separated string
    country: String,
    date_added: String,
    release_year: Number,
    rating: String,
    duration: String,
    listed_in: String,
    description: String
});
const Show = mongoose.model('Show', ShowSchema);

// API Route with Search Functionality
app.get('/api/shows', async (req, res) => {
    try {
        const { title, cast } = req.query;
        let query = {};

        if (title) {
            query.title = { $regex: new RegExp(title, 'i') }; // Case-insensitive title search
        }

        if (cast) {
            query.cast = { $regex: new RegExp(cast, 'i') }; // Case-insensitive search in cast field
        }

        const shows = await Show.find(query);
        res.json(shows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
