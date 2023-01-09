import React, {useState} from 'react';

import './App.css';
import Home from './components/Home';
import Form from './components/Form';



function App() {
  
  const [formulario, setFormulario] = useState(null)

  return (
    <div className=''>
      { formulario ? <Home/> : <Form/> }
    </div>

  );
}

export default App;
