import React, { useState, useMemo } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

function GetBook() {
  const [data, setData] = useState({ data: [] });
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3003/books");
      setData(result.data);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
    // console.log(data);
  }, []);
  console.log(data);

  function deleteConfirm(title, id) {
    confirmAlert({
      title: "Alert",
      message: "Are you sure to remove " + title + "?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteBook(id)
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  }

  function deleteBook(id) {
    axios.delete(`http://localhost:3003/books/${id}`);
    window.location.reload(false);
  }

  const render = () => {
    return data.data.map((data, id) => {
      return (
        <tr key={id}>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.author}</td>
          <td>{data.published_date}</td>
          <td>{data.pages}</td>
          <td>{data.language}</td>
          <td>{data.published_id}</td>
          <td>
            <Link to={"/updatebook/" + data.id}>
              <i className="fa fa-pencil" width="5px"></i>
            </Link>
          </td>
          <td>
            <i
              className="fa fa-trash" width="5px"
              
              onClick={() => deleteConfirm(data.title, data.id)}
            ></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Published_Date</th>
          <th scope="col">Pages</th>
          <th scope="col">Language</th>
          <th scope="col">Published_Id</th>
          <th scope="col">Edit Book</th>
          <th scope="col">Delete Book</th>
        </tr>
      </thead>
       <tbody>{render()}</tbody>        
    </table>
  );
}
export default GetBook;
