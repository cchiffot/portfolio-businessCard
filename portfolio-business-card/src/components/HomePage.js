import "./HomePage.css";

function HomePage() {
	return (
		<div class="HomePage">
			<div class="Contact">Contact</div>
			<div class="Portfolio">Portfolio</div>
			<div class="Name">Calvin CHIFFOT</div>
			<div class="Title">Développeur Full-Stack</div>
			<div class="Others">
				<span>À propos de moi</span>
				{", "}
				<span>Compétences techniques</span>
				{", "}
				<span>Expériences profesionnelles</span>
			</div>
		</div>
	);
}

export default HomePage;
