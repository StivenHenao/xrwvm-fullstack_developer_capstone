import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

// Mover InputField fuera del componente Register para evitar recreación innecesaria
const InputField = ({ icon, name, type = "text", placeholder, value, onChange }) => (
  <div className="input">
    <img src={icon} className="img_icon" alt={`${name} icon`} />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="input_field"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const goHome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();
    const register_url = `${window.location.origin}/djangoapp/register`;

    try {
      const res = await fetch(register_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.status) {
        sessionStorage.setItem("username", json.userName);
        goHome();
      } else if (json.error === "Already Registered") {
        alert("The user with the same username is already registered.");
        goHome();
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="register_page">
      <div className="register_container">
        <div className="header">
          <span className="title">Sign Up</span>
          <button className="close_button" onClick={goHome}>
            <img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt="Close" />
          </button>
        </div>
        <hr />

        <form onSubmit={register} className="register_form">
          <InputField 
            icon={user_icon} 
            name="userName" 
            placeholder="Username" 
            value={formData.userName}
            onChange={handleChange}
          />
          <InputField 
            icon={user_icon} 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField 
            icon={user_icon} 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName}
            onChange={handleChange}
          />
          <InputField 
            icon={email_icon} 
            name="email" 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
          />
          <InputField 
            icon={password_icon} 
            name="password" 
            type="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
          />

          <div className="submit_panel">
            <input className="submit" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
