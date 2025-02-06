//import React from 'react';
import { useEmployees } from 'components/EmployeeContext/EmployeeContext';
import { Employee } from 'components/EmployeeContext/types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { FormContainer, FormContent, FormFooter } from './styles';
import { toast, ToastContainer } from 'react-toastify'; // Добавьте ToastContainer сюда
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

function EmployeeForm() {
  const { addEmployee } = useEmployees();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required field')
      .min(2, 'Min 2 symbols')
      .max(50, 'Max 50 symbols'),
    surname: Yup.string().required('Required field').max(15, 'Max 15 symbols'),
    age: Yup.number()
      .required('Required field')
      .min(18, 'Min age 18')
      .max(80, 'Max age 80')
      .typeError('Type number'),
    jobPosition: Yup.string()
      .required('Required field')
      .max(30, 'Max 30 symbols'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: 0,
      jobPosition: '',
    } as Employee,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: Employee, { resetForm }) => {
      console.table(values);

      // Добавить новые данные
      const newEmployee = { ...values, id: uuidv4() };
      addEmployee(newEmployee);
      // addEmployee(values);

      // Очистка формы
      resetForm();

      // Всплывающее сообщение
      toast.success('Employee added successfully!', {
        autoClose: 1000, // Устанавливаем время показа уведомления в 1 секунду
        hideProgressBar: true, // Убираем прогресс-бар
        position: "bottom-right", // Опускаем сообщение ниже
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
          value={formik.values.age.toString()}
          onChange={formik.handleChange}
          error={formik.errors.age}
        />
        <Input
          name="jobPosition"
          id="job_position_id"
          label="Job Position*"
          placeholder="Enter your job position"
          value={formik.values.jobPosition}
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
        />
      </FormContent>
      <FormFooter>
        <Button name="Create" type="submit" />
        <Button name="Reset" type="button" onClick={() => formik.resetForm()} /> {/* Кнопка сброса формы */}
      </FormFooter>
      <ToastContainer position="bottom-right" /> {/* Контейнер для всплывающих сообщений */}
    </FormContainer>
  );
}

export default EmployeeForm;
