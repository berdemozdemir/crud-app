import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllusers = createAsyncThunk(
  "getAllusers",
  async (body, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const newData = await response.json();
      return newData;
    } catch (error) {
      return rejectWithValue(error?.data);
    }
  }
);

const modalSlice = createSlice({
  name: "modal",
  initialState: { modaIsVisible: false, users: [] },
  extraReducers: (builder) => {
    builder.addCase(getAllusers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
  reducers: {
    showModalHandler(state) {
      state.modaIsVisible = true;
    },
    hideModalHandler(state) {
      state.modaIsVisible = false;
    },
    toggle(state, action) {
      state.modaIsVisible = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    removeItemFromUser(state, action) {},
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
