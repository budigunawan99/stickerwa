import GetStartedBanner from "@/components/banner/GetStartedBanner";
import { UserImageLoading } from "@/components/ui/UserImageLoading";
import { getArticleBySlug } from "@/lib/wordpress";
import DateFormatter from "@/utils/date-formatter";
import Image from "next/image";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const article = await getArticleBySlug({ slug: slug });

  return {
    title: article.title,
  };
};

const ContentBlogPage = async ({ params }) => {
  const { slug } = params;

  const article = await getArticleBySlug({ slug: slug });

  const previewImage = article.featured_image || "/img_default.svg";

  return (
    <div className="md:px-[5vw] lg:px-[10vw] xl:px-[15vw]">
      <h1 className="text-[2.5rem] font-bold mb-10">{article.title}</h1>
      <div className="flex flex-row items-center space-x-4 mb-10">
        <Suspense fallback={<UserImageLoading />}>
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/user_default.svg"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
        </Suspense>

        <div className="flex flex-col">
          <p className="font-normal text-base text-gray-50 relative">
            {article.author.name}
          </p>
          <p className="text-sm text-gray-400">{DateFormatter(article.date)}</p>
        </div>
      </div>

      <div className="mb-10 text-center">
        <figure>
          <Image
            src={previewImage}
            alt="Main Article Image"
            width="400"
            height="200"
            className="w-full mb-5"
          />
          <figcaption className="text-[14px] text-base-content/80">
            {article.title}
          </figcaption>
        </figure>
      </div>

      <div className="mb-24">
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        ></div>
      </div>

      <div className="w-full">
        <GetStartedBanner />
      </div>
    </div>
  );
};

export default ContentBlogPage;
