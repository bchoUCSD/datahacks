// Import dependencies
import express from 'express';

// Set up express server
const app = express();
const PORT = 3000;
app.use(express.json());

// Load bar chart graph
app.get('/', (req,res) => {
    
});

app.post('/', (req,res) => {

});

// Run Server
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));