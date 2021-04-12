import { Router }  from 'express';
import { add,exists,get_random } from './models/queot';
const routes = Router();
routes.post("/new_queot",async (req,res) => {
	const json = req.body;
	const { q }  = json;
	if (! q ) return res.send("você precisa mandar um queot!");
	if (!await exists(q)) await add(q);
	else return res.send("Essa queot já existe.");
	res.send(`queot ${q} foi adicionada.`);
})
routes.get('/', async (req,res) => {
	res.send(await get_random()['queot']);
});
export default routes;