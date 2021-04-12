import express from 'express';
import router from './router';
import { sync } from './models/queot';
const app = express();
app.use(express.json());
app.use(router);

app.listen(3000,() => {
	console.log("Running now...");
	sync();
});