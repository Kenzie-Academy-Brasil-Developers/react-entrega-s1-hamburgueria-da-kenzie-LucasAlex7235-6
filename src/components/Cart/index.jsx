import { ShoppingCart } from "./style";

export const CartShow = ({
  currentSale,
  cartTotal,
  removeCard,
  price,
  removeAll,
}) => {
  return (
    <ShoppingCart>
      <header>
        <h3>Carrinho de compras</h3>
      </header>
      <ul>
        {currentSale.length > 0 ? (
          currentSale.map((cart) => {
            return (
              <li key={cart.id}>
                <div className="containerContent">
                  <figure>
                    <img src={cart.img} alt={cart.name} />
                  </figure>
                  <div>
                    <h3>{cart.name}</h3>
                    <span>{cart.category}</span>
                  </div>
                </div>
                <span
                  onClick={() => {
                    removeCard(cart, cart.price);
                    price(false, cart.price);
                  }}
                  className="material-symbols-outlined"
                >
                  delete
                </span>
              </li>
            );
          })
        ) : (
          <div className="clean">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </div>
        )}
      </ul>
      {currentSale.length > 0 && (
        <footer>
          <div>
            <p>Total</p>
            <span>
              R$
              {cartTotal.toString().split("").length < 4
                ? `${cartTotal},00`
                : cartTotal.toFixed(2)}
            </span>
          </div>
          <button onClick={removeAll}>Remover todos</button>
        </footer>
      )}
    </ShoppingCart>
  );
};
