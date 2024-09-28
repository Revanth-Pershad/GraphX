import express from 'express';
import path from 'path';
import { GraphManager } from './modules/graphManager'; // Import your graph manager
const app = express();
const PORT = 8000;
const graphManager = new GraphManager();
// Middleware to parse JSON
app.use(express.json());
// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});
// Create a new graph
app.post('/createGraph', (req, res) => {
    const { graphId, classType } = req.body;
    try {
        graphManager.createGraph(graphId, classType);
        res.json({ message: 'Graph created successfully!' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Add a vertex to a graph
app.post('/addVertex', (req, res) => {
    const { graphId, vertexId, vertexData } = req.body;
    const graph = graphManager.getGraph(graphId);
    if (!graph) {
        return res.status(404).json({ message: 'Graph not found' });
    }
    try {
        graph.addVertex(vertexId, vertexData);
        res.json({ message: 'Vertex added successfully!' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Add an edge between two vertices
app.post('/addEdge', (req, res) => {
    const { graphId, fromVertex, toVertex } = req.body;
    const graph = graphManager.getGraph(graphId);
    if (!graph) {
        return res.status(404).json({ message: 'Graph not found' });
    }
    try {
        graph.addEdge(fromVertex, toVertex);
        res.json({ message: 'Edge added successfully!' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
