// src/pages/CreateEmployee/CreateEmployee.tsx
import React from 'react';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';

const CreateEmployee: React.FC = () => {
  const handleCreateEmployee = (data: { fullName: string; age: number; jobTitle: string }) => {
    console.log('Employee created:', data);
    
  };

  return (
    <div>
      <h1>Create Employee</h1>
      <EmployeeForm onCreate={handleCreateEmployee} />
    </div>
  );
}

export default CreateEmployee;
