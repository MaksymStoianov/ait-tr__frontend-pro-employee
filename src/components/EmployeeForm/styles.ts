import styled from "@emotion/styled";

export const FormContainer = styled.form`
  background-color: #f9f9f9;
  border: 2px solid #112233;
  padding: 20px;
  margin: 20px;
  position: relative;
  border: 4px solid #112233; /* Увеличенная ширина бордера */
  border-radius: 5px; /* Добавлено border-radius */
  width: 100%; /* Теперь контейнер занимает 100% ширины экрана */
  max-width: 600px; /* Максимальная ширина 600px */
  
  &:hover {
    border-color: #0000ff;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px; /* Добавлено border-radius */
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
  border-radius: 5px; /* Добавлено border-radius */
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1.4px solid #666666;
  border-radius: 5px; /* Добавлено border-radius */
  font-size: 16px;
  color: #333333;
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
  gap: 30px;
  border-radius: 5px; /* Добавлено border-radius */
`;
