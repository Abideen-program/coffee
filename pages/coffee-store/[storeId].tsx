import React from "react";
import coffeeStoresData from "../../data/coffee-stores.json";
import { useRouter } from "next/router";

type storeProps = {
  store: store;
};

const CoffeeStore = ({ store }: storeProps) => {
  const router = useRouter();

  const { storeId } = router.query;

  console.log({ store, storeId });

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
      <p>
        Coffe Store Page for store {storeId}: {store.name}
      </p>
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
  return {
    paths: [{ params: { storeId: "1" } }, { params: { storeId: "2" } }],
    fallback: true,
  };
};
