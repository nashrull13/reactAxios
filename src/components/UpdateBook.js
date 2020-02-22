import React, { Component, useState } from "react";
import axios from "axios";

export default class UpdateBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: "",
      author: "",
      published_date: "",
      pages: null,
      language: "",
      publisher_id: "",
      createdAt: "",
      updatedAt: ""
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const result = await axios.get("http://localhost:8083/books/" + id);
    // const [data, setData] = useState({ data: [] });
    // setData(result.data);

    this.setState(result.data.books[0]);

    console.log(result.data.books[0]);
  };

  handlerChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
    // console.log(this.state.published_id);
  };

  handlerSubmit = async e => {
    const id = this.props.match.params.id;
    e.preventDefault();
    await axios.put("http://localhost:8083/books/" + id, this.state);
    this.props.history.push("/get");
  };

  render() {
    return (
      <div className="container mt-5 ">
        <form onSubmit={this.handlerSubmit}>
          <center>
            <p>
              <h2>Form Perubahan Buku</h2>
            </p>
          </center>

          <div className="container mt-5">
            <div class="form-group">
              <label for="nama">Title/Judul Buku</label>
              <input
                name="title"
                type="text"
                class="form-control"
                value={this.state.title}
                onChange={this.handlerChange}
                //   ref={register({
                //     required: "Required"
                //   })}
              />

              {/* <span>{errors.name && errors.name.message}</span> */}
            </div>
            <div class="form-group">
              <label for="author">Author</label>
              <input
                name="author"
                class="form-control"
                type="text"
                value={this.state.author}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>

            <div class="form-group">
              <label for="author">Pages</label>
              <input
                name="pages"
                class="form-control"
                type="number"
                value={this.state.pages}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>
            <div class="form-group">
              <label for="author">Language</label>
              <input
                name="language"
                class="form-control"
                type="text"
                value={this.state.language}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>
            <div class="form-group">
              <label for="author">Publisher Id</label>
              <input
                name="published_id"
                class="form-control"
                type="number"
                value={this.state.publisher_id}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>
            <button type="submit" value="edit" class="btn btn-primary">
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
