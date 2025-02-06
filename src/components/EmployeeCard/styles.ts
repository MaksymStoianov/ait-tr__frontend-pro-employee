import styled from "@emotion/styled";

export const EmployeeCardContainer = styled.div`
	/* display: grid;
	grid-template-columns: repeat(2, 1fr); */
	/* display: flex; */
	background-color: #f9f9f9;
	border: 2px solid #112233;
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
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	font-family: Lato sans-serif;
	padding: 20px;
`;

export const TextContainer = styled.div``

export const LabelTitle = styled.p`
opacity: 0.8;
margin-bottom: 5px;
`

export const LabelContent = styled.p`
font-size:24px;
font-weight: bold;
color: rgba(0,0,0,0.9);
`

export const ButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
border-radius: 4px;

&:active {
	transform: scale(0.95);
}
`