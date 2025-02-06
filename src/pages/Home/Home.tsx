import { StyledH2, StyledHome, StyledP , StyledH1} from "./styles";

function HomePage() {
	return (
		<StyledHome>
			<h1>Create Employee</h1>
			<StyledH2>Employees application.</StyledH2>
			<StyledP>Welcome to the Employee App</StyledP>
			<StyledP>
        This app allows you to manage employees by adding, updating, and deleting their information easily. Keep track of all employee data in one place.
		</StyledP>
			<StyledH1>Projektentwickler:</StyledH1>
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
