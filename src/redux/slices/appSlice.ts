import { getLocalStorage } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";
// import { authService } from "../services/authService";

// export const fetchUserData = createAsyncThunk(
//   "user/fetchUserData",
//   async (body) => {
//     const data = await authService.getProfile();
//     return data?.data;
//   }
// );

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLogin: !!getLocalStorage("token"),
    infoUser: {},
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setInfoUser: (state, action) => {
      state.infoUser = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchUserData.pending, (state) => {
  //         state.loading = "pending";
  //       })
  //       .addCase(fetchUserData.fulfilled, (state, action) => {
  //         state.loading = "fulfilled";
  //         state.userData = action.payload;
  //       })
  //       .addCase(fetchUserData.rejected, (state, action) => {
  //         state.loading = "rejected";
  //         // state.error = action.error.message;
  //       });
  //   },
});

export const { setLogin } = appSlice.actions;
export default appSlice.reducer;
