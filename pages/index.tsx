import Banner from "@/components/banner/Banner";
import Card from "@/components/card/Card";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { fetchStores } from "@/lib/coffee-store";
import useLocationTracker from "@/hooks/useLocationTracker";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

type props = {
  coffeeStores: store[];
};

export default function Home({ coffeeStores }: props) {
  const { latlong, handleTrackLocation, errorMessage, locating } =
    useLocationTracker();

  const [locatedStore, setLocatedStore] = useState<store[]>([]);
  const [locatedStoreError, setLocatedStoreError] = useState(null);

  const findStores = () => {
    handleTrackLocation();
  };

  useEffect(() => {
    const setCoffeeStoreByLocation = async () => {
      if (latlong) {
        console.log(latlong);
        try {
          const coffeeStores = await fetchStores(latlong);
          setLocatedStore(coffeeStores);
          console.log(coffeeStores);
        } catch (error: any) {
          setLocatedStoreError(error.message);
        }
      }
    };
    setCoffeeStoreByLocation();
  }, [latlong]);

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
        className={`flex  flex-col sm:max-w-[72rem] mt-[2rem] mx-auto p-[1rem] md:p-10 lg:p-20 ${inter.className}`}
      >
        <Banner
          text={locating ? "Locating..." : "View stores nearby"}
          handler={findStores}
        />
        <div className="absolute top-0 right-0 lg:right-[20%] z-[1] ">
          <Image
            src="/images/hero.png"
            alt="lady drinking coffee"
            width={700}
            height={400}
            priority={true}
          />
        </div>

        {locatedStoreError && (
          <p className="text-sm mt-6">
            Something went wrong: {locatedStoreError}
          </p>
        )}

        {locatedStore.length > 0 && (
          <>
            <h2 className="text-[#DFE1E5] text-3xl font-semibold my-8">
              Stores near me
            </h2>
            <div className="mb-7 grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
              {locatedStore.map((store) => {
                return (
                  <Card
                    key={store.id}
                    name={store.name}
                    imgUrl={
                      store.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
                    href={`/coffee-store/${store.id}`}
                  />
                );
              })}
            </div>
          </>
        )}

        {errorMessage && (
          <p className="text-sm mt-6">Something went wrong: {errorMessage}</p>
        )}

        {coffeeStores.length > 0 && (
          <>
            <h2 className="text-[#DFE1E5] text-3xl font-semibold my-8">
              Toronto Stores
            </h2>
            <div className="mb-7 grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
              {coffeeStores.map((store) => {
                return (
                  <Card
                    key={store.id}
                    name={store.name}
                    imgUrl={
                      store.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
                    href={`/coffee-store/${store.id}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const coffeeStores = await fetchStores();

  return {
    props: {
      coffeeStores,
    },
  };
};
