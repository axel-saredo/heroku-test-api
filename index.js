import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/heroku/test', (req, res) => {
  res.send({ message: 'Heroku Works!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
