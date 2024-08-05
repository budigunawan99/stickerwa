import { articles } from "@/lib/data";
import React from "react";

const BlogLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {articles.map((article) => (
        <div
          key={article.id}
          className="flex max-w-xs w-full flex-col gap-4 rounded-md"
        >
          <div className="skeleton h-96 w-full bg-base-content/20"></div>
        </div>
      ))}
    </div>
  );
};

export default BlogLoading;
