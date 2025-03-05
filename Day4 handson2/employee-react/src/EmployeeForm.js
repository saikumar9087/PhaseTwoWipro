import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EmployeeForm = () => {
  const initialValues = {
    name: '',
    address: '',
    dept: '',
    manager: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    dept: Yup.string().required('Department is required'),
    manager: Yup.string().required('Manager is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:8000/api/employees/add', values)
      .then(response => {
        console.log('Employee added:', response.data);
        resetForm();
      })
      .catch(error => console.error('Error adding employee:', error));
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label>Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <Field name="address" type="text" className="form-control" />
            <ErrorMessage name="address" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Department</label>
            <Field name="dept" type="text" className="form-control" />
            <ErrorMessage name="dept" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label>Manager</label>
            <Field name="manager" type="text" className="form-control" />
            <ErrorMessage name="manager" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Add Employee</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeForm;
