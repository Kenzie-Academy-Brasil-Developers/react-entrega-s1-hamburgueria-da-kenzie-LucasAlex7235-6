import { Header } from "./style";
import { useState } from "react";

export const LogoHeader = ({ filter, setState }) => {
  const [nameProduct, setNameProduct] = useState("");

  const searchProduct = () => {
    filter(nameProduct);
  };

  return (
    <Header>
      <div>
        <h1 onClick={() => setState(true)}>
          Burguer <span>Kenzie</span>
        </h1>

        <form onSubmit={(event) => searchProduct(event.preventDefault())}>
          <input
            type="text"
            placeholder="Digitar pesquisa"
            value={nameProduct}
            onChange={(event) => setNameProduct(event.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </Header>
  );
};
