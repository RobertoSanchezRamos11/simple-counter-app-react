import { useState } from "react";
import "./styles/contadorStyle.css";

export const ContadorApp = ({ value }) => {
  const [contador, setContador] = useState(value);

  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };

  return (
    <section className="containerApp">
      <div className="app">
        <h1 className="title">ContadorApp</h1>
        <p>{contador}</p>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
    </section>
  );
};
