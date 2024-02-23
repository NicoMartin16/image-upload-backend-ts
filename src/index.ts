import express from 'express';
import router from './infrastructure/http/routes';
import cors from 'cors';

const allowedOrigins = ['http://localhost:4200']
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();

app.use(express.json());

app.use(cors(options));


app.use(router);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});