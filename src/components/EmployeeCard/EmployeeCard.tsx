import { Employee } from "components/EmployeeContext/types";
import { EmployeeCardContainer, EmployeeCardContent } from "./styles";

function EmployeeCard(props: Employee) {
	const { name, surname, age, jobPosition } = props;

	return (
		<EmployeeCardContainer>
			<EmployeeCardContent>
				<p>
					<strong>Name:</strong> {name}
				</p>
				<p>
					<strong>Surname:</strong> {surname}
				</p>
				<p>
					<strong>Age:</strong> {age}
				</p>
				<p>
					<strong>Job Position:</strong> {jobPosition}
				</p>
			</EmployeeCardContent>
		</EmployeeCardContainer>
	);
}

export default EmployeeCard;
