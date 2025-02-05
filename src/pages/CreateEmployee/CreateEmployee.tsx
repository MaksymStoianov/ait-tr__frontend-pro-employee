import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';

function CreateEmployeePage() {
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
