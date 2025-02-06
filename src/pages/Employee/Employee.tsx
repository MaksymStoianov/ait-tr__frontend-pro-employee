import EmployeeCard from "components/EmployeeCard/EmployeeCard";
import { useEmployees } from "components/EmployeeContext/EmployeeContext";
import {EmployeeCardGrid, ButtonContainer, InfoContainer} from './styles'

function EmployeePage() {
	const { employees, removeAllEmployees  } = useEmployees();

	// FIXME: Не уверен что правильно сделал key.
	const employeesEl = employees.map((employee, i) => (
		<EmployeeCard key={i + "-" + new Date().getTime()} {...employee} />
	));

	return (
		<InfoContainer>
			<EmployeeCardGrid>
				{employees.length ? employeesEl : <p>No employee created yet.</p>}
			</EmployeeCardGrid>
				{employees.length ? <ButtonContainer onClick={removeAllEmployees}>Delete All</ButtonContainer> : employeesEl}
		</InfoContainer>
	);
}

export default EmployeePage;
