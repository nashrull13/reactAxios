import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = props => {
  return (
    <div className="container">
      <div className="cardregis">
        <div className="title">Login Form</div>
        <form onSubmit={this.getId}>
          <div className="container mt-5">
            <div className="form-group">
              <label>Username </label>
              <input
                name="username"
                type="text"
                className="form-control"
                value={this.state.title}
                onChange={this.getUpdate}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                className="form-control"
                type="password"
                value={this.state.author}
                onChange={this.getUpdate}
              />
            </div>            
            <button type="submit" value="Submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginForm