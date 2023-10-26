import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { edit } from "../redux/actions/userActions";
import Loader from "./Loader";
import { FiUserX } from "react-icons/fi";
const EditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { users } = useSelector((state) => state.user);
  const [updateData, setUpdateData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const singleUser = users.filter((element) => element.id === id);
    setUpdateData(singleUser[0]);
    setLoading(false);
  }, [users, id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(edit(updateData));
    toast.success(`User #${id} updated Successfully`);
    navigate(`/`);
  };

  const editData = (e) => {
    setUpdateData({ ...updateData, id: id, [e.target.name]: e.target.value });
  };
  if (loading) return <Loader />;
  if (!updateData)
    return (
      <div className="card-container2">
        <div className="noUser">
          <FiUserX />
          <h1>No User found..</h1>
        </div>
      </div>
    );
  return (
    <div className="container">
      <h1>Edit User</h1>
      <form onSubmit={submitHandler}>
        <div className="form-element">
          <h2>Name</h2>
          <input
            type="text"
            placeholder={"name"}
            required
            name="name"
            value={updateData && updateData.name}
            onChange={editData}
          />
        </div>
        <div className="form-element">
          <h2>Email</h2>
          <input
            type="email"
            required
            placeholder="email"
            name="email"
            value={updateData && updateData.email}
            onChange={editData}
          />
        </div>
        <div className="form-element">
          <h2>Age</h2>
          <input
            type="number"
            required
            placeholder="age"
            name="age"
            min={1}
            value={updateData && updateData.age}
            onChange={editData}
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
            checked={updateData && updateData.gender === "male"}
            name="gender"
            onChange={editData}
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
            checked={updateData && updateData.gender === "female"}
            onChange={editData}
          />
          <h2>Female</h2>
        </div>
        <input className="submit" type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default EditPage;
