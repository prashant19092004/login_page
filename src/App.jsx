import React, { useRef } from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const App = () => {
  const firstLabel = useRef();
  const secondLabel = useRef();

  let ani1 = () => {
    firstLabel.current.style.transform = 'translate(0px)';
  }
  let ani1remove = () => {
    firstLabel.current.style.transform = 'translateY(18px)';
  }

  let ani2 = () => {
    secondLabel.current.style.transform = 'translateY(0px)';
  }
  let ani2remove = () => {
    secondLabel.current.style.transform = 'translateY(18px)';
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[100%] h-[100vh] bg-[url('https://img.freepik.com/free-photo/purple-background-with-white-light-it_1340-36256.jpg?t=st=1728639128~exp=1728642728~hmac=c435927381d98383e1446a9e85bbb12326e677ac48005e5e7abc9ddac6b8b271&w=740')] bg-cover">
      <div className='flex flex-col px-20 py-16 gap-0 w-[35vw] form_div'>
        <div className="flex gap-2 items-center mb-3">
          <div className="w-5 h-5 bg-white rounded-lg"></div>
          <p className='text-white'>LOGO</p>
        </div>
        <p className='text-white'>Log in to your Account</p>
        <lable ref={firstLabel} for="username" className="text-white mt-4 input_label">Username</lable>
        <div className='inputbox'>
          <input type="text" onFocus={ani1} onBlur={ani1remove} className='bg-transparent border-0' />
        </div>
        <lable ref={secondLabel} for="password" className="text-white mt-4 input_label">Password</lable>
        <div className='inputbox'>
          <input type="text" onFocus={ani2} onBlur={ani2remove} className='bg-transparent border-0' />
        </div>
        <Link to="/home">
          <button className='text-white w-[100%] py-1 login_button bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm mt-8'>Login</button>
        </Link>
      </div>
      <p className='text-white text-sm'>Can't Login?</p>
    </div>
  )
}

export default App