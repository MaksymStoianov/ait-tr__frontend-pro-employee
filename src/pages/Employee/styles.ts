import styled from "@emotion/styled";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EmployeeCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
  padding: 20px;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #b1230a;
  padding: 16px;
  margin: 20px;
  width: 600px; 
  border-radius: 8px;
  color: whitesmoke;
  font-size: 24px;

  &:hover {
    background-color: darkred;
    cursor: pointer;
  }
`;
