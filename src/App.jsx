import "./style/reset.css";
import { useState, useEffect } from "react";
import { LogoHeader } from "./components/header";
import { SectionShow } from "./components/section";
import { ShowCaseUl } from "./components/showcase";
import { CartShow } from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const notifyError = () => {
    toast.error("🍔 Já foi adicionado no carrinho", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyConfirm = () => {
    toast.success("🍔 Adicionado no carrinho com sucesso", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addCart = (food) => {
    setId([...id, food.id]);
    if (currentSale.length > 0) {
      !id.includes(food.id)
        ? !setCurrentSale([...currentSale, food]) && notifyConfirm()
        : notifyError();
    } else if (currentSale.length < 1) {
      setCurrentSale([...currentSale, food]);
      notifyConfirm();
    }
  };

  const removeCard = (food, price) => {
    const listCart = currentSale.filter((elem) => elem.id !== food.id);
    const newId = listCart.map((elem) => elem.id);

    document.getElementById(food.id).classList.add("animate__fadeOut");
    setTimeout(() => {
      setId(newId);
      setCurrentSale(listCart);
    }, 100);
  };

  const removeAll = () => {
    setCurrentSale([]);
    setId([]);
    setCartTotal(0);
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
      <SectionShow search={search} state={state}>
        <ShowCaseUl
          products={products}
          setCurrentSale={addCart}
          price={price}
          boolean={state}
          filteredProducts={filteredProducts}
        />
        <ToastContainer />
        <CartShow
          currentSale={currentSale}
          cartTotal={cartTotal}
          removeCard={removeCard}
          price={price}
          removeAll={removeAll}
        />
      </SectionShow>
    </div>
  );
};

export default App;
