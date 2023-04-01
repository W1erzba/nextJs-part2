import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
// 	// Alternative for a getStaticProps, also have reserverd name
// 	// fetch data from an API - this function also runs code on a server, not on a client side. This is an portal to 'backend' we will say.
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// GETSTATICPROPS : this function should be named like this, and it's only work on a components in a pages folder
	// Code here will not be executed on a visitors pc

	const client = await MongoClient.connect(
		'mongodb+srv://Wierzba:wiadrokrowa1@cluster0.gfze6w8.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
