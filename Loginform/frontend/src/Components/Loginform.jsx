import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar} from "notistack";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, TextField } from "@mui/material";
//import { useHistory } from "react-router-dom";
//import Dashboard from "./Dashboard.jsx";

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  //const history = useHistory();
  const handleLogin = async () => {
    if(!username || !password){
      enqueueSnackbar("Fill the informations properly.", { variant: "error" });
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        username,
        password,
      });

      navigate("/dashboard", { replace: true });
      console.log("Login successful", response.data);
    } catch (error) {
      enqueueSnackbar("Login failed", { variant: "error" });
      console.error("Login failed", error);
    }
  };
  const handlePasswordVisibility = () =>{
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md shadow-md">
        <h2 className="text-2xl center font-bold mb-6 font-times text-center">
          Login Form
        </h2>
        <form>
          <label className="block mb-4">
            Username:
            <input
              className="border border-grey-300 p-2 w-full"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="block mb-4">Password:</label>
          <TextField size = "small"
            className="padding bottom-4"
            type={showPassword ? "text":"password"}
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-center w-full"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
