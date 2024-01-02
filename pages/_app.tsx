import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "@/context/storeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
      {/* <Footer /> */}
    </>
  );
}
