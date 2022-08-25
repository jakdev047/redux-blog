import React from "react";
import { useDispatch } from "react-redux";
import { authorByFilterAction, categoryByFilterAction } from "../redux/blog/actions";

export default function Blog({ item }) {
  const dispatch = useDispatch();
  const categoryFilterHandler = (categoryName) => {
    dispatch(categoryByFilterAction(categoryName));
  };

  const authorFilterHandler = (authorName) => {
    dispatch(authorByFilterAction(authorName));
  };
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={item?.blogImage}
          alt="blog"
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              onClick={(e) => {
                e.stopPropagation();
                categoryFilterHandler(item?.blogCategory);
              }}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {item?.blogCategory}
            </span>
          </p>
          <div className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">
              {item?.blogName}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div
            onClick={(e) => {
              e.stopPropagation();
              authorFilterHandler(item?.authorName);
            }}
            className="flex-shrink-0"
          >
            <img
              className="h-10 w-10 rounded-full"
              src={`${item?.authorLogo}`}
              alt="authorLogo"
            />
          </div>
          <div className="ml-3">
            <p
              onClick={(e) => {
                e.stopPropagation();
                authorFilterHandler(item?.authorName);
              }}
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              {item?.authorName}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{item?.blogDate}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{item?.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
