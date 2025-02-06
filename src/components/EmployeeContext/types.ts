import { ReactNode } from "react";

export interface Employee {
	id: string;
	name: string;
	surname: string;
	age: number;
	jobPosition: string;
}

export interface EmployeeContextType {
	employees: Employee[];
	addEmployee: (employee: Employee) => void;
	deleteEmployee: (employee: Employee) => void;
	deleteAllEmployees: () => void;
}

export interface EmployeeProviderProps {
	children: ReactNode;
}
