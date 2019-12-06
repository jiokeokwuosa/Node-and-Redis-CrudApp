import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import v1Router from './routes';
import './db';


config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get('/', (req, res) =>
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to Redis and Node App'
  })
);
app.use('/api/v1',v1Router);



app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})
