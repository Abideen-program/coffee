import Banner from "@/components/banner/Banner";
import Card from "@/components/card/Card";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

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
        className={`flex min-h-screen flex-col sm:max-w-[72rem] mt-[2rem] mx-auto p-[1rem] md:p-10 lg:p-20 ${inter.className}`}
      >
        <Banner text="View stores nearby" handler={findStores} />
        <div className="absolute top-0 right-0 lg:right-[20%] z-[1] ">
          <Image
            src="/images/hero.png"
            alt="lady drinking coffee"
            width={700}
            height={400}
          />
        </div>
        <Card />
      </main>
    </>
  );
}
