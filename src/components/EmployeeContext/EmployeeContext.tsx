import { createContext, useContext, useState } from "react";
import { Employee, EmployeeContextType, EmployeeProviderProps } from "./types";

// Создать хранилище (контекст).
export const EmployeeContext = createContext<EmployeeContextType | undefined>(
	undefined
);

/**
 * Пользовательский хук для доступа к EmployeeContext.
 */
export const useEmployees = (): EmployeeContextType => {
	return useContext(EmployeeContext)!;
};

export function EmployeeProvider({ children }: EmployeeProviderProps) {
	// Создать состояние.
	const [employees, setEmployees] = useState<Employee[]>([]);

	/**
	 * Добавляет новый `Employee`.
	 */
	const addEmployee = (employee: Employee) => {
		return setEmployees([...employees, employee]);
	};

	const removeEmployee = (id: string | number) => {
		setEmployees(employees.filter(employee => employee.id !== id));
	};

	const removeAllEmployees = () => {
		setEmployees([]); 
	};

	// Создать провайдер (обертка), которая позволит получить значение из контекста.
	// Добавляем значение, к которому и необходим доступ.
	return (
		<EmployeeContext.Provider value={{ employees, addEmployee, removeEmployee, removeAllEmployees }}>
			{children}
		</EmployeeContext.Provider>
	);
}
