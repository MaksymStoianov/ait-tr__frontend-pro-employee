export interface EmployeeCardValues {
	id: string |number;
	name: string;
	surname: string;
	age: number;
	jobPosition: string;
}

export interface EmployeeCardProps {
	employee: EmployeeCardValues;
	onCreate: (data: EmployeeCardValues) => void;
}
