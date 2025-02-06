import { Employee } from "components/EmployeeContext/types";
import { EmployeeCardContainer, EmployeeCardContent, TextContainer, LabelTitle, LabelContent, ButtonContainer } from "./styles";
import Button from "components/Button/Button";
import { useEmployees } from "components/EmployeeContext/EmployeeContext";

function EmployeeCard(props: Employee) {
  const { name, surname, age, jobPosition } = props;
  const { deleteEmployee } = useEmployees(); // Получаем функцию удаления сотрудника

  const handleDelete = () => {
    deleteEmployee(props.id); // Вызываем функцию удаления сотрудника
  };

  return (
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
          <LabelTitle>Job Position:</LabelTitle>
          <LabelContent>{jobPosition}</LabelContent>
        </TextContainer>
        <ButtonContainer>
          <Button name="Delete" style={{ width: "100%" }} onClick={handleDelete}></Button> {/* Добавляем обработчик на кнопку */}
        </ButtonContainer>
      </EmployeeCardContent>
    </EmployeeCardContainer>
  );
}

export default EmployeeCard;
