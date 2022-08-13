export default function Legal() {
	const current = new Date();
	const date = `${current.getFullYear()}`;
	return (
		<>
			<p>&copy;{date} Natalie Correia - meow</p>
		</>
	);
}
