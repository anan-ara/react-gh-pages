import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const data = {
//     id: 512,
//      name: "Hi",
//      email: "rhodes@hmc.edu",
//      phone: "(909) 555-1212"
//    }
const data = [
  {
    id: 512,
     name: "Neil Rhodes",
     email: "rhodes@hmc.edu",
     phone: "(909) 555-1212"
   },
  {
    id: 787,
     name: "Barack Obama",
     email: "ex-prez@whitehouse.gov",
     phone: "(312) 555-1212"
   }
];

const jsx_data = data.map(e => 
    <div key={e.id} className='data'>
      <span className='name'>
        {e.name}
      </span>
      <span className='email'>
        {e.email}
      </span>
      <span>
        {e.phone}
      </span>
    </div>
)

ReactDOM.render(
  <React.StrictMode>
    <h1>
      People
    </h1>
    {jsx_data}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
