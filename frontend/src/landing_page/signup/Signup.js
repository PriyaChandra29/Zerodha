import React from "react";
import axios from "axios";

function Signup() {
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission

    const formData = new FormData(e.target);
    const user = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await axios.post("https://zerodhaclone-ke1d.onrender.com/api/signup", user);
    
      if (res.status === 200) {
        alert("Signup successful!");

        // Full browser redirect to dashboard root
        window.location.href = "https://zerodhaclone2.onrender.com"; 
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="row mt-3">
      <h3 className="col-6 offset-3">SignUp on Zerodha</h3>
      <div className="col-6 offset-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Account Name</label>
            <input name="username" type="text" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" required />
          </div>

          <button type="submit" className="p-2 btn btn-primary fs-5 mb-5">
            Signup Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
