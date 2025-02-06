import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function EmployeePage() {
	const navigate = useNavigate();

	return (
		<div>
			<h2>404. Not Found</h2>
			<p>
				<Button name="На главную" onClick={() => navigate("/")} />
			</p>
		</div>
	);
}

export default EmployeePage;
