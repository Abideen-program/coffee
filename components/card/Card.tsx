import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="my-10">
      <Link href="/">
        <div className="m-auto shadow-lg shadow-transparent">
          <div
            className={`border border-glassBorder p-4 rounded-md backdrop-blur-[10px] bg-glass hover:bg-glassHover hover:border-borderHover`}
          >
            <div className="mb-2">
              <h2 className="font-extrabold text-ellipsis whitespace-nowrap text-lg overflow-hidden w-[256px]">
                Niagara Coffee Shop
              </h2>
            </div>

            <div className="text-teal-50">
              <Image
                src="/images/hero.png"
                alt="coffee-shop"
                width={230}
                height={160}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
