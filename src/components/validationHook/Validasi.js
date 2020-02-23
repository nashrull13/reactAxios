import React from "react";
import { useForm } from "react-hook-form";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
// import { getByDisplayValue } from "@testing-library/react";

function Validasi() {
  const { register, handleSubmit, errors, watch, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = data => {
    console.log(data);
  };

  // console.log(formState.dirty);
  // console.log(formState.isValid);
  // console.log(errors);

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <h1>Sign Up</h1>
              </div>
              <div className="field">
                <label className="label">Name :</label>
                <div className="control">
                  <input
                    type="text"
                    name="name"
                    ref={register({ required: "Name required!" })}
                  />
                  <span>{errors.name && errors.name.message}</span>
                </div>
              </div>

              <div className="field">
                <label>Email :</label>
                <div className="control">
                  <input
                    type="email"
                    name="email"
                    ref={register({
                      required: "Email required!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Email is invalid!"
                      }
                    })}
                  />
                  <span>{errors.email && errors.email.message}</span>
                </div>
              </div>

              <div className="field">
                <label>Password :</label>
                <div className="control">
                  <input
                    type="password"
                    name="password"
                    ref={register({
                      required: "Password required!",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long"
                      }
                    })}
                  />
                  <span>{errors.password && errors.password.message}</span>
                </div>
              </div>

              <div className="field">
                <label>Confirm Password :</label>
                <div className="control">
                  <input
                    type="password"
                    name="confirm"
                    ref={register({
                      required: "Confirm Password required!",
                      validate: value =>
                        value === watch().password || "Password did not match"
                    })}
                  />
                  <span>{errors.confirm && errors.confirm.message}</span>
                </div>
              </div>
              <button
                disabled={
                  !formState.dirty || (formState.dirty && !formState.isValid)
                }
                type="submit"
                className="btn btn-primary"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Validasi;
