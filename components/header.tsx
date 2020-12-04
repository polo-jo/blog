import Link from "next/link";

export function Header() {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 pt-8">
      <Link href="/">
        <a className="hover:underline">polo-jo.io</a>
      </Link>
      <Link href="/thoughts">
        <a className="hover:underline ml-4">Thoughts</a>
      </Link>
      .
      <Link href="/about">
        <a className="hover:underline ml-4">About</a>
      </Link>
    </h2>
  );
}
