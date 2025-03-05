import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';



function App() {
  return (
    <div className="App">
       <h1>Employee Management System</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default App;
