import { ReactNode } from "react";

export interface Employee {
	id: number | string;
	name: string;
	surname: string;
	age: number;
	jobPosition: string;
}

export interface EmployeeContextType {
	employees: Employee[];
	addEmployee: (employee: Employee) => void;
	removeEmployee: (id: number | string) => void;
}

export interface EmployeeProviderProps {
	children: ReactNode;
}
