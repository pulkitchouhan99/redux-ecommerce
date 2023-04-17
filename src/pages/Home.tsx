import Product from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Product />
      </section>
    </div>
  );
};

export default Home;
