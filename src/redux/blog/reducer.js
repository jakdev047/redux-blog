import { blogList } from "../../utility/blogData";

const blogReducer = (state = blogList, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default blogReducer;
