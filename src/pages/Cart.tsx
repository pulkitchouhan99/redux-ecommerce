import { useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const items = useSelector((state: any) => state.cart);
  console.log("first", items);
  const dispatch = useDispatch();
  const handleRemove = (productId: any) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items?.map((product: any) => {
          return (
            <div className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
