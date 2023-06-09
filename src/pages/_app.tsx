import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <title>Digilock</title>
      <Component {...pageProps} />
    </main>
  );
}
