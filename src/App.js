import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      //document.body.style.backgroundColor = '#042743'
      //showAlert("Dark mode enabled","success");
      document.body.style.background =
        "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      //document.body.style.backgroundColor = 'white'
      document.body.style.background =
        "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled", "success");
      //showAlert("Light mode enabled","success");

    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter your text here:" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
