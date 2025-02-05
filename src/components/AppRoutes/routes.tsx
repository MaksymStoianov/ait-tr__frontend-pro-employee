import CreateEmployeePage from "pages/CreateEmployee/CreateEmployee";
import EmployeePage from "pages/Employee/Employee";
import HomePage from "pages/Home/Home";

export const routes = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/create-employee",
		element: <CreateEmployeePage />,
	},
	{
		path: "/employee",
		element: <EmployeePage />,
	},
];
