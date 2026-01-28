
import { Link } from 'react-router-dom'
import '../Pages/StylesRegister.css'
import { FaUserAlt } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

export default function Login() {
  return (
    <>
    <main className='class-body'>
     <div className='wrapper'>
        <form action="" >
            <h1 className='h1uno'>Login</h1>
            <div  className='input-box'>
                <input type="text" placeholder='Username' required/> 
                <FaUserAlt className='bx bxs-user icon'/>
                
            </div> 
            <div className='input-box'>
                <input type="password" placeholder='password' required /> 
                <GiPadlock className='bx bxs-lock-alt icon'/>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />Remenber me</label>
                <Link to='/'>Forgot Password</Link>
            </div>
            <button type='submit' className='btn'>Login</button>

            <div className='register-link'>
                Don't have an account? <Link to='/' className='anclo'>Register</Link>
            </div>
        </form>   
     </div>
    </main> 
    </>
  )
}
