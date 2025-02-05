import EmployeeCard from "components/EmployeeCard/EmployeeCard";
import { useEmployees } from "components/EmployeeContext/EmployeeContext";

function EmployeePage() {
	const { employees } = useEmployees();

	// FIXME: Не уверен что правильно сделал key.
	const employeesEl = employees.map((employee, i) => (
		<EmployeeCard key={i + "-" + new Date().getTime()} {...employee} />
	));

	return (
		<div>
			<h2>Employee</h2>
			{employees.length ? employeesEl : <p>No employee created yet.</p>}
		</div>
	);
}

export default EmployeePage;
