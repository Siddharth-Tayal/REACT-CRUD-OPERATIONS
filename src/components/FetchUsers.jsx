import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
import toast from "react-hot-toast";
import { FiUserX } from "react-icons/fi";
import { deleteUser } from "../redux/actions/userActions";

const FetchUsers = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.user);
  const [searchData, setSearchData] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  // user delete handler
  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
    toast.success(`User #${id} deleted.`);
  };

  if (error) return <Error />;
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="userContainer">
          {/* User container div 1 */}
          <div className="filter-search">
            <div className="gender-filter">
              <div className="gender-filter-div">
                <input
                  type="radio"
                  name="genderFilter"
                  className="radio"
                  aria-label="All"
                  checked={
                    genderFilter === "" || genderFilter === "All" ? true : false
                  }
                  onChange={() => setGenderFilter("")}
                />{" "}
                <h2>All</h2>
              </div>
              <div className="gender-filter-div">
                <input
                  type="radio"
                  className="radio"
                  name="genderFilter"
                  checked={genderFilter === "male" ? true : false}
                  onChange={() => setGenderFilter("male")}
                />
                <h2>Male</h2>
              </div>
              <div className="gender-filter-div">
                <input
                  type="radio"
                  name="genderFilter"
                  className="radio"
                  checked={genderFilter === "female" ? true : false}
                  onChange={() => setGenderFilter("female")}
                />{" "}
                <h2>Female</h2>
              </div>
            </div>
            <div className="searchBar">
              <input
                type="text"
                className="search"
                placeholder="Search name..."
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>
          </div>

          {/* User container div2 */}
          <div className="card-container">
            {!users[0] ? (
              <div className="noUser">
                <FiUserX />
                <h1>No User..</h1>
              </div>
            ) : (
              users &&
              users
                .filter((element) => {
                  if (searchData === "") return element;
                  else
                    return element.name
                      .toLowerCase()
                      .includes(searchData.toLowerCase());
                })
                .filter((element) => {
                  if (genderFilter === "" || genderFilter === "All")
                    return element;
                  else if (genderFilter === "male")
                    return element.gender === "male";
                  else return element.gender === "female";
                })
                .map((element) => (
                  <div key={element.id} className="userCard">
                    <div className="userElement">
                      <h2>Name : </h2>
                      <span>{element.name}</span>
                    </div>
                    <div className="userElement">
                      <h2>Email : </h2>
                      <span>{element.email}</span>
                    </div>
                    <div className="btnContainer">
                      <Link to={`/user/${element.id}`} className="view">
                        View
                      </Link>
                      <button
                        className="delete"
                        onClick={() => deleteHandler(element.id)}
                      >
                        Delete
                      </button>
                      <Link className="edit" to={`/edit/${element.id}`}>
                        Edit
                      </Link>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default FetchUsers;
