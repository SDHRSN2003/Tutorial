import { useState } from "react";
import Loginform from "./Components/Loginform.jsx";
import SignupForm from "./Components/SignupForm.jsx";

function App() {
  const[showLogin, setShowLogin] = useState(true);

  const toggleForm = () =>{
    setShowLogin((prev)=>(!prev));
  };
  return (
    <div className="App">
      <header className="App-header">
        {showLogin ? <Loginform/> : <SignupForm/>}
        <p>
          {showLogin ? "Don't have an account ?" : "Already have an account ?"}
          <button className="text-blue-500" onClick={toggleForm}>
            {showLogin ? "Register" : "Login"}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
