import Link from "next/link";
import { Author } from "../types/author";
import { DateFormatter } from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview(props: Props): JSX.Element {
  return (
    <div className="mb-10">
      <h3 className="text-3xl leading-snug text-header">
        <Link as={`/posts/${props.slug}`} href="/posts/[slug]">
          <a className="hover:underline">{props.title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-2">
        <DateFormatter dateString={props.date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{props.excerpt}</p>
    </div>
  );
}
