import styled from "@emotion/styled";

export const EmployeeCardContainer = styled.div`
  background-color: #f9f9f9;
  border: 4px solid #112233; 
  padding: 20px;
  margin: 20px;
  position: relative;
  width: 490px;
  border-radius: 6px;

  &:hover {
    border-color: #0000ff;
  }
`;

export const EmployeeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  font-family: "Lato", sans-serif;
  padding: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
  margin-bottom: 10px;
  align-items: center; 
`;

export const LabelTitle = styled.p`
  opacity: 0.8;
  margin-bottom: 0; 
  flex: 1; 
`;

export const LabelContent = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 0; 
  flex: 1; 
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border-radius: 4px;

  &:active {
    transform: scale(0.95);
  }
`;
