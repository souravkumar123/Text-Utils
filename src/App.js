
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from "react";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
  // import {
  //   BrowserRouter,
  //   Routes,
  //   Route,
    
  // } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');//Whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },3000)
  }
  const removeBodyClasses =() =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-light')


  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  
  return (
    
    // <BrowserRouter>
    <>
      {/* // <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /><Alert alert={alert} /><div className="container">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}

        {/* <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} /> */}
        <TextForm showAlert={showAlert} heading="Enter text to analyze"  mode={mode}/>
        {/* </Routes> */}
      </div>
  {/* </BrowserRouter> */}
  </>
  );
}

export default App;
