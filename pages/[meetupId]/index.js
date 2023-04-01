import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
	return (
		<MeetupDetail
			img='https://media.istockphoto.com/id/835041990/photo/colorful-evening-scene-on-wroclaw-market-square-with-town-hall.jpg?s=612x612&w=0&k=20&c=TqnVGcbL62dMRyhEb2Gltu072o-KZJmWW57lJZSyJOc='
			title='This is a first meetup'
			address='Plac Solny 5, 49-377 Wrocław'
			description='This is a first meetup'
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;

	console.log(meetupId);

	return {
		props: {
			meetupData: {
				img: 'https://media.istockphoto.com/id/835041990/photo/colorful-evening-scene-on-wroclaw-market-square-with-town-hall.jpg?s=612x612&w=0&k=20&c=TqnVGcbL62dMRyhEb2Gltu072o-KZJmWW57lJZSyJOc=',
				id: meetupId,
				title: 'This is a first meetup',
				address: 'Plac Solny 5, 49-377 Wrocław',
				description: 'This is a first meetup',
			},
		},
	};
}

export default MeetupDetails;
