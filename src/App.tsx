import AppRoutes from "components/AppRoutes/AppRoutes";
import Layout from "components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Layout>
				<AppRoutes />
			</Layout>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
