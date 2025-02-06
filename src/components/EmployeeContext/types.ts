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
    deleteEmployee: (id: string | number) => void; //  Теперь принимает id
    deleteAllEmployees: () => void;
}


export interface EmployeeProviderProps {
	children: ReactNode;
}
