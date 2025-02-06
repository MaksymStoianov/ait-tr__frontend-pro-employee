import Button from "components/Button/Button";
import EmployeeCard from "components/EmployeeCard/EmployeeCard";
import { useEmployees } from "components/EmployeeContext/EmployeeContext";

function EmployeePage() {
	const { employees, deleteAllEmployees } = useEmployees();

	// Генерируем список сотрудников
	const employeesEl = employees.map((employee) => (
		<EmployeeCard key={employee.id} {...employee} />
	));

	return (
		<section>
			<h2>Employee</h2>

			{/* Кнопка удаления всех сотрудников */}
			{employees.length > 0 && (
				<p>
					<Button name="Удалить все" onClick={deleteAllEmployees} />
				</p>
			)}

			{/* Список сотрудников или сообщение, что сотрудников нет */}
			{employees.length > 0 ? <ul>{employeesEl}</ul> : <p>No employees created yet.</p>}
		</section>
	);
}

export default EmployeePage;
