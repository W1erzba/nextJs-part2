import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A Meetup in Wroclav',
		image: 'https://media.istockphoto.com/id/835041990/photo/colorful-evening-scene-on-wroclaw-market-square-with-town-hall.jpg?s=612x612&w=0&k=20&c=TqnVGcbL62dMRyhEb2Gltu072o-KZJmWW57lJZSyJOc=',
		address: 'Plac Solny 5, 49-377 Wroclav',
		description: 'This is our first meetup!',
	},
	{
		id: 'm2',
		title: 'A Meetup in Brzeg',
		image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/0_Brzeg_06.jpg',
		address: 'Plac Zamkowy 5, 49-300 Brzeg',
		description: 'This is our seccond meetup!',
	},
];

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
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		// REVALIDATE : special props used to re reupload a data from server after deployment in cases that we have a site with has offen data uploads and we want to be sure that this data will be updated as soon as we upload new thiings to the site. Units are seconds 10 = 10 sec etc.
		revalidate: 10,
	};
}

export default HomePage;
