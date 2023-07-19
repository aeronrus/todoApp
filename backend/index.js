import express from 'express';
import cors from 'cors';
import index from './routes/index.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);

  next();
});

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use('/api/todos/', index);

app.listen(9999, () => {
  console.log('API Working!');
});
