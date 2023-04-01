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

/* 

Now, which one of the two should you use? Is getServerSideProps better or getStaticProps? getServerSideProps might sound better because it's guaranteed to run for every request.
But that actually can be a disadvantage, because that means that you need to wait for your page
to be generated on every incoming request.

Now if you don't have data that changes all the time, and with that, I really mean that it changes multiple times every second. And if you don't need access to the request object, let's say for authentication, getStaticProps is actually better.

Because there you pre-generate an HTML file, that file can then be stored and served by a CDN. And that simply is faster than regenerating and fetching that data for every incoming request.

So your page will be faster when working with getStaticProps, because then it can be cached
and reused, instead of regenerated all the time.

Hence, you should really only use getServerSideProps if you need access to that concrete request object, because you don't have access to request and response in getStaticProps.

Or if you really have data that changes multiple times every second, then therefore even revalidate won't help you, then getServerSideProps is a great choice.
Now here for our meetup list, though, it's not a great choice, because that is not data, which changes frequently. And here I also don't need to work with the incoming request. And therefore I will comment getServerSideprops out again, and comment getStaticProps in. Because with that, we can take advantage of the caching and we're not regenerating the page multiple times, unnecessarily.

*/
