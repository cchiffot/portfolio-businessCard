import "./HomePage.css";

function HomePage() {

	function handleMouseEnter(e) {
		e.target.style.cursor = 'pointer';
		e.target.style.background = 'red';
	  }

	  function handleMouseLeave(e) {
		e.target.style.background = '';
	  }

	return (
		<div class="HomePage">
			<div class="Contact" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</div>
			<div class="Portfolio" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Portfolio</div>
			<div class="Name">Calvin CHIFFOT</div>
			<div class="Title">Développeur Full-Stack</div>
			<div class="Others">
				<span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>À propos de moi</span>
				{", "}
				<span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Compétences techniques</span>
				{", "}
				<span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Expériences professionnelles</span>
			</div>
		</div>
	);
}

export default HomePage;