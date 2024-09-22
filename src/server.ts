import express, { Request, Response } from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req : Request, res : Response) => {
  res.send('<h1>The Server is Working! :)</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
