import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Redirect } from 'react-router-dom'

const Register = props => {
  const { register, watch, errors, formState } = useForm({ mode: "onChange" });

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    roles: ""
  });

  const [status, setStatus] = useState({
    isRedirect: false
  });
  
  
  const handleSubmit = async e => {
      
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3003/register", {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password,
        roles: ["USER"]
      });
         
      if (result.status === 201) {
        alert("Register sucessfully!");
        setStatus({ isRedirect: true });
              
      } else {
        throw new Error("Failed to Register");
      }

    }
    catch (err) {
      console.log(err);
    }
  };
 
 
  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  if (status.isRedirect === true) {
      return <Redirect to="/login" />    
  } else {
    return (
      <div className="container">
        <div className="cardregis">
          <div className="title">Register Form</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <h1>Sign Up</h1>
            </div>
            <div className="field">
              <label className="label">Name :</label>
              <div className="control">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  value={form.name}
                  ref={register({
                    required: "Name required!",
                    minLength: {
                      value: 6,
                      message: "Name must be at least 6 characters long"
                    }
                  })}
                  onChange={updateField}
                />
                <span>{errors.name && errors.name.message}</span>
              </div>
            </div>
            
            <div className="field">
              <label className="label">Username :</label>
              <div className="control">
                <input
                  type="text"
                  name="username"
                  class="form-control"
                  value={form.username}
                  ref={register({
                    required: "Username required!"
                  })}
                  onChange={updateField}
                />
                <span>{errors.name && errors.name.message}</span>
              </div>
            </div>

            <div className="field">
              <label>Email :</label>
              <div className="control">
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  value={form.email}
                  ref={register({
                    required: "Email required!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email is invalid!"
                    }
                  })}
                  onChange={updateField}
                />
                <span>{errors.email && errors.email.message}</span>
              </div>
            </div>

            <div className="field">
              <label>Password :</label>
              <div className="control">
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  value={form.password}
                  ref={register({
                    required: "Password required!",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long"
                    }
                  })}
                  onChange={updateField}
                />
                <span>{errors.password && errors.password.message}</span>
              </div>
            </div>

            <div className="field">
              <label>Confirm Password :</label>
              <div className="control">
                <input
                  type="password"
                  name="confirm"
                  class="form-control"
                  ref={register({
                    required: "Confirm Password required!",
                    validate: value =>
                      value === watch().password || "Password did not match"
                  })}
                  onChange={updateField}
                />
                <span>{errors.confirm && errors.confirm.message}</span>
              </div>
            </div>
            <button
              disabled={
                !formState.dirty || (formState.dirty && !formState.isValid)
                // onClick={event => window.location.href = '/login'}
              }
              type="submit"
              className="btn btn-primary"
            >
              Sign up
              </button>
          </form>            </div>
      </div>
    );
  }
}

export default Register;
