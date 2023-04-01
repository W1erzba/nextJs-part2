import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function hanlder(req, res) {
	// We can add a try/catch to catch errors but this is not improtand right now

	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(
			'mongodb+srv://Wierzba:wiadrokrwao1@cluster0.gfze6w8.mongodb.net/meetups?retryWrites=true&w=majority'
		);
		const db = client.db();

		const meetupsCollection = db.collection('meetups');

		const result = await meetupsCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: 'Meetup inserted!' });
	}
}

export default hanlder;
