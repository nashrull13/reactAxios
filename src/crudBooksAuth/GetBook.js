import React, { useState, useMemo } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

function GetBook() {
  
  const [data, setData] = useState({ book: [] });
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );

  useMemo(() => {
    const fetchData = async () => {   
      const result = await axios({
        method: "get",
        url: "http://localhost:3003/books",
        headers: {
          Authorization: token.token.accessToken
        },
        data: data
      })
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

  async function deleteBook(id) {
    await axios({
      method: "delete",
      url: `http://localhost:3003/books/${id}`,
      headers: {
        Authorization: token.token.accessToken
      },
      data: data
    })
    window.location.reload(false);
  }

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


  async function pinjam(id) {
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    try {
      await axios({
        method: "post",
        url: `http://localhost:3003/orders/${id}`,
        headers: {
          Authorization: token.token.accessToken
        },
        data: {
          userId: token.token.id,
          bookId: id
        }
      });
    } catch (err) {
      console.log(err);
    }
    alert("Anda berhasil meminjam");
    window.location.reload();
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
          <td>{data.published_id}</td>
            {(() => {
              if (token.token.Role === "ADMIN") {
                return (
                  <>
                    <td>
            <Link to={"/updatebook/" + data.id}>
                        <button
                        type="button"
                        className="btn btn-secondary btn-sm mt-1"
                      >
                        <i className="fa fa-pencil"></i>
                        
                      </button>
                      </Link>
                    </td>          
                    <td>
                    <button
                      type="button"
                      className="btn btn-danger  btn-sm mt-1"
                      onClick={() => deleteConfirm(data.title, data.id)}
                    >
                      <i className="fa fa-trash"></i>
                      
                    </button>
                    </td>
                  </>
                );
              } else {
                return (
                  <button type="button" class="btn btn-warning">
                    <i class="fa fa-eye" onClick={() => pinjam(data.id)}></i>
                  </button>
                );
              }
            })()}
          
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
          {(() => {
            if (token.token.Role === "ADMIN") {
              return (
                <>
          <th scope="col">Edit Book</th>
          <th scope="col">Delete Book</th>
                </>
              )   
            }
            else {
              return (
                <th scope="col">Order Book</th>
                  );
              }
            })()}
        </tr>
      </thead>
       <tbody>{render()}</tbody>        
    </table>
  );
}
export default GetBook;
