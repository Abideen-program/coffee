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

  return (
    <div>
      Coffe Store Page for store {storeId}: {store.name}
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
  });

  console.log({ store, storeId });

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
