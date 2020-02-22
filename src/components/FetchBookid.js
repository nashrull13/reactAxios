import React, { Fragment, useState, useEffect, useMemo } from "react";
import axios from "axios";

function FetchBookid() {
    const [data, setData] = useState({ book: [] });
    const [query, setQuery] = useState();
    const [url, setUrl] = useState("http://localhost:8083/books");
    
    useMemo(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8083/books');
            setData(result.data);
        };
        try {
            fetchData();
        } catch (err) {
            alert(err);
        }
        // console.log(data);
    }, [url]);
    console.log(setQuery);

    return (
        <div className="container mt-5 ">
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
                className="form-control mb-2"
            />
            <button
                class="btn btn-primary mb-2"
                type="button"
                onClick={() => setUrl(`http://localhost:8084/books/${query}`)}
            >
                Search
      </button>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Published Date</td>
                        <td>Pages</td>
                        <td>Language</td>
                        <td>Publisher Id</td>
                    </tr>
                </thead>
                <tbody onChange={() => setUrl(`http://localhost:8084/books/${query}`)}>
                    {data.book.map((data, id) => (
                        <tr key={id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.author}</td>
                            <td>{data.published_date}</td>
                            <td>{data.pages}</td>
                            <td>{data.language}</td>
                            <td>{data.publisher_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FetchBookid;
