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
    setEmployees([...employees, employee]);
  };

  /**
   * Удаляет `Employee`.
   */
  const deleteEmployee = (employee: Employee) => {
    setEmployees(employees.filter(e => e.name !== employee.name)); // Удаляет сотрудника по имени
  };

  // Создать провайдер (обертка), которая позволит получить значение из контекста.
  // Добавляем значение, к которому и необходим доступ.
  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
}
