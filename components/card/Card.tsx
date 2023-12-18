import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  imgUrl: string;
  href: string;
};

const Card = ({ name, imgUrl, href }: Props) => {
  return (
    <div className="z-20">
      <Link href={href}>
        <div className="m-auto shadow-lg shadow-transparent ">
          <div
            className={`border border-glassBorder p-4 rounded-md backdrop-blur-[10px] bg-glass hover:bg-glassHover hover:border-borderHover transition-all duration-300`}
          >
            <div className="mb-2">
              <h2 className="font-extrabold text-ellipsis whitespace-nowrap text-lg overflow-hidden w-[256px]">
                {name}
              </h2>
            </div>

            <div className="text-teal-50">
              <Image
                src={imgUrl}
                alt="coffee-shop"
                width={260}
                height={160}
                className="rounded-md w-full h-[160px] object-fill"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
