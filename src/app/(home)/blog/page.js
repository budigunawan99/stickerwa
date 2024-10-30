import BlogList from "@/components/blog/BlogList";

const BlogPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-center text-[2.5rem] font-bold mb-10">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <BlogList />
      </div>
    </div>
  );
};

export default BlogPage;
