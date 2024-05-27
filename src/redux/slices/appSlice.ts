import { createSlice } from "@reduxjs/toolkit";
// import { authService } from "../services/authService";

// export const fetchUserData = createAsyncThunk(
//   "user/fetchUserData",
//   async (body) => {
//     const data = await authService.getProfile();
//     return data?.data;s
//   }
// );

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLogin: false,
    infoUser: null,
    openSidebar: true,
    language: "en",
    theme: "light",
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setInfoUser: (state, action) => {
      state.infoUser = action.payload;
    },
    setOpenSidebar: (state, action) => {
      state.openSidebar = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
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

export const { setLogin, setInfoUser, setOpenSidebar, setTheme, setLanguage } =
  appSlice.actions;
export default appSlice.reducer;
