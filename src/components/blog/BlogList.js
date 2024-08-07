"use client";

import React, { useEffect, useState } from "react";
import { BlogListItem } from "./BlogListItem";
import { articles } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { SkeletonLoadingRow } from "../ui/SkeletonLoadingRow";

const initialArticles = articles.slice(0, 3);

const NUMBER_OF_POSTS_TO_FETCH = 3;

const BlogList = () => {
  const [displayArticles, setDisplayArticles] = useState(initialArticles);
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const { ref, inView } = useInView();

  const loadMorePosts = () => {
    const nextArticles = articles.slice(
      offset,
      offset + NUMBER_OF_POSTS_TO_FETCH
    );
    setDisplayArticles([...displayArticles, ...nextArticles]);
    setOffset(offset + NUMBER_OF_POSTS_TO_FETCH);
  };

  useEffect(() => {
    if (inView) {
      console.log("hai");
      loadMorePosts();
    }
  }, [inView]);

  return (
    <>
      {displayArticles.map((article) => (
        <BlogListItem key={article.id} {...article} />
      ))}

      <SkeletonLoadingRow
        node={ref} 
        toggle={
          displayArticles.length === articles.length ? "hidden" : "block"
        }
      />

    </>
  );
};

export default BlogList;
