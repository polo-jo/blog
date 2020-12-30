import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/animatedBackground.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
