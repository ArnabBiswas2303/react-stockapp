import { useState } from "react";
import BuySell from "./components/BuySell/BuySell";
import OrderBookList from "./components/OrderBookList/OrderBookList";
import "./styles.css";
import { randomNumInRange, insertInArray } from "./MathLib";

export default function App() {
  const [buyList, setBuyList] = useState([]);
  const [sellList, setSellList] = useState([]);

  const handleBuySell = (doWhat) => {
    const item = {
      id: randomNumInRange(1, 1000),
      volume: randomNumInRange(0.368, 2.398),
      price: randomNumInRange(2877, 5892)
    };

    switch (doWhat) {
      case "buy":
        setBuyList((prevBuyList) => insertInArray(prevBuyList, item));
        break;
      case "sell":
        setSellList((prevSellList) => insertInArray(prevSellList, item));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <BuySell
        onBuy={handleBuySell.bind(this, "buy")}
        onSell={handleBuySell.bind(this, "sell")}
      />
      <div className="BuyList">
        <OrderBookList list={buyList} />
      </div>
      <hr />
      <div className="SellList">
        <OrderBookList list={sellList} />
      </div>
    </div>
  );
}
