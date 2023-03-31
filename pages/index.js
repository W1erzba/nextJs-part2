import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'M1',
		title: 'A Meetup in Wroclav',
		image: 'https://media.istockphoto.com/id/835041990/photo/colorful-evening-scene-on-wroclaw-market-square-with-town-hall.jpg?s=612x612&w=0&k=20&c=TqnVGcbL62dMRyhEb2Gltu072o-KZJmWW57lJZSyJOc=',
		address: 'Plac Solny 5, 49-377 Wroclav',
		description: 'This is our first meetup!',
	},
	{
		id: 'M2',
		title: 'A Meetup in Brzeg',
		image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/0_Brzeg_06.jpg',
		address: 'Plac Zamkowy 5, 49-300 Brzeg',
		description: 'This is our seccond meetup!',
	},
];

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
