import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
      
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  // }

  const toggleMode = ()=> {        //for custom palet const toggleMode = (cls)=>
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("DarkMode has been enabled", "success");
      // document.title = 'Textutils';
      // setInterval(() => {
      //   document.title = 'Textutils is amazing mode';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils now';
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled", "success");
    }
  }
  return (
  <>
  <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>} />
    </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
