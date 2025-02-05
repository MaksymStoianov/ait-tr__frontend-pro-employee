import { Employee } from "components/EmployeeContext/types";

export interface EmployeeFormProps {
	onCreate: (data: Employee) => void;
}
