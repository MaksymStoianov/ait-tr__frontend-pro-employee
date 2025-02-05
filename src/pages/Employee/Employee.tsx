import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';

function EmployeePage() {
  const [employee, setEmployee] = useState<null | { fullName: string; age: number; jobTitle: string }>(null);

  const handleCreateEmployee = (data: { fullName: string; age: number; jobTitle: string }) => {
    setEmployee(data);
  };

  // TODO Вставить карточки цыклом map отобразить
  return (
    <div>
		<h2>EmployeePage</h2>
      {employee ? (
        <EmployeeCard employee={employee} />
      ) : (
        <p>No employee created yet.</p>
      )}
    </div>
  );
}

export default EmployeePage;
