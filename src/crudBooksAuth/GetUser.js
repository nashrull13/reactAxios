import React, { useState, useMemo } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";

function GetUser() {
  const [data, setData] = useState({ user: [] });
  const token = JSON.parse(
        sessionStorage.getItem("persisted_state_hook:token")
    ); 

  useMemo(() => {
    const fetchData = async () => {      
      const result = await axios({
        method: "get",
        url: "http://localhost:3003/api/users",
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
        
  async function deleteUser(id) {
    await axios({
      method: "delete",
      url: `http://localhost:3003/api/user/${id}`,
      headers: {
        Authorization: token.token.accessToken
      },
      data: data
    })
    window.location.reload(false);
  } 
  
  function deleteConfirm(name, id) {
    confirmAlert({
      title: "Alert",
      message: "Are you sure to remove " + name + "?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteUser(id)
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  }
    

//   async function pinjam(id) {
//     const token = JSON.parse(
//       sessionStorage.getItem("persisted_state_hook:token")
//     );
//     try {
//       await axios({
//         method: "post",
//         url: `http://localhost:3003/orders/${id}`,
//         headers: {
//           Authorization: token.token.accessToken
//         },
//         data: {
//           userId: token.token.id,
//           bookId: id
//         }
//       });
//     } catch (err) {
//       console.log(err);
//     }
//     alert("Anda berhasil meminjam");
//     window.location.reload();
//   }

  const render = () => {
    return data.user.map((data, id) => {
      return (
        <tr key={id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>               
          
          <td>
            <Link to={"#" + data.id}>
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
                      onClick={() => deleteConfirm(data.name, data.id)}
                    >
                      <i className="fa fa-trash"></i>
                      
                    </button>
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
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Edit </th>
          <th scope="col">Delete </th>               
              
        </tr>
      </thead>
       <tbody>{render()}</tbody>        
    </table>
  );
}
export default GetUser;
