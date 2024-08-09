import { SkeletonLoadingRow } from "@/components/ui/SkeletonLoadingRow";
import React from "react";

const BlogLoading = () => {
  return (
    <>
      <h1 className="text-center text-[2.5rem] font-bold mb-10">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <SkeletonLoadingRow />
        <SkeletonLoadingRow />
      </div>
    </>
  );
};

export default BlogLoading;
