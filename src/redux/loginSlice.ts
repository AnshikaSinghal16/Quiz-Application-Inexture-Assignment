import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface  loginResponse  {
  statusCode: number;
  statusMessage: string;
  data: {
    fName: string;
    lName: string;
    email: string;
  };
}

interface loginResponseData {
  responseData: loginResponse | null;
  loading: boolean;
  error: string;
}

const initialState: loginResponseData = {
  responseData: {
    statusCode: 0,
    statusMessage: "",
    data: {
      fName: "",
      lName: "",
      email: ""
    }
  },
  loading: false,
  error: "",
};



export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetLoginState: () => initialState,
    verifyUser: (state, action: PayloadAction<any>) => {
      if(action.payload.emailAddress=="test@abc.com" && action.payload.password =="test@1234"){
        state.responseData!.statusCode = 200;
        state.responseData!.statusMessage = "User Successfully logged In";
        state.responseData!.data.email =action.payload.emailAddress;
        state.responseData!.data.fName ="Test";
        state.responseData!.data.lName ="User";
        state.loading = false;
        state.error = "";
      }
      else{
        state.error = "User is not authenticated";
        state.loading = false;
      }
    },
  },
  extraReducers: (builder) => {
  },
});

export const { resetLoginState, verifyUser } = loginSlice.actions;

export const loginResponses = (state: RootState): loginResponse | null =>
  state.loginReducer.responseData;

export const loginResponseError = (state: RootState): string =>
  state.loginReducer.error;

export const loginLoading = (state: RootState): boolean =>
  state.loginReducer.loading;

export default loginSlice.reducer;
