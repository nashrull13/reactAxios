import React, { Component } from "react";
import axios from "axios";

export default class UpdateBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      author: "",
      published_date: "",
      pages: "",
      language: "",
      published_id: "",
      createdAt: "",
      updatedAt: ""
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    const result = await axios({
      method: "get",
      url: "http://localhost:3003/books/" + id,
      headers: {
        Authorization: token.token.accessToken
      }
    });

    this.setState(result.data.book);

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
      url: "http://localhost:3003/books/" + id,
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
          <div className="title">Update Book</div>
          <form onSubmit={this.handlerSubmit}>
            <div className="container mt-5">
              <div className="form-group">
                <label>Title </label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input
                  name="author"
                  className="form-control"
                  type="text"
                  value={this.state.author}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Published Date</label>
                <input
                  name="published_date"
                  className="form-control"
                  type="date"
                  value={this.state.pages}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Pages</label>
                <input
                  name="pages"
                  className="form-control"
                  type="number"
                  value={this.state.pages}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Language</label>
                <input
                  name="language"
                  className="form-control"
                  type="text"
                  value={this.state.language}
                  onChange={this.handlerChange}
                />
              </div>
              <div className="form-group">
                <label>Published Id</label>
                <input
                  name="published_id"
                  className="form-control"
                  type="text"
                  value={this.state.published_id}
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

