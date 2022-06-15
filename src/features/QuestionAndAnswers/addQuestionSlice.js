import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const addQuestionSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      console.log("post sliced + ", state);
      for (let i of action.payload) state.push(i);
      console.log("post sliced + ", action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = addQuestionSlice.actions;

export default addQuestionSlice.reducer;
