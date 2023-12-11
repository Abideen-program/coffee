type Props = {
  text: string;
  handler: () => void;
};

const Banner = ({ text, handler }: Props) => {
  return (
    <div>
      <h1>
        <span>Coffee</span> <span>Connoisseur</span>
      </h1>
      <p>Discover your local coffee shops!</p>
      <button className="border" onClick={handler}>
        {text}
      </button>
    </div>
  );
};

export default Banner;
