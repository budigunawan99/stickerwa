import { SkeletonLoadingArticle } from "@/components/ui/SkeletonLoadingArticle";
import React from "react";

const ContentBlogLoading = () => {
  return (
    <div className="md:px-[5vw] lg:px-[10vw] xl:px-[15vw]">
      <SkeletonLoadingArticle />
    </div>
  );
};

export default ContentBlogLoading;
