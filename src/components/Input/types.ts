import { ChangeEvent } from "react";

export interface InputProps {
	name: string;
	type?: "text" | "email" | "password" | "tel" | "url" | "number" | "date";
	placeholder?: string;
	label?: string;
	id?: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	autoComplete?: string;
}
