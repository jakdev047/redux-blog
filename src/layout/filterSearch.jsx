import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import searchImage from "../assets/images/search.svg";
import useDebounce from "../customHooks/useDebounce";
import { searchBlogAction } from "../redux/blog/actions";

export default function FilterSearch() {
  const debounce = useDebounce();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!inputValue) {
      console.log("inputValue", inputValue);
    }
  }, [inputValue]);

  const searchHandler = (title) => {
    dispatch(searchBlogAction(title));
  };

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => {
          setInputValue(e.target.value);
          debounce(() => {
            searchHandler(e.target.value);
          }, 700);
        }}
        value={inputValue}
      />
      <img
        className="inline h-6 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
}
