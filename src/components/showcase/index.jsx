import { UlShowcase } from "./style";

export const ShowCaseUl = ({
  products,
  setCurrentSale,
  price,
  boolean,
  filteredProducts,
}) => {
  return (
    <UlShowcase>
      {boolean
        ? products.length > 0
          ? products.map((cards) => {
              return (
                <li key={cards.id} className="card">
                  <figure>
                    <img src={cards.img} alt="" />
                  </figure>

                  <div className="content">
                    <h3>{cards.name}</h3>
                    <span className="type">{cards.category}</span>
                    <p>{`R$ ${
                      cards.price.toString().split("").length < 3
                        ? `${cards.price}.00`
                        : cards.price
                    }`}</p>
                    <button
                      onClick={() => {
                        setCurrentSale(cards);
                        price(true, cards.price, cards);
                      }}
                    >
                      Adicionar
                    </button>
                  </div>
                </li>
              );
            })
          : "Carregando..."
        : products.length > 0
        ? filteredProducts.map((cards) => {
            return (
              <li key={cards.id} className="card">
                <figure>
                  <img src={cards.img} alt="" />
                </figure>

                <div className="content">
                  <h3>{cards.name}</h3>
                  <span className="type">{cards.category}</span>
                  <p>{`R$ ${
                    cards.price.toString().split("").length < 3
                      ? `${cards.price}.00`
                      : cards.price
                  }`}</p>
                  <button
                    onClick={() => {
                      setCurrentSale(cards);

                      price(true, cards.price, cards);
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </li>
            );
          })
        : "Carregando..."}
    </UlShowcase>
  );
};
