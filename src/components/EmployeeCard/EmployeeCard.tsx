import { Employee } from "components/EmployeeContext/types";
import { EmployeeCardContainer, EmployeeCardContent,TextContainer,LabelTitle,LabelContent, ButtonContainer } from "./styles";
import Button from "components/Button/Button";
import { useEmployees } from "components/EmployeeContext/EmployeeContext";

// function EmployeeCard(props: Employee) {
// 	const { name, surname, age, jobPosition } = props;
function EmployeeCard({ id, name, surname, age, jobPosition }: Employee) {
	const { removeEmployee } = useEmployees();

	const handleDelete = () => {
		removeEmployee(id);
	  };

	return (
		<>
			<EmployeeCardContainer>
				<EmployeeCardContent>
					<TextContainer>
						<LabelTitle>Name:</LabelTitle>
						<LabelContent>{name}</LabelContent>
					</TextContainer>
					<TextContainer>
						<LabelTitle>Surname:</LabelTitle>
						<LabelContent>{surname}</LabelContent>
					</TextContainer>
					<TextContainer>
						<LabelTitle>Age:</LabelTitle>
						<LabelContent>{age}</LabelContent>
					</TextContainer>
					<TextContainer>
						<LabelTitle>Job Position: </LabelTitle>
						<LabelContent>{jobPosition}</LabelContent>
					</TextContainer>
					<ButtonContainer>
						<Button name="Delete" onClick={handleDelete} style={{width:"100%"}}></Button>
					</ButtonContainer>
				</EmployeeCardContent>
			</EmployeeCardContainer>
		</>
	);
}

export default EmployeeCard;
