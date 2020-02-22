import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PostUsingHook = props => {
    const defaultValues = {
        title: "",
        author: "",
        pubdate: "",
        pages: "",
        language: "",
        pubid: ""
    };
    const { register, reset } = useForm({
        defaultValues
    });

    const [form, setValues] = useState({
        title: "",
        author: "",
        published_date: "",
        pages: "",
        language: "",
        publisher_id: ""
    });


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:8084/books", {
                title: form.title,
                author: form.author,
                published_date: form.pubdate,
                pages: form.pages,
                language: form.language,
                publisher_id: form.pubid
            });
            if (result.status === 201) {
                alert("Data inserted sucessfuly!");
            } else {
                throw new Error("Failed to insert data!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <center>
                <p>
                    <h2>Form Input Buku</h2>
                </p>
            </center>

            <div className="container mt-5">
                <div class="form-group">
                    <label for="nama">Title</label>
                    <input
                        name="title"
                        type="text"
                        class="form-control"
                        value={form.title}
                        ref={register({
                            required: "Required"
                        })}
                        onChange={updateField}
                    />

                </div>
                <div class="form-group">
                    <label for="author">Author</label>
                    <input
                        name="author"
                        class="form-control"
                        type="text"
                        value={form.author}
                        ref={register({
                            required: "Required"
                        })}
                        onChange={updateField}
                    />

                </div>
                <div class="form-group">
                    <label for="pubdate">Published Date</label>
                    <input
                        name="pubdate"
                        type="date"
                        value={form.pubdate}
                        class="form-control"
                        ref={register({
                            required: "Required"
                        })}
                        onChange={updateField}
                    />
                 
                </div>
                <div class="form-group">
                    <label for="Pages">Pages</label>
                    <input
                        name="pages"
                        type="number"
                        value={form.pages}
                        class="form-control"
                        ref={register({
                            required: "Required"
                        })}
                        onChange={updateField}
                    />
                 
                </div>
                <div class="form-group">
                    <label for="language">Language</label>
                    <input
                        name="language"
                        type="text"
                        value={form.language}
                        class="form-control"
                        ref={register({
                            required: "Required"
                        })}
                        onChange={updateField}
                    />

                </div>
                <div class="form-group">
                    <label for="pubid">Publisher id</label>
                    <input
                        name="pubid"
                        value={form.pubid}
                        type="number"
                        class="form-control"
                        ref={register({
                            required: "Required"
                        })}
                        onChange={updateField}
                    />

                </div>

                <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => {
                        reset(defaultValues);
                    }}
                >
                    Submit
        </button>
            </div>
        </form>
    );
};

export default PostUsingHook;
