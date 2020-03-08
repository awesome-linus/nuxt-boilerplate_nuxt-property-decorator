import express, { Router } from 'express';
import bffSamples from './router/api/bffSamples';

const router = Router();

router.use(bffSamples);

const bff = express();

bff.use('/api', router);

module.exports = bff;
