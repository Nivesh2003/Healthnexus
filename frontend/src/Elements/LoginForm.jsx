import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handlesubmit(e) {
    e.preventDefault();
    const user = { email, password };
    const response = await axios.post('http://localhost:8000/api/login', user);
    const data = response.data;
    if (data.msg === "success") {

      sessionStorage.setItem("authToken", data.token);
      sessionStorage.setItem("userType", data.type);

      window.alert("Login successful!");
      if (data.type === "patient") {
        console.log(data.type);
        navigate('/patient');
      } else if (data.type === "doctor") {
        console.log(data.type);
        navigate('/doctor-login');
      } else {
        window.alert("Some error occurred contact with support");
        navigate('/login');
      }
    } else {
      window.alert("Login failed!");
    }
  }

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <form action="" onSubmit={handlesubmit}>
        <div className="mb-3">
          <h4 className='text-info'>Login</h4>
        </div>
        <hr />
        <div className="mb-3">
          <label className="form-label">Mobile Number / Email ID</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Mobile Number / Email ID" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" style={{ fontWeight: 200 }} />
        </div>

        <div className="d-flex justify-content-between mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="#" className="text-decoration-none text-info ">Forgot password?</a>
        </div>
        <input type="submit" value="Login" className='btn btn-primary form-control ' />
      </form>
    </div>
  );
}
export default LoginForm
