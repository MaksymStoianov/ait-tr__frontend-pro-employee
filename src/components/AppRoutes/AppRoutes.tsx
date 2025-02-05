import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function AppRoutes() {
	const routesEl = routes.map(route => (
		<Route key={route.path} path={route.path} element={route.element} />
	));

	return <Routes>{routesEl}</Routes>;
}

export default AppRoutes;
