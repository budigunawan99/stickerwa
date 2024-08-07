import BlogList from "@/components/blog/BlogList";

const BlogPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      <BlogList />
    </div>
  );
};

export default BlogPage;
