import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';

const Employee: React.FC = () => {
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
