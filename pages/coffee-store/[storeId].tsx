import React from "react";
import coffeeStoresData from "../../data/coffee-stores.json";
import { useRouter } from "next/router";

type storeProps = {
  store: store;
};

const CoffeeStore = ({ store }: storeProps) => {
  const router = useRouter();

  const { storeId } = router.query;

  if (router.isFallback) {
    return (
      <div className="flex flex-col items-center justify-center h-screen border border-green-500 p-3">
        <p className="text-4xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </button>
      <div>
        <p>{store.address}</p>
        <p>{store.name}</p>
        <p>{store.neighbourhood}</p>
      </div>
    </div>
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
