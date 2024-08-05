import BlogCard from "@/components/blogCard/BlogCard";
import { articles } from "@/lib/data";

const BlogPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
      {articles.map((article) => (
        <BlogCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default BlogPage;
