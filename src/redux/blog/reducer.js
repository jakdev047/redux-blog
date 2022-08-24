import { blogList } from "../../utility/blogData";
import { SEARCH } from "./actionTypes";

const initialState = {
  blogs: blogList,
  filterBlogs: [],
  authorNames: "",
  blogCategories: "",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        filterBlogs: state?.blogs?.filter((item) =>
          item?.blogName
            ?.toLowerCase()
            ?.includes(action?.payload?.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default blogReducer;
