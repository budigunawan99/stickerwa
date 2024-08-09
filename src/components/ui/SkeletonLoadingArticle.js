export const SkeletonLoadingArticle = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="skeleton h-12 w-full bg-base-content/20"></div>
        <div className="flex items-center gap-4">
          <div className="skeleton h-10 w-10 shrink-0 rounded-full bg-base-content/20"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-52 bg-base-content/20"></div>
            <div className="skeleton h-3 w-52 bg-base-content/20"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="skeleton h-[450px] w-full bg-base-content/20 mb-5"></div>
          <div className="skeleton h-3 w-[300px] bg-base-content/20"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
          <div className="skeleton h-5 w-full bg-base-content/20"></div>
        </div>
      </div>
    </>
  );
};
