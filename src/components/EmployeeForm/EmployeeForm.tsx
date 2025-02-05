import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormContainer } from './styles';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface EmployeeFormValues {
  fullName: string;
  age: number;
  jobTitle: string;
  agreement: boolean;
}

const EmployeeForm: React.FC<{ onCreate: (data: EmployeeFormValues) => void }> = ({ onCreate }) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Required field')
      .min(5, 'Min 5 symbols')
      .max(50, 'Max 50 symbols'),
    age: Yup.number()
      .required('Required field')
      .min(18, 'Min age 18')
      .max(80, 'Max age 80')
      .typeError('Type number'),
    jobTitle: Yup.string()
      .max(30, 'Max 30 symbols'),
    agreement: Yup.boolean()
      .oneOf([true], 'Accept agreement')
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      age: 0,
      jobTitle: '',
      agreement: false
    } as EmployeeFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
      onCreate(values);
    }
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name='fullName'
        id='full_name_id'
        label='Full Name*'
        placeholder="Enter your full name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.errors.fullName}
      />
      <Input
        name='age'
        id='age_id'
        label='Age*'
        placeholder="Enter your age"
        value={formik.values.age.toString()} 
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <Input
        name='jobTitle'
        id='job_title_id'
        label='Job Title'
        placeholder="Enter your job title"
        value={formik.values.jobTitle}
        onChange={formik.handleChange}
        error={formik.errors.jobTitle}
      />
      <CheckboxContainer>
        <Checkbox
          type='checkbox'
          id='agree_id'
          name='agreement'
          checked={formik.values.agreement}
          onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="agree_id">I Agree</CheckboxLabel>
      </CheckboxContainer>
      <Button name='CREATE' type='submit' disabled={!formik.values.agreement} />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
