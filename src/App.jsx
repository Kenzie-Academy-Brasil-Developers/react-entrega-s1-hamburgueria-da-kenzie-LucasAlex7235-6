import "./style/reset.css";
import { useState, useEffect } from "react";
import { LogoHeader } from "./components/header";
import { SectionShow } from "./components/section";
import { ShowCaseUl } from "./components/showcase";
import { CartShow } from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [id, setId] = useState([]);
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  const addCart = (food) => {
    setId([...id, food.id]);
    currentSale.length > 0
      ? !id.includes(food.id) && setCurrentSale([...currentSale, food])
      : setCurrentSale([...currentSale, food]);
  };

  const removeCard = (food, price) => {
    const listCart = currentSale.filter((elem) => elem.id !== food.id);
    const newId = listCart.map((elem) => elem.id);
    setId(newId);
    setCurrentSale(listCart);
  };

  const price = (boolean, price, food) => {
    boolean
      ? !id.includes(food.id) && setCartTotal(cartTotal + price)
      : setCartTotal(cartTotal - price);
  };

  const filter = (nameProduct) => {
    const listFilter =
      nameProduct &&
      products.filter(
        (elem) =>
          elem.name.toLowerCase().includes(nameProduct.toLowerCase()) ||
          elem.category.toLowerCase().includes(nameProduct.toLowerCase())
      );
    listFilter.length > 0 ? setState(false) : setState(true);
    setFilteredProducts(listFilter);
    setSearch(nameProduct);
  };

  return (
    <div className="reset containerMain">
      <LogoHeader filter={filter} />
      <SectionShow>
        <ShowCaseUl
          products={products}
          setCurrentSale={addCart}
          price={price}
          boolean={state}
          filteredProducts={filteredProducts}
        />
        <CartShow
          currentSale={currentSale}
          cartTotal={cartTotal}
          removeCard={removeCard}
          price={price}
        />
      </SectionShow>
    </div>
  );
};

export default App;
