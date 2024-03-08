import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, TextField } from '@mui/material';

const SignupForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const {enqueueSnackbar} = useSnackbar();
    const handleSignup = async() =>{
        if(!username || !password){
            enqueueSnackbar("Fill the credientials properly", {variant: "error"});
        }
        try{
            const response = await axios.post('http://localhost:5000/user/register',{
                username,
                password
            });
            enqueueSnackbar("You have been registered successfully", {variant: "success"});
            console.log('Signup successful', response.data);
        }catch(error){
            enqueueSnackbar("Signup failed", {variant: "error"});
            console.log("Signup failed", error);
        }
    };
    const handlePasswordVisibility = () =>{
        setShowPassword(!showPassword);
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className='max-w-sm mx-auto mt-8 p-6 bg-white rounded-md shadow-md'>
            <h2 className='text-2xl font-bold mb-6 font-times text-center'>Signup Form</h2>
            <form>
                <label className='block mb-4'>
                    Username:
                    <input
                     className='border border-grey-300 p-2 w-full'
                     type='text'
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}    
                    />
                </label>
                <label className='block mb-4'>Password: </label>
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
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-center w-full'
                type='button'
                onClick={handleSignup}>
                    Register
                </button>
            </form>
        </div>
        </div>
    );
};

export default SignupForm;