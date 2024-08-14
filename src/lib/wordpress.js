export const getArticles = async ({ number, offset }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts/?pretty=true&fields=ID,site_ID,author,date,title,slug,featured_image,excerpt&number=${number}&offset=${offset}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const getArticleBySlug = async ({ slug }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API}/posts/slug:${slug}/?pretty=true&fields=ID,site_ID,author,date,title,featured_image,content`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
