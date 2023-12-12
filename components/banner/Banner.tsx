type Props = {
  text: string;
  handler: () => void;
};

const Banner = ({ text, handler }: Props) => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-extrabold flex flex-col md:flex-row md:gap-2 mb-7">
        <span className="text-white">Coffee</span>{" "}
        <span className="text-[#3A31C0]">Connoisseur</span>
      </h1>
      <p className="font-medium text-[15px] text-white">
        Discover your local coffee shops!
      </p>
      <button
        className="bg-[#463DE1] py-[1rem] px-[2.5rem] text-sm text-white my-4"
        onClick={handler}
      >
        {text}
      </button>
    </div>
  );
};

export default Banner;
