import { DateFormatter } from "./dateFormatter";
import { CoverImage } from "./coverImage";
import { PostTitle } from "./postTitle";
import { Author } from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
