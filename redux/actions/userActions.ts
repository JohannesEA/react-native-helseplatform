import { Dispatch } from "redux";
import { UserDTO } from "../../types/types";
import {
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
} from "../reducers/userReducer";

export const fetchUserAction = (user: UserDTO, dispatch: Dispatch) => {
  dispatch(getUserStart());
  try {
    // TODO: Call API to get the user details
    dispatch(getUserSuccess(user));
  } catch (error) {
    console.error("Error when fetching user");
    dispatch(getUserError(error));
  }
};

export const postUserAction = (user: UserDTO, dispatch: Dispatch) => {
  dispatch(postUserStart());
  try {
    // TODO: Call API to post the user and get back the saved version if necessary
    dispatch(postUserSuccess(user));
  } catch (error) {
    console.error("Error when posting user");
    dispatch(postUserError(error));
  }
};

export const putUserAction = (user: UserDTO, dispatch: Dispatch) => {
  dispatch(putUserStart());
  try {
    // TODO: Call API to update the user
    dispatch(putUserSuccess(user));
  } catch (error) {
    console.error("Error when updating user");
    dispatch(putUserError(error));
  }
};

export const deleteUserAction = (userId: string, dispatch: Dispatch) => {
  dispatch(deleteUserStart());
  try {
    // TODO: Call API to delete the user by its ID
    dispatch(deleteUserSuccess());
  } catch (error) {
    console.error("Error when deleting user");
    dispatch(deleteUserError(error));
  }
};

export const loginUserAction = (credentials: UserDTO, dispatch: Dispatch) => {
  dispatch(loginUserStart());
  try {
    if (
      credentials.username.toLowerCase() === "test" &&
      credentials.password.toLowerCase() === "test"
    ) {
      const user = {
        id: "123",
        username: "test",
      };

      dispatch(loginUserSuccess(user));
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Error when logging in", error);
    dispatch(loginUserError(error.message));
  }
};

export const logOutUserAction = (dispatch: Dispatch) => {
  dispatch(logOut());
};
