import {Request} from 'express';
import * as admin from "firebase-admin";
import DecodedIdToken = admin.auth.DecodedIdToken;

declare module 'express' {

  interface Request {
    user?: DecodedIdToken
  }
}
