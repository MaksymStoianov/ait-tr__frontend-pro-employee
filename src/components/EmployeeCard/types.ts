export interface EmployeeCardValues {
	name: string;
	surname: string;
	age: number;
	jobPosition: string;
}

export interface EmployeeCardProps {
	employee: EmployeeCardValues;
	onCreate: (data: EmployeeCardValues) => void;
}
