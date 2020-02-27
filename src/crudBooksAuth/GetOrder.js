import React, { Component } from "react";
import axios from "axios";

export default class GetOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    const urls = "http://localhost:3003/orders/" + id;
    await axios({
      method: "get",
      url: urls,
      headers: {
        Authorization: token.token.accessToken
      }
    }).then(data => {
      console.log(urls);

      console.log(data.data.user.books);
      this.setState({
        users: data.data.user.books
      });
    });
    // this.setState(result.data.books);
  };

  render() {
    let no = 1;
    return (
      <div>  
        <p>
          <h2>
            List Book Order
          </h2>
        </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Pages</th>
                  <th scope="col">Language</th>
                </tr>
              </thead>              
              <tbody>        
            {this.state.users.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{no++}</td>
                  <td>{data.title}</td>
                  <td>{data.author}</td>
                  <td>{data.pages}</td>
                  <td>{data.language}</td>
                </tr>
              )
              })}                          
            </tbody>
        </table>                 
      </div>
    );
  }
}
