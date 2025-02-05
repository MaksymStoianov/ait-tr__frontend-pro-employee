import styled from "@emotion/styled";

export const FormContainer = styled.form`
	background-color: #f9f9f9;
	border: 5px solid #112233;
	padding: 20px;
	margin: 20px;
	position: relative;

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
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
	font-size: 16px;
	text-align: left;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 15px;
	border: 1.4px solid #666666;
	border-radius: 2px;
	font-size: 16px;
	color: #333333;
`;

export const FormFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 20px;
	box-sizing: border-box;
`;
