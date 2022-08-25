import { blogList } from "../../utility/blogData";
import { filterData } from "../../utility/filter";
import { AUTHORBYFILTER, CATEGORYBYFILTER, SEARCH } from "./actionTypes";

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

    case CATEGORYBYFILTER:
      return {
        ...state,
        filterBlogs: filterData(
          action?.payload === state?.blogCategories ? "" : action?.payload,
          state?.authorNames,
          state?.blogs
        ),
        blogCategories:
          action?.payload === state?.blogCategories ? "" : action?.payload,
      };

    case AUTHORBYFILTER:
      return {
        ...state,
        filterBlogs: filterData(
          state?.blogCategories,
          action?.payload === state?.authorNames ? "" : action?.payload,
          state?.blogs
        ),
        authorNames:
          action?.payload === state?.authorNames ? "" : action?.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
