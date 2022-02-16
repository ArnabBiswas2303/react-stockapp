const OrderBookList = ({ list }) => {
  return list.map((listItem) => (
    <div className="OrderBookList" key={listItem.id}>
      <span>{listItem.volume.toFixed(3)}</span>
      <span>$ {listItem.price.toFixed(2)}</span>
    </div>
  ));
};

export default OrderBookList;
