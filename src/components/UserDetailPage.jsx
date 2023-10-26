import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import User from "../assets/user.jpg";
import { deleteUser } from "../redux/actions/userActions";
import Loader from "./Loader";
import { FiUserX } from "react-icons/fi";
const UserDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = (data) => {
    dispatch(deleteUser(data));
    toast.success(`User #${data} deleted`);
    navigate("/fetchUsers");
  };
  const params = useParams();
  const userId = params.id;
  const { users } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const data = users.filter((element) => element.id === userId);
    setUserData(data[0]);
    setLoading(false);
  }, [users, userId]);
  if (loading) return <Loader />;
  if (!userData)
    return (
      <div className="card-container2">
        <div className="noUser">
          <FiUserX />
          <h1>No User found..</h1>
        </div>
      </div>
    );
  return (
    <div className="userDetailPage">
      <div className="image">
        <img src={User} alt="" />
      </div>
      <div className="leftUserDetail">
        <div className="userDetailPageContainer">
          <h2>User Id : </h2>
          <span>#{userData && userData.id}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Name : </h2>
          <span>{userData && userData.name}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Email : </h2>
          <span>{userData && userData.email}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Age : </h2>
          <span>{userData && userData.age}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Gender : </h2>
          <span>{userData && userData.gender}</span>
        </div>
        <div className="btnContainer">
          <button className="delete" onClick={() => deleteHandler(userData.id)}>
            Delete
          </button>
          <Link to={`/edit/${userData.id}`} className="edit">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
