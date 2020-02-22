import React, { useState, useMemo } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

function FetchUsingHook() {
  const [data, setData] = useState({ book: [] });
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8082/books");
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
      title: "Peringatan",
      message: "Apakah anda yakin ingin menghapus buku " + title + "?",
      buttons: [
        {
          label: "Delete",
          onClick: () => deleteBook(id)
        },
        {
          label: "Tidak",
          onClick: () => {}
        }
      ]
    });
  }

  function deleteBook(id) {
    axios.delete(`http://localhost:8082/books/${id}`);
    window.location.reload(false);
  }

  const render = () => {
    return data.book.map((data, id) => {
      return (
        <tr key={id}>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.author}</td>
          <td>{data.published_date}</td>
          <td>{data.pages}</td>
          <td>{data.language}</td>
          <td>{data.publisher_id}</td>
          <td>
            <Link to={"/updatebook/" + data.id}>
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>
          </td>
          <td>
            <i
              className="fa fa-trash"
              aria-hidden="true"
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
          <th scope="col">Publisher_Id</th>
          <th scope="col">Edit Book</th>
          <th scope="col">Delete Book</th>
        </tr>
      </thead>
       <tbody>{render()}</tbody>        
    </table>
  );
}
export default FetchUsingHook;
