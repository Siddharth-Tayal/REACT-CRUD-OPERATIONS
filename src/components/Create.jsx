import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { create } from "../redux/actions/userActions";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let userData = {
      name: "",
      email: "",
      gender: "",
      age: 0,
    };
    userData.name = name;
    userData.email = email;
    userData.gender = gender;
    userData.age = age;

    dispatch(create(userData));
    toast.success("User created Successfully");
    navigate("/fetchUsers");
  };
  return (
    <div className="container">
      <h1>Register Form</h1>
      <form onSubmit={submitHandler}>
        <div className="form-element">
          <h2>Name</h2>
          <input
            type="text"
            placeholder="name"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            required
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-element">
          <h2>Age</h2>
          <input
            type="number"
            required
            name="age"
            placeholder="age"
            className="noScroll"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-element form-element-2">
          <h2>Gender</h2>
        </div>
        <div className="form-element-check">
          <input
            required
            type="radio"
            value={"male"}
            className="radio"
            name="gender"
            onClick={(e) => setGender(e.target.value)}
          />
          <h2>Male</h2>
        </div>
        <div className="form-element-check">
          <input
            required
            type="radio"
            value={"female"}
            className="radio"
            name={"gender"}
            onClick={(e) => setGender(e.target.value)}
          />
          <h2>Female</h2>
        </div>
        <input className="submit" type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Create;
