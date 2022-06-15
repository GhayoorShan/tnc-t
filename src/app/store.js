import { configureStore } from "@reduxjs/toolkit";

import addQuestionReducer from "../features/QuestionAndAnswers/addQuestionSlice";

export const store = configureStore({
  reducer: {
    posts: addQuestionReducer,
  },
});
