import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Login() {
  const [credintials,setcredintials] = useState({email:"",password:""})
  let navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BACKEND_URL;

  const  handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch(`${baseURL}/api/auth/login`,{
      method:"Post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email:credintials.email,password:credintials.password}),
    });
    const json = await response.json()
    // console.log(json);
    if (!response.ok) {
      // If the response status is not OK, show an alert with the error message
      alert(json.error || 'Failed to sign up!.Enter valid Credintials.');
    } else {
      localStorage.setItem("authToken", json.authToken)
      // console.log(localStorage.getItem("authToken"))
      // On successful signup, you can redirect the user or show a success message
      navigate('/')
      // Optionally, redirect the user to another page, e.g., login
      // history.push('/login');
    }
  }

  const onChange = (e) =>{
    setcredintials({...credintials,[e.target.name]: e.target.value})
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div className="m-3">
        <div ><h3>Login</h3></div>
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' value={credintials.email} onChange={onChange} />
        </div>
        <div className="m-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credintials.password} onChange={onChange} />
        </div>
      
        
        <button type="submit" className=" m-3 btn btn-success">Submit</button>
        <Link to="/signup" className="m-3 btn btn-danger" >I'm a new user</Link>
       
      </form>
      <Footer/>
    </div>
  )
}
