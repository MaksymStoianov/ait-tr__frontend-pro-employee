import Button from "components/Button/Button";
import EmployeeCard from "components/EmployeeCard/EmployeeCard";
import { useEmployees } from "components/EmployeeContext/EmployeeContext";

function EmployeePage() {
	const { employees, deleteAllEmployees } = useEmployees();

	// FIXME: Не уверен что правильно сделал key.
	const employeesEl = employees.map(employee => {
		return <EmployeeCard key={employee.id} {...employee} />;
	});

	return (
		<div>
			<h2>Employee</h2>
			<p>
				<Button name="Удалить все" onClick={() => deleteAllEmployees()} />
			</p>
			{employees.length ? employeesEl : <p>No employee created yet.</p>}
		</div>
	);
}

export default EmployeePage;
