import { StyledH2, StyledHome, StyledP } from "./styles";

function HomePage() {
	return (
		<StyledHome>
			<h1>Create Employee</h1>
			<StyledH2>Employees application.</StyledH2>
			<StyledP>Projektentwickler:</StyledP>
			<ul>
				<li>Maksym Stoianov</li>
				<li>Tetiana Makharynets</li>
				<li>Svitlana Held</li>
				<li>Yuliia Sydorenko</li>
			</ul>
		</StyledHome>
	);
}

export default HomePage;
