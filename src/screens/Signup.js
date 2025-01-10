import React,{ useState } from 'react'
import {  Link ,useNavigate} from 'react-router-dom'                 
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Signup() {

  const [credintials,setcredintials] = useState({name:"",email:"",password:"",geolocation:""})
  let navigate = useNavigate();

  const  handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method:"Post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({name:credintials.name,email:credintials.email,password:credintials.password,location:credintials.geolocation}),
    });
    const json = await response.json()
    // console.log(json);
    if (!response.ok) {
      // If the response status is not OK, show an alert with the error message
      alert(json.error || 'Failed to sign up!.Enter valid Credintials.');
    } else {
      // On successful signup, you can redirect the user or show a success message
      alert('Signup successful!');
      navigate('/login')
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
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' value={credintials.name} onChange={onChange}/>
        </div>
        <div className="m-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' value={credintials.email} onChange={onChange} />
        </div>
        <div className="m-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credintials.password} onChange={onChange} />
        </div>
        <div className="m-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">address</label>
          <input type="text" className="form-control" name='geolocation' value={credintials.geolocation} onChange={onChange} />
        </div>

        
        <button type="submit" className=" m-3 btn btn-success">Submit</button>
        <Link to="/login" className="m-3 btn btn-danger" >Already a user</Link>
       
      </form>
      <Footer/>

    </div>
  )
}
