const express = require('express');
const app = express();
const PORT = 3000;

// Use CORS middleware
const cors = require('cors');
app.use(cors());

app.use(express.json());

const bookRoute = require('./routes/bookRoute')
app.use('/api', bookRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
})

