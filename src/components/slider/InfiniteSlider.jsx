import Image from "next/image";
import copy from "../../assets/copy.svg";
import print from "../../assets/print.svg";
const InfiniteSlider = () => {
  const tokens = [
    {
      name: "BTC",
      value: "$176.29",
      change: "+%3.14",
    },
    {
      name: "ETH",
      value: "$18674.11",
      change: "-%1.97",
    },
    {
      name: "BTC",
      value: "$176.29",
      change: "+%3.14",
    },
    {
      name: "BTC",
      value: "$18674.11",
      change: "-%1.97",
    },
    {
      name: "TON",
      value: "$176.29",
      change: "+%3.14",
    },
    {
      name: "UNI",
      value: "$18674.11",
      change: "-%1.97",
    },
    {
      name: "TOS",
      value: "$176.29",
      change: "+%3.14",
    },
    {
      name: "LYDA",
      value: "$18674.11",
      change: "-%1.97",
    },
    {
      name: "DODGE",
      value: "$176.29",
      change: "+%3.14",
    },
    {
      name: "USDT",
      value: "$18674.11",
      change: "-%1.97",
    },
  ];

  return (
    <>
      <div className="slider">
        <div className="slide-track">
          {tokens.map((token, index) => (
            <div className="slide" key={index}>
				<p className="slide-text-name">{token.name}</p>
				<p className="slide-text-value" style={{background: token.change[0] ==='-'?'rgba(26, 137, 23, 0.15)' :'rgba(186, 4, 2, 0.1)'}}>{token.value} <span className="slide-text-change">{token.change}</span></p>
			
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
