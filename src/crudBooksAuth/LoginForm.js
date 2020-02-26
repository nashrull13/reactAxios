import React, {useState} from "react";
import axios from "axios";
import createPersistedState from '@plq/use-persisted-state'
import { Redirect } from "react-router-dom";

export default function Login() {
  const [usePersisted] = createPersistedState("token", window.sessionStorage)
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const [token, getToken] = usePersisted("token", "")

  const [role, setRole] = useState({
    redirect: true
  });
  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3003/login", {
        username: form.username,
        password: form.password
      });
      getToken(result.data)
      setRole(result.data.Role);
      // console.log(result.data.accessToken)
      
      // if (result.status === 200) {
      //   alert("Login Success!");
        
      // } else {
      //   throw new Error("Failed to Login");
      // }

    }

    catch (err) {
      console.log(err);
    }
  }; 
  

  const UpdateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  if (role === "ADMIN") {
    return <Redirect to={"/admin"} />;
  } else if (role === "USER") {
    return <Redirect to={"/user"} />;
  }

  return (
    <div className="container">
      <div className="cardregis">
        <div className="title">Login Form</div>
        <form onSubmit={handleSubmit}>

          <div className="container mt-5">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                name="username"
                type="text"
                class="form-control"
                value={form.username}
                onChange={UpdateField}
              />

            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                name="password"
                class="form-control"
                type="password"
                value={form.password}
                onChange={UpdateField}
              />

            </div>
              
            <button
              type="submit"
              class="btn btn-primary"
                
            >
              Submit
        </button>
          </div>
        </form>
      </div>
    </div>
  );
}
  

  


