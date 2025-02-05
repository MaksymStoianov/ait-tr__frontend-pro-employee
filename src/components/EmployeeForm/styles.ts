import styled from 'styled-components';

export const EmployeeFormContainer = styled.form`
  width: 590px;
  max-width: 400px;
  background: #f9f9f9;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  border: 3px dashed transparent;
  border-radius: 2px;
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const CheckboxLabel = styled.label`
  margin-left: 5px;
  font-size: 16px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;
