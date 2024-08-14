"use client";

import React, { useEffect, useState } from "react";
import { BlogListItem } from "./BlogListItem";
import { useInView } from "react-intersection-observer";
import { SkeletonLoadingRow } from "../ui/SkeletonLoadingRow";
import Link from "next/link";
import { getArticles } from "@/lib/wordpress";

const NUMBER_OF_POSTS_TO_FETCH = 3;

const BlogList = () => {
  const [displayArticles, setDisplayArticles] = useState([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [errorArticles, setErrorArticles] = useState("");
  const [errorLoadMore, setErrorLoadMore] = useState("");

  const [articlesCounter, setArticlesCounter] = useState(0);
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const { ref, inView } = useInView();

  //First Mounted Fetching
  useEffect(() => {
    let ignore = false;
    setIsLoadingArticles(true);
    getArticles({
      number: NUMBER_OF_POSTS_TO_FETCH,
      offset: 0,
    })
      .then((articles) => {
        if (!ignore) {
          setDisplayArticles(articles.posts);
          setErrorArticles("");
          setArticlesCounter(articles.found);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setErrorArticles(err);
          setDisplayArticles([]);
        }
      })
      .finally(() => {
        if (!ignore) {
          setIsLoadingArticles(false);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  //Load More Fetching
  useEffect(() => {
    let ignore = false;
    if (inView) {
      getArticles({
        number: NUMBER_OF_POSTS_TO_FETCH,
        offset: offset,
      })
        .then((articles) => {
          if (!ignore) {
            setDisplayArticles((previousArticles) => {
              return [...previousArticles, ...articles.posts];
            });
            setErrorLoadMore("");
          }
        })
        .catch((err) => {
          if (!ignore) {
            setErrorLoadMore(err);
          }
        });
      setOffset(offset + NUMBER_OF_POSTS_TO_FETCH);
    }
    return () => {
      ignore = true;
    };
  }, [inView]);

  return (
    <>
      {isLoadingArticles ? (
        <>
          <SkeletonLoadingRow />
          <SkeletonLoadingRow />
        </>
      ) : (
        displayArticles.map((article) => {
          return (
            <Link
              key={article.ID}
              className="z-0"
              href={`/blog/${article.slug}`}
            >
              <BlogListItem article={article} />
            </Link>
          );
        })
      )}

      <SkeletonLoadingRow
        node={ref}
        toggle={
          displayArticles.length === articlesCounter ? "hidden" : "block"
        }
      />
    </>
  );
};

export default BlogList;
