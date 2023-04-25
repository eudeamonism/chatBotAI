import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { Configuration, OpenAIApi } from 'openai';
import openAiRoutes from './routes/openai.js';

//Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());

//Without, will not have access to different server
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//OPENAI configuration
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

//Routes
app.use('/openai', openAiRoutes);

//This will allow us to call routes. Exported to be used in routes
export const openai = new OpenAIApi(configuration);

//Server Setup
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
	console.log('App listening at http://localhost:' + PORT);
});
