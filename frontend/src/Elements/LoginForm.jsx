import React from 'react';

 function LoginForm() {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
        <form action="">
      <div className="mb-3">
        <h4>Login</h4>
      </div>
      <hr />
      <div className="mb-3">
        <label className="form-label">Mobile Number / Email ID</label>
        <input type="text" className="form-control" placeholder="Mobile Number / Email ID" style={{ fontWeight: 200 }} />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Password" style={{ fontWeight: 200 }} />
      </div>

      <div className="d-flex justify-content-between mb-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <a href="#" className="text-decoration-none text-info">Forgot password?</a>
      </div>
      </form>


      <button className="btn btn-info w-100 text-white fw-bold">Login</button>
    </div>
  );
}
export default LoginForm
