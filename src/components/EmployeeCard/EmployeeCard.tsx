// src/components/EmployeeCard/EmployeeCard.tsx
import React from 'react';

interface EmployeeCardProps {
  employee: { fullName: string; age: number; jobTitle: string };
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div>
      <h3>Employee Card</h3>
      <p><strong>Name:</strong> {employee.fullName}</p>
      <p><strong>Age:</strong> {employee.age}</p>
      <p><strong>Job Position:</strong> {employee.jobTitle}</p>
    </div>
  );
}

export default EmployeeCard;
