import { useState, useEffect } from "react";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

export interface IRating {
  count: number;
  rate: number;
}
export interface ICardData {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: IRating;
  length: number;
}

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log("data", data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handleAdd = (item: ICardData) => {
    dispatch(add(item));
  };

  return (
    <div className="productsWrapper">
      {products?.map((item: ICardData) => {
        return (
          <div key={item?.id} className="card">
            <img src={item?.image} alt="" />
            <h4>{item?.title}</h4>
            <h5>{item?.price}</h5>
            <button className="btn" onClick={() => handleAdd(item)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
