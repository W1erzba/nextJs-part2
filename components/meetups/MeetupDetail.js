import classes from './MeetupDetail.module.css';

export default function MeetupDetail(props) {
	return (
		<section className={classes.detail}>
			<img src={props.img} alt={props.title}></img>
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
	);
}