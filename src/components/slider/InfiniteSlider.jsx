import Image from "next/image";
import copy from "../../assets/copy.svg";
import print from "../../assets/print.svg";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import getCurrencyInfo from "../../../lib/tokenInfo";
import { useEffect, useState } from "react";

const InfiniteSlider = () => {
  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const content = await getCurrencyInfo();
      setTokenList(content);
    };
    getInfo();
    setInterval(() => getInfo(), 60000);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slide-track">
          {tokenList.map((token, index) => (
            <div className="slide" key={index}>
              <p className="slide-text-name">{token[0].market.split("-")[1]}</p>
              <IconContext.Provider
                value={{
                  color:
                    token[0].signed_change_rate < 0
                      ? "rgba(26, 137, 23, 1)"
                      : "rgba(186, 4, 2, 1)",
                  className: "global-class-name",
                }}
              >
                <div>
                  {" "}
                  {token[0].signed_change_rate < 0 ? (
                    <AiFillCaretDown />
                  ) : (
                    <AiFillCaretUp />
                  )}
                </div>
              </IconContext.Provider>
              <p
                className="slide-text-value"
                style={{
                  background:
                    token[0].signed_change_price < 0
                      ? "rgba(26, 137, 23, 0.15)"
                      : "rgba(186, 4, 2, 0.1)",
                }}
              >
                {Number(token[0].trade_price).toLocaleString({
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
                {" KRW"}
                <span
                  className="slide-text-change"
                  style={{
                    color:
                      token[0].signed_change_rate < 0
                        ? "rgba(26, 137, 23, 1)"
                        : "rgba(186, 4, 2, 1)",
                  }}
                >
                  {Number(token[0].signed_change_rate).toFixed(2)} {"%"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
