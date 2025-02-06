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
	 * Добавляет нового сотрудника (`Employee`).
	 */
	const addEmployee = (employee: Employee) => {
		const newEmployee = { ...employee, id: crypto.randomUUID() }; //  Генерация уникального string ID
		setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
	};
	

	/**
	 * Удаляет сотрудника (`Employee`) по `id`.
	 */
	const deleteEmployee = (id: string | number) => {
		setEmployees((prevEmployees) => prevEmployees.filter(e => e.id !== id));
	};
	
	

	/**
	 * Удаляет всех сотрудников (`Employee`).
	 */
	const deleteAllEmployees = () => {
		setEmployees([]); //  Работает правильно
	};

	// Создать провайдер (обертку), которая позволит получить значение из контекста.
	// Добавляем значение, к которому необходим доступ.
	return (
		<EmployeeContext.Provider
			value={{ employees, addEmployee, deleteEmployee, deleteAllEmployees }}
		>
			{children}
		</EmployeeContext.Provider>
	);
}
