interface Props {
  title: string;
  src: string;
}

export const CoverImage = ({ title, src }: Props) => {
  return (
    <div className="sm:mx-0">
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        className="shadow-small"
      />
    </div>
  );
};
