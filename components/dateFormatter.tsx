import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

export function DateFormatter({ dateString }: Props): JSX.Element {
  const date = parseISO(dateString);
  return (
    <time
      className="text-gray-600 italic font-light text-base"
      dateTime={dateString}
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
