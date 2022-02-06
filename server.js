const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// For all calls having /api, they are redirected to apiRoutes--and, specifically, index.js, which node will automatically look for
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello World'
    });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

// Mid-12.4.6 'Create POST Route'

