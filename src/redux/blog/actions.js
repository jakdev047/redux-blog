import { AUTHORBYFILTER, CATEGORYBYFILTER, SEARCH } from "./actionTypes";

export const searchBlogAction = (title) => {
    return {
      type: SEARCH,
      payload: title,
    };
  };

export const categoryByFilterAction = (categoryName) => {
  return {
    type: CATEGORYBYFILTER,
    payload: categoryName,
  };
};

export const authorByFilterAction = (authorName) => {
  return {
    type: AUTHORBYFILTER,
    payload: authorName,
  };
};

