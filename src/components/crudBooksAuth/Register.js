import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = props => {
    const defaultValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        roles: ""
        
    };
    const { register, reset } = useForm({
        defaultValues
    });

    const [form, setValues] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        roles: ""
    });


    const handleSubmit = async e => {

        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:3003/register", {
                name: form.name,
                username: form.username,
                email: form.email,
                password: form.password,
                roles: form.roles                
            });
            console.log(result)
            if (result.status === 200) {
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
                <div className="title">Register Form</div>
                <form onSubmit={handleSubmit}>

                    <div className="container mt-5">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input
                                name="name"
                                type="text"
                                class="form-control"
                                value={form.name}
                                ref={register({
                                    required: "Required"
                                })}
                                onChange={updateField}
                            />

                        </div>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input
                                name="username"
                                class="form-control"
                                type="text"
                                value={form.username}
                                ref={register({
                                    required: "Required"
                                })}
                                onChange={updateField}
                            />

                        </div>
                        <div class="form-group">
                            <label for="emai">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                class="form-control"
                                ref={register({
                                    required: "Required"
                                })}
                                onChange={updateField}
                            />

                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                value={form.password}
                                class="form-control"
                                ref={register({
                                    required: "Required"
                                })}
                                onChange={updateField}
                            />

                        </div>
                        <div class="form-group">
                            <label for="roles">Roles</label>
                            <input
                                name="roles"
                                type="text"
                                value={form.roles}
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

export default Register;
