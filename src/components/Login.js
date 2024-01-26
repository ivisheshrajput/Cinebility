import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidation} from "../utils/checkValidation";

const Login = () => {
    const [signUp, setSignUp] = useState(false);
    const email=useRef(null);
    const password=useRef(null);
    const [errMessage, setErrMessage]=useState("");
    const handleClick = () => {
        setSignUp(!signUp)
    }
    const handleButtonClick=()=>{
       const message= checkValidation(email.current.value, password.current.value)
        // console.log(email.current.value)
        // console.log(password.current.value)
        setErrMessage(message);
    }
    
    return (
        <div>
            <Header />
            <form onSubmit={(e)=>e.preventDefault} className=' flex flex-col mx-auto justify-center bg-black rounded-md   p-5  w-3/12 opacity-70 '>
                <h1 className='text-white'>Cinebility</h1>

                <input placeholder='Username' ref={email} type='email' className='p-2 rounded-lg my-2'></input>
                <input placeholder="Password" ref={password} type="password" className='p-2 rounded-lg my-2'></input>
                {signUp?<input placeholder='Enter Phone No' type="phone" className='p-2 rounded-lg my-2'></input>:""}
                {signUp ? <button className=' bg-yellow-500 p-2 rounded-lg text-white my-2'>Sign Up</button>:<button className=' bg-yellow-500 p-2 rounded-lg text-white my-2' onClick={handleButtonClick}>Sign In</button>}
                <p>{errMessage}</p>
                {signUp? <p className='text-yellow-500 '>Already Have a account? You can <u className="cursor-pointer " onClick={handleClick}>Sign In</u> from here</p>:<p className='text-yellow-500 '>Don't have account? You can <u className="cursor-pointer " onClick={handleClick}>Sign Up</u> from here</p>}
            </form>

        </div>
    )
}

export default Login