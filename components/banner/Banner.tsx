type Props = {
  text: string;
  handler: () => void;
};

const Banner = ({ text, handler }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-4 z-10">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold flex flex-col md:flex-row md:gap-2">
        <span className="text-white">Coffee</span>{" "}
        <span className="text-[#3A31C0]">Connoisseur</span>
      </h1>
      <p className="font-medium text-white text-sm md:text-base">
        Discover your local coffee shops!
      </p>
      <button
        className="bg-[#463DE1] py-[13px] md:py-[1rem] px-[1rem] md:px-[2.5rem] text-sm text-white focus:border w-fit"
        onClick={handler}
      >
        {text}
      </button>
    </div>
  );
};

export default Banner;
