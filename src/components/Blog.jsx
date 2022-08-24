import React from "react";

export default function Blog() {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={"https://miro.medium.com/max/875/0*urj1fYqHHRPjgYvd.jpeg"}
          alt="blog"
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {"Article"}
            </span>
          </p>
          <div className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">
              Learn React JS
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex-shrink-0"
          >
            <img
              className="h-10 w-10 rounded-full"
              src={"https://avatars.githubusercontent.com/u/73503432?v=4"}
              alt="authorLogo"
            />
          </div>
          <div className="ml-3">
            <p
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              Learn with sumit
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">10 March, 2022</time>
              <span aria-hidden="true">&middot;</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}