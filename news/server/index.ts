import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const categories = require('./categories.json');
const posts = require('./posts.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());
