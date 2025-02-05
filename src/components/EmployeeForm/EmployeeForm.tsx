import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeFormContainer } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required("Required field")
			.min(5, "Min 2 symbols")
			.max(50, "Max 50 symbols"),
		surname: Yup.string()
			.required("Required field")
			.min(5, "Min 2 symbols")
			.max(50, "Max 50 symbols"),
		age: Yup.number()
			.required("Required field")
			.min(18, "Min age 18")
			.max(80, "Max age 80")
			.typeError("Type number"),
		jopPosition: Yup.string().max(30, "Max 30 symbols"),
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			age: "",
			jopPosition: "",
		} as EmployeeFormValues,
		validationSchema,
		validateOnChange: false,
		onSubmit: (values: EmployeeFormValues) => {
			console.table(values);
		},
	});

	return (
		<EmployeeFormContainer onSubmit={formik.handleSubmit}>
			<Input
				name="name"
				id="name_id"
				label="Name*"
				placeholder="Enter your name"
				value={formik.values.name}
				onChange={formik.handleChange}
				error={formik.errors.name}
			/>
			<Input
				name="surname"
				id="surname_id"
				label="Surname*"
				placeholder="Enter your surname"
				value={formik.values.surname}
				onChange={formik.handleChange}
				error={formik.errors.surname}
			/>
			<Input
				name="age"
				id="age_id"
				label="Age*"
				placeholder="Enter your age"
				value={formik.values.age}
				onChange={formik.handleChange}
				error={formik.errors.age}
			/>
			<Input
				name="jop_position"
				id="jop_position_id"
				label="jop_position*"
				placeholder="Enter your jop position"
				value={formik.values.jopPosition}
				onChange={formik.handleChange}
				error={formik.errors.jopPosition}
			/>
			<Button name="CREATE" type="submit" />
		</EmployeeFormContainer>
	);
}

export default EmployeeForm;
