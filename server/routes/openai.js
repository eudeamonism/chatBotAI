//This will represent all the routes that point to openAi
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { openai } from '../index.js';

dotenv.config();
//This allows us to use our routes in another file
const router = express.Router();

router.post('/text', async (req, res) => {
	try {
		const { text, activeChatId } = req.body;
		console.log('text', text);
		res.status(200).json({ text });
	} catch (error) {
		console.log('error', error);
		res.status(500).json({ error: error.message });
	}
});

export default router;
