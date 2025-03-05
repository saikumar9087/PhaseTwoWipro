
import './App.css';
import { First1,First2 } from './First';
import { Second1,Second2 } from './Second';
import { Third1,Third2 } from './Third';
import { Fourth1,Fourth2 } from './Fourth';

import { StudentFunction1,StudentFunction2 } from './Student';


function App() {
  const std1 = {
    name: 'sai kumar',
    address: 'Hyd',
    score: '98'
  };

  const std2={
    name: 'sathwik',
    address:'Hyd',
    score:'90'
  };
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <First2 />
      <Second2 />
      <Third2 />
      <Fourth2 />
      <br/>
      <First1/>
      <Second1 />
      <Third1 />
      <Fourth1 />

      <br/>
      <br/>

      <StudentFunction1
      name={std1.name}
      address={std1.address}
      score={std1.score}
       />

    <StudentFunction2
      name={std2.name}
      address={std2.address}
      score={std2.score}
       />

    </div>
  );
}

export default App;
