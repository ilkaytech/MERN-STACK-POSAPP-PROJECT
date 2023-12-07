import CartTotals from "./components/cart/CartTotals";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 md:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh_-_107px)] md:pb-10  ">
          <Categories />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_107px)] overflow-auto ">
          <Products />
        </div>
        <div className="card-wrapper min-w-[300px] md:-mr[24px] md:-mt[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
}

export default App;
