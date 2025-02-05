import Layout from "components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Layout></Layout>
		</BrowserRouter>
	);
}

export default App;
