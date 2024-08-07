export const SkeletonLoadingRow = ({ node, toggle }) => {
  return (
    <>
      <div ref={node} className={"max-w-xs w-full rounded-md " + toggle}>
        <div className="skeleton h-96 w-full bg-base-content/20"></div>
      </div>
      <div ref={node} className={"max-w-xs w-full rounded-md " + toggle}>
        <div className="skeleton h-96 w-full bg-base-content/20"></div>
      </div>
      <div ref={node} className={"max-w-xs w-full rounded-md " + toggle}>
        <div className="skeleton h-96 w-full bg-base-content/20"></div>
      </div>
    </>
  );
};
