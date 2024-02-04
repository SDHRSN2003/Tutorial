import { useState } from 'react';
import axios from 'axios';

const SignupForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async() =>{
        try{
            const response = await axios.post('http://localhost:5000/user/register',{
                username,
                password
            });
            console.log('Signup successful', response.data);
        }catch(error){
            console.log("Signup failed", error);
        }
    };

    return (
        <div className='max-w-sm mx-auto mt-8 p-6 bg-white rounded-md shadow-md'>
            <h2 className='text-2xl font-semibold mb-6'>Signup Form</h2>
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
                <label className='block mb-4'>
                    Password:
                    <input
                     className='border border-grey-300 p-2 w-full'
                     type='text'
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                    /> 
                </label>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
                type='button'
                onClick={handleSignup}>
                    Signup
                </button>
            </form>
        </div>
    );
};

export default SignupForm;