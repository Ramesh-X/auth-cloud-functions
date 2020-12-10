const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
import {Request, Response} from 'express';

const validateToken = async (req: Request, res: Response, next: Function) => {
  console.log('Check if request is authorized with Firebase ID token');
}

const app = express();
app.use(cors({ origin: true }));
app.user(validateToken);

app.post('/', (req: Request, res: Response) => res.send("Hello World\n"));

exports.api = functions.https.onRequest(app);
