import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./BooksDataSlice";
export default configureStore({
  reducer: {
    books: reducer,
  },
});
