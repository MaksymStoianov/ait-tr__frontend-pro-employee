import styled from "@emotion/styled";

export const EmployeeCardContainer = styled.div`
	background-color: #f9f9f9;
	border: 5px solid #112233;
	padding: 20px;
	margin: 20px;
	position: relative;

	&:hover {
		border-color: #0000ff;
	}
`;

export const EmployeeCardContent = styled.div`
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
