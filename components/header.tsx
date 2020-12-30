import Link from "next/link";

export function Header() {
  return (
    <span className="flex flex-row mb-20 pt-8">
      <h2 className="text-xl font-semibold tracking-tight md:tracking-tighter leading-tight flex-grow">
        <Link href="/">
          <a className="hover:underline text-secondary">polo-jo.io</a>
        </Link>
      </h2>
      <h2 className="text-xl font-semibold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/thoughts">
          <a className="hover:underline ml-4 text-secondary">thoughts</a>
        </Link>
      </h2>
      <h2 className="text-xl font-semibold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/about">
          <a className="hover:underline ml-4 text-secondary">about</a>
        </Link>
      </h2>
    </span>
  );
}
