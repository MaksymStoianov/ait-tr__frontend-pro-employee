// src/pages/Employee/Employee.tsx
import React, { useState } from 'react';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';

const Employee: React.FC = () => {
  const [employee, setEmployee] = useState<null | { fullName: string; age: number; jobTitle: string }>(null);

  const handleCreateEmployee = (data: { fullName: string; age: number; jobTitle: string }) => {
    setEmployee(data);
  };

  return (
    <div>
      <h1>Employee</h1>
      {employee ? (
        <EmployeeCard employee={employee} />
      ) : (
        <p>No employee created yet.</p>
      )}
    </div>
  );
}

export default Employee;
