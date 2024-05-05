import NumberTicker from "./number-ticker";

const NumberTickerComponent = ({ number }: any) => {
  return (
    <p className="whitespace-pre-wrap text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
      <NumberTicker value={number} />+
    </p>
  );
};

export default NumberTickerComponent;
