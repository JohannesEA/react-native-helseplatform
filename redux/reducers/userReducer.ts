import { createSlice } from "@reduxjs/toolkit";
import { IUser, RestStatus } from "../../types/types";

const initialState: IUser = {
  user: undefined,
  status: RestStatus.IDLE,
  error: undefined,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Fetching
    getUserStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.status = RestStatus.SUCCESS;
    },
    getUserError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Posting
    postUserStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    postUserSuccess: (state, action) => {
      state.user = action.payload;
      state.status = RestStatus.SUCCESS;
    },
    postUserError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Updating/Putting
    putUserStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    putUserSuccess: (state, action) => {
      state.user = action.payload;
      state.status = RestStatus.SUCCESS;
    },
    putUserError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },

    // Deleting - Assuming a DELETE action would just clear the user
    deleteUserStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    deleteUserSuccess: (state) => {
      state.user = undefined;
      state.status = RestStatus.SUCCESS;
    },
    deleteUserError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
    },
    loginUserStart: (state) => {
      state.status = RestStatus.LOADING;
    },
    loginUserSuccess: (state, action) => {
      state.user = action.payload;
      state.status = RestStatus.SUCCESS;
      state.isAuthenticated = true; // Set authentication to true on successful login
    },

    loginUserError: (state, action) => {
      state.status = RestStatus.ERROR;
      state.error = action.payload;
      state.isAuthenticated = false; // Reset authentication on error
    },
    // Inside your userSlice definition

    logOut: (state) => {
      state.user = undefined;
      state.isAuthenticated = false;
      state.status = RestStatus.IDLE;
      state.error = undefined;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserError,
  postUserStart,
  postUserSuccess,
  postUserError,
  putUserStart,
  putUserSuccess,
  putUserError,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserError,
  loginUserStart,
  loginUserSuccess,
  loginUserError,
  logOut,
} = userSlice.actions;

export default userSlice.reducer;
