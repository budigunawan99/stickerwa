import BlogList from "@/components/blog/BlogList";

const BlogPage = () => {
  return (
    <>
      <h1 className="text-center text-[2.5rem] font-bold mb-10">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <BlogList />
      </div>
    </>
  );
};

export default BlogPage;
