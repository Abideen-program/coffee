import { useState } from "react";
import coffeeStoresData from "../../data/coffee-stores.json";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { fetchStores } from "@/lib/coffee-store";

type storeProps = {
  store: store;
};

const CoffeeStore = ({ store }: storeProps) => {
  const { id, name, address, neighborhood, imgUrl } = store;
  const router = useRouter();

  const [rating, setRating] = useState<number>(0);

  const upvoteHandler = () => {
    setRating((rating) => rating + 1);
  };

  if (router.isFallback) {
    return (
      <div className="flex flex-col items-center justify-center h-screen border border-green-500 p-3">
        <p className="text-4xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="This is a store with good coffee output"
        />
      </Head>
      <div className="h-full lg:h-screen">
        <div className="grid p-7 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-3 place-self-center">
            <p
              onClick={() => {
                router.back();
              }}
              className="font-bold w-fit mt-24 text-lg leading-7 cursor-pointer"
            >
              ← Back to home
            </p>
            <h1 className="font-bold text-[#FEFDFE] text-4xl my-2">{name}</h1>
            <Image
              src={
                imgUrl ||
                "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              }
              alt="coffee store"
              width={500}
              height={0}
              className="rounded-xl max-w-full h-[360px] align-middle border-none"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 self-center rounded-2xl mt-[4rem] ml-2 text-[#373b64] border border-glassBorder backdrop-blur-[10px] bg-glass hover:bg-glassHover hover:border-borderHover transition-all duration-300`">
            {address && (
              <div className="flex items-center mb-4">
                <Image
                  src="/icons/places.svg"
                  width="24"
                  height="24"
                  alt="address"
                />
                <p className="pl-2 text-xl font-[700] m-0 leading-8">
                  {address}
                </p>
              </div>
            )}

            {neighborhood && (
              <div className="flex items-center mb-4">
                <Image
                  src="/icons/nearMe.svg"
                  width="24"
                  height="24"
                  alt="neighbourhood"
                />
                <p className="pl-2 text-xl font-[700] m-0 leading-8">
                  {neighborhood}
                </p>
              </div>
            )}

            <div className="flex items-center mb-4">
              <Image
                src="/icons/star.svg"
                width="24"
                height="24"
                alt="rating"
                className="text-orange-300"
              />
              <p className="pl-2 text-xl font-[700] m-0 leading-8">{rating}</p>
            </div>

            <button
              className="w-fit p-2 my-2 bg-[#463DDF] text-[#FEFDFE]"
              onClick={upvoteHandler}
            >
              Up vote!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeStore;

type props = {
  params: { storeId: string };
};

export const getStaticProps = async ({ params: { storeId } }: props) => {
  const coffeeStores = await fetchStores();
  const store = coffeeStores.find((store: any) => {
    return store.id.toString() === storeId;
  })!;

  if (!store) {
    return {
      notFound: true,
    };
  }

  return {
    props: { store },
  };
};

export const getStaticPaths = async () => {
  const coffeeStores = await fetchStores();
  const paths = coffeeStores.map((store: any) => {
    return { params: { storeId: `${store.id}` } };
  });

  return {
    paths,
    fallback: true,
  };
};

//fsq3rqZ8a7FaMdBtt4vwmQjZ6XELiNYXzwsKiQWWb5ytEM8=
