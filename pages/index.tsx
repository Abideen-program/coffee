import Banner from "@/components/banner/Banner";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const findStores = () => {
    console.log("Hi Coffee Store");
  };

  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta
          name="description"
          content="This page helps to discover coffee shops around your location"
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Banner text="View stores nearby" handler={findStores} />
      </main>
    </>
  );
}
