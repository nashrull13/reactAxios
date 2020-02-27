import React, { Component } from "react";
import axios from "axios";

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
      roles: ""
      
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    const result = await axios({
      method: "get",
      url: "http://localhost:3003/users/" + id,
      headers: {
        Authorization: token.token.accessToken
      }
    });

    this.setState(result.data.user);

    console.log(result);
  };

  handlerChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
    // console.log(this.state.title);
  };

  handlerSubmit = async e => {
    const id = this.props.match.params.id;
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    e.preventDefault();
    await axios({
      method: "put",
      url: "http://localhost:3003/users/" + id,
      data: this.state,
      headers: {
        Authorization: token.token.accessToken
      }
    });
    alert("Data updated successfuly!");  
    this.props.history.push("/getbook");
  }; 
  render()
  {
    return (
      <div className="container">
        <div className="cardregis">
          <div className="title">Update User</div>
          <form onSubmit={this.handlerSubmit}>
            <div className="container mt-5">
              <div className="form-group">
                <label>Name </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  type="text"
                  value={this.state.username}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  className="form-control"
                  type="date"
                  value={this.state.email}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  className="form-control"
                  type="number"
                  value={this.state.password}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  name="language"
                  className="form-control"
                  type="text"
                  value={this.state.roles}
                  onChange={this.handlerChange}
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
}

