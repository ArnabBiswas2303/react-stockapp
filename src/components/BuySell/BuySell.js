const BuySell = ({ onBuy, onSell }) => {
  return (
    <div className="BuySell">
      <button onClick={onBuy}>BUY</button>
      <button onClick={onSell}>SELL</button>
    </div>
  );
};

export default BuySell;
