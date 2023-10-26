import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../redux/actions/userActions";
import { toast } from "react-hot-toast";

const UserDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  const { users } = useSelector((state) => state.users);
  const user = users.filter((element) => element.id === userId);
  const deleteHandler = (data) => {
    dispatch(deleteUser(data));
    toast.success(`User #${data} deleted`);
    navigate("/fetchUsers");
  };
  return (
    <div className="userDetailPage">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="leftUserDetail">
        <div className="userDetailPageContainer">
          <h2>User Id : </h2>
          <span>#{userId}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Name : </h2>
          <span>{user && user[0].name}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Email : </h2>
          <span>{user && user[0].email}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Age : </h2>
          <span>{user && user[0].age}</span>
        </div>
        <div className="userDetailPageContainer">
          <h2>Gender : </h2>
          <span>{user && user[0].gender}</span>
        </div>
        <div className="btnContainer">
          <button className="delete" onClick={() => deleteHandler(userId)}>
            Delete
          </button>
          <Link to={`/edit/${userId}`} className="edit">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
