import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';

const CreateEmployee: React.FC = () => {
  const handleCreateEmployee = (data: { fullName: string; age: number; jobTitle: string }) => {
    console.log('Employee created:', data);
    
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <EmployeeForm onCreate={handleCreateEmployee} />
    </div>
  );
}

export default CreateEmployeePage;
