import { useEmployees } from "components/EmployeeContext/EmployeeContext";
import { Employee } from "components/EmployeeContext/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FormContainer, FormContent, FormFooter } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeeForm() {
  const { addEmployee } = useEmployees();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required field")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    surname: Yup.string()
      .required("Required field")
      .max(15, "Max 15 symbols"),
    age: Yup.number()
      .required("Required field")
      .min(18, "Min age 18")
      .max(80, "Max age 80")
      .typeError("Type number"),
    jobPosition: Yup.string()
      .required("Required field")
      .max(30, "Max 30 symbols"),
  });

  const formik = useFormik<Employee>({
    initialValues: {
      id: uuidv4(),
      name: "",
      surname: "",
      age: 0,
      jobPosition: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.table(values);

      // Добавить нового сотрудника
      addEmployee(values);

      // Очистить форму
      resetForm();

      // Всплывающее сообщение
      toast.success("Employee added successfully!", {
        autoClose: 1000,
        hideProgressBar: true,
        position: "bottom-right",
      });
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormContent>
        <Input
          name="name"
          id="name_id"
          label="Name*"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
          autoComplete="off"
        />
        <Input
          name="surname"
          id="surname_id"
          label="Surname*"
          placeholder="Enter your surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.errors.surname}
          autoComplete="off"
        />
        <Input
          name="age"
          id="age_id"
          label="Age*"
          placeholder="Enter your age"
          value={formik.values.age === 0 ? "" : formik.values.age.toString()}
          onChange={(e) => {
            const value = e.target.value;
            formik.setFieldValue("age", value === "" ? 0 : Number(value));
          }}
          error={formik.errors.age}
          autoComplete="off"
        />
        <Input
          name="jobPosition"
          id="job_position_id"
          label="Job Position*"
          placeholder="Enter your job position"
          value={formik.values.jobPosition}
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
          autoComplete="off"
        />
      </FormContent>
      <FormFooter>
        <Button name="Reset" type="button" onClick={() => formik.resetForm()} /> {/* Переместили кнопку Reset */}
        <Button name="Create" type="submit" />
      </FormFooter>

      <ToastContainer position="bottom-right" />
    </FormContainer>
  );
}

export default EmployeeForm;
