import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PostBook = props => {
    const defaultValues = {
        title: "",
        author: "",
        published_date: "",
        pages: "",
        language: "",
        published_id: ""
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
        published_id: ""
    });


    const handleSubmit = async e => {
        
         e.preventDefault();
        try {
            const result = await axios.post("http://localhost:3003/books", {
                title: form.title,
                author: form.author,
                published_date: form.published_date,
                pages: form.pages,
                language: form.language,
                published_id: form.published_id
            });            
            if (result.status === 201) {
                alert("Data inserted sucessfuly!");                
            } else {
                throw new Error("Failed to insert data!");
            }
            
        }
        
        catch (err) {
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
        <div className="container">
            <div className="cardregis">
                <div className="title">Add Book Form</div>
                    <form onSubmit={handleSubmit}>           

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
                    <label for="published_date">Published Date</label>
                    <input
                        name="published_date"
                        type="date"
                        value={form.published_date}
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
                    <label for="published_id">Publisher id</label>
                    <input
                        name="published_id"
                        value={form.published_id}
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
            </div>
        </div>
    );
};

export default PostBook;
