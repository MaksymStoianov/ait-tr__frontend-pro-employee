import styled from "@emotion/styled";

const InputContainerGap = "4px";

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${InputContainerGap};
	width: 100%;
`;

export const Label = styled.label`
	font-size: 16px;
	color: #6f6f6f;
`;

const ErrorMessageHeight = "30px";

export const ErrorMessage = styled.div`
	font-size: 16px;
	color: rgb(214, 63, 63);
	min-height: ${ErrorMessageHeight};
`;

type InputElementProps = {
	hasError: boolean;
};

export const InputElement = styled.input<InputElementProps>`
	width: 100%;
	height: 50px;
	padding: 12px;
	margin-bottom: ${({ hasError }) =>
		hasError ? "0px" : `calc(${InputContainerGap} + ${ErrorMessageHeight})`};
	outline: none;
	border: 1px solid black;
	border-radius: 4px;
	font-size: 16px;

	&::placeholder {
		color: #a19f9f;
	}
`;
