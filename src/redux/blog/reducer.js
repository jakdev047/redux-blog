import { blogList } from "../../utility/blogData";

const initialState = {
    blogs: blogList,
    filterBlogs: [],
    authorNames: "",
    blogCategories: ""
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default blogReducer;
