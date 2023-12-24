import { useState } from "react";
import coffeeStoresData from "../../data/coffee-stores.json";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

type storeProps = {
  store: store;
};

const CoffeeStore = ({ store }: storeProps) => {
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
        <title>{store.name}</title>
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
              Back to home
            </p>
            <h1 className="font-bold text-[#FEFDFE] text-4xl my-2">
              {store.name}
            </h1>
            <Image
              src={store.imgUrl}
              alt="coffee store"
              width={600}
              height={0}
              className="rounded-xl max-w-full h-[360px] align-middle border-none"
            />
          </div>
          <div className="flex flex-col gap-3 p-4 self-center rounded-2xl mt-[4rem] ml-2 text-[#373b64] border border-glassBorder backdrop-blur-[10px] bg-glass hover:bg-glassHover hover:border-borderHover transition-all duration-300`">
            <div className="flex items-center mb-4">
              <Image
                src="/icons/places.svg"
                width="24"
                height="24"
                alt="address"
              />
              <p className="pl-2 text-xl font-[700] m-0 leading-8">
                {store.address}
              </p>
            </div>

            <div className="flex items-center mb-4">
              <Image
                src="/icons/nearMe.svg"
                width="24"
                height="24"
                alt="neighbourhood"
              />
              <p className="pl-2 text-xl font-[700] m-0 leading-8">
                {store.neighbourhood}
              </p>
            </div>

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
  const store = coffeeStoresData.find((store) => {
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
  const paths = coffeeStoresData.map((store) => {
    return { params: { storeId: `${store.id}` } };
  });

  return {
    paths,
    fallback: true,
  };
};

//fsq3rqZ8a7FaMdBtt4vwmQjZ6XELiNYXzwsKiQWWb5ytEM8=
