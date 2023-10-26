import { createUserFail, createUserStart, createUserSuccess, deleteFail, deleteRequest, deleteSuccess, editUserFail, editUserRequest, editUserSuccess, fetchRequest, fetchUsersFail, fetchUsersSuccess, searchFail, searchRequest, searchSuccess } from "../slices/userSlices";

export const searching = (id) => async (dispatch) => {
    try {
        dispatch(searchRequest());
        const response = await fetch(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/Crud/${id}`)
        const data = await response.json();
        dispatch(searchSuccess(data));

    } catch (error) {
        dispatch(searchFail(error));
    }
}
export const create = (data) => async (dispatch) => {
    dispatch(createUserStart());
    try {
        const res = await fetch(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/Crud`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        dispatch(createUserSuccess(result));
    } catch (error) {
        dispatch(createUserFail(error));
    }
}
export const deleteUser = (data) => async (dispatch) => {
    try {
        dispatch(deleteRequest());
        const response = await fetch(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/Crud/${data}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await response.json()
        dispatch(deleteSuccess(result))
    } catch (error) {
        dispatch(deleteFail(error));
    }
}
export const edit = (data) => async (dispatch) => {

    try {
        dispatch(editUserRequest());
        const response = await fetch(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/Crud/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        dispatch(editUserSuccess(result));
    } catch (error) {
        dispatch(editUserFail(error));
    }
}
export const fetchUsers = (data) => async (dispatch) => {

    try {
        dispatch(fetchRequest());
        const response = await fetch(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/Crud`)
        const result = await response.json();
        dispatch(fetchUsersSuccess(result));
    } catch (error) {
        dispatch(fetchUsersFail(error));
    }
}