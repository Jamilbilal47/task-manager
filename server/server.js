const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
