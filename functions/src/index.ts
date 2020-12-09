const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
import {Request, Response} from 'express';

const app = express();
app.use(cors({ origin: true }));

app.post('/', (req: Request, res: Response) => res.send("Hello World\n"));

exports.api = functions.https.onRequest(app);
