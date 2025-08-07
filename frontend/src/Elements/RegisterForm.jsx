import React from 'react';

 function RegisterForm() {
  return (
    <div className="p-4 border rounded shadow-sm bg-white mb-3">
      <div className="mb-3">
        <h4 className='text-info'>Join HealthNexus</h4>
        <p className="mb-0"> Are you a doctor?
       <a href="" style={{ color: "#f90", textDecoration: "none" }}> Register Here </a> </p>
      </div>
      <hr />
      <form>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="Full Name" style={{ fontWeight: 200 }}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input type="date" className="form-control" placeholder="mm/dd/yyy" style={{ fontWeight: 200 }}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input type="number" className="form-control" placeholder="Mobile Number" style={{ fontWeight: 200 }}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Email" style={{ fontWeight: 200 }}/>
      </div>

      <div className="mb-3 text-center">
       <label className="form-label d-block">Gender</label>
          <div className="d-flex justify-content-center gap-5">
             <div className="d-flex align-items-center gap-1"> {/*Radios spacing ke liye */}
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male" className="mb-0">Male</label>
             </div>
          <div className="d-flex align-items-center gap-1">
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female" className="mb-0">Female</label>
          </div>
         </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Create Password</label>
        <input type="password" className="form-control" placeholder="Password" style={{ fontWeight: 200 }}/>
      </div>
      </form>
      <button className="btn btn-info w-100 text-white fw-bold">Register</button>
    </div>
  );
}
export default RegisterForm