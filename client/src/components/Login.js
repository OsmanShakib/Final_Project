import "../../App.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form";

export default function Login(props) {
  return (
    <div className="container-box">
      <div className="subContainer">
        <div className="login-box">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <label htmlFor="email" className="form-label">
                  email
                </label>
              </div>
              <div>
                <input
                  {...register(
                    'email',
                    {
                      required: 'Please enter an email addreess!',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'The email you enter is invalid email!',
                      },
                    },
                    { required: true }
                  )}
                  type="email"
                  className="input-field"
                />
              </div>
              {errors.email && (
                <p className="error-message">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <div>
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
              </div>
              <div>
                <input
                  {...register('password', { required: true })}
                  type="password"
                  placeholder="password"
                  className="input-field"
                />
              </div>
              {errors.password && errors.password.type === 'required' && (
                <p className="error-message">
                  Please enter a password!
                </p>
              )}
            </div>
            <button type="submit" className="button">Login</button>
            {message &&
              <p className="error-message">{message}</p>
            }
          </form>
          <NavLink to="/SignUP" className="SignUP">
            New User?
          </NavLink>
        </div>
      </div>
    </div>
  );
}
