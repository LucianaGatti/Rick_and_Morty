import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

const Form = (props) => {
const { login } = props

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {

    setErrors(validation({ ...userData, [event.target.name]: event.target.value }));
    setUserData({ ...userData, [event.target.name]: event.target.value });
    // const property = event.target.name; //*el name del input
    // const value = event.target.value; //*el valor que tiene el input

    // setUserData({ ...userData, [property]: value }); //*property es en este caso, username o password. //cambio form
    // validation({ ...userData, [property]: value }, setErrors, errors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <label className={style.label} htmlFor="email"></label>
            <input
              className={style.input}
              id="email"
              placeholder="Username"
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <span className={style.span}>{errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>)} </span>
          </div>
          <div>
            <label className={style.label} htmlFor="password"></label>
            <input
              className={style.input}
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <span className={style.span}>{errors.p1 ? (<p>{errors.p1} : </p>) : (<p>{errors.p2}</p>) } </span>
          </div>
          <button className={style.button} type="submit">
            LOGIN{" "}
          </button>
        </form>
      </div>
      <img className={style.img} src="portal.gif" alt="" />
    </>
  );
};

export default Form;
