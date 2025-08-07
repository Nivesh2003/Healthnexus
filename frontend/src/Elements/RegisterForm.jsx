import React, { useState } from 'react';
import axios from 'axios';

 function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");

  async function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      fullName,
      dateOfBirth,
      mobileNumber,
      email,
      gender,
      password,
      userType
    };
    
    try {
      const response = await axios.post('http://localhost:8000/api/user/add', userData);
      const data = response.data;
      if(data.msg === "success"){
        window.alert("Registration successful!");
        // Reset form
        setFullName("");
        setDateOfBirth("");
        setMobileNumber("");
        setEmail("");
        setGender("");
        setPassword("");
        setUserType("user");
      } else {
        window.alert("Registration failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      window.alert("Registration failed: " + error.message);
    }
  }
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <div className="mb-3">
        <h4 className='text-info'>Join HealthNexus</h4>
        <p className="mb-0"> Are you a doctor?
       <a href="" style={{ color: "#f90", textDecoration: "none" }}> Register Here </a> </p>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">User Type</label>
        <select 
          className="form-control" 
          value={userType} 
          onChange={(e) => setUserType(e.target.value)}
          style={{ fontWeight: 200 }}
        >
          <option value="user">Regular User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Full Name" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ fontWeight: 200 }}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input 
          type="date" 
          className="form-control" 
          placeholder="mm/dd/yyy" 
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          style={{ fontWeight: 200 }}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input 
          type="number" 
          className="form-control" 
          placeholder="Mobile Number" 
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          style={{ fontWeight: 200 }}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ fontWeight: 200 }}
          required
        />
      </div>

      <div className="mb-3 text-center">
       <label className="form-label d-block">Gender</label>
          <div className="d-flex justify-content-center gap-5">
             <div className="d-flex align-items-center gap-1"> {/*Radios spacing ke liye */}
              <input 
                type="radio" 
                id="male" 
                name="gender" 
                value="male" 
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="male" className="mb-0">Male</label>
             </div>
          <div className="d-flex align-items-center gap-1">
            <input 
              type="radio" 
              id="female" 
              name="gender" 
              value="female" 
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="female" className="mb-0">Female</label>
          </div>
         </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Create Password</label>
        <input 
          type="password" 
          className="form-control" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ fontWeight: 200 }}
          required
        />
      </div>
      <button type="submit" className="btn btn-info w-100 text-white fw-bold">Register</button>
      </form>
    </div>
  );
}
export default RegisterForm