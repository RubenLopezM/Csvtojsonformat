
import { getjson } from '../controllers/csvtojson.js';

import express from 'express';
const router = express.Router()



router.get('/',getjson)

export default router