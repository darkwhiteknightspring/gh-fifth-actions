import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

// running a express server

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

app.listen(process.env.PORT);
