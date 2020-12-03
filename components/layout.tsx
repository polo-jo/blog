// import { Footer } from "./footer";
import { Meta } from "./meta";

interface Props {
  preview?: boolean;
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
