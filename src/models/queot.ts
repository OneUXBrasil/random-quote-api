import { Sequelize,DataTypes }  from 'sequelize';
const client = new Sequelize("sqlite:.\\queots.db");
const Queot = client.define("queot",{
	 queot: DataTypes.STRING,
});

export const sync = async () => await client.sync();
export const add = async (data: any) => {
	await Queot.create({
		queot: data
	});
};
export async function get_random() {
	const queots = await Queot.findAll();
	return queots[Math.floor(Math.random() * queots.length)];
}
export const exists = async (queot: any) => {
    	let e = false;
    	const queots = await Queot.findAll();
    	for (const q of queots){ if (q['queot'] == queot) { e = true; }};  
    	return e;
};