import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
    loading: true,
    error: null,
    searchData: "",
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUserStart: (state) => {
            state.loading = true;
        },
        createUserSuccess: (state, action) => {
            state.users.push(action.payload)
            state.loading = false;
            state.error = null;
        },
        createUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchRequest: (state) => {
            state.loading = true;
        },
        fetchUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchUsersFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteRequest: (state) => {
            state.loading = true;
        },
        deleteSuccess: (state, action) => {
            state.users = state.users.filter(element => element.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        },
        deleteFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        searchRequest: (state, action) => {
            state.loading = true;
        },
        searchSuccess: (state, action) => {
            state.users = state.users.filter(element => element.id === action.payload.id);
            state.loading = false;
            state.error = null;
        },
        searchFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        editUserRequest: (state) => {
            state.loading = true;
        },
        editUserSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.users = state.users.filter(element => element.id !== action.payload.id);
            state.users.push(action.payload);
        },
        editUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { createUserStart,
    createUserSuccess,
    createUserFail,
    fetchRequest,
    fetchUsersSuccess,
    fetchUsersFail,
    deleteRequest,
    deleteSuccess,
    deleteFail,
    searchRequest,
    searchSuccess,
    searchFail,
    editUserRequest,
    editUserSuccess,
    editUserFail } = userSlice.actions;
export default userSlice.reducer;