import Header from "./Header";
import Menu from "./Menu";

function App() {
  const price = 100;
  const servicePrice = price * 1.15;

  return (
    <div className="app-container">
      <Header />
      <Menu />

      <p className="calculated-price">
        Example price with 15% service charge: {servicePrice} ETB
      </p>
    </div>
  );
}

export default App;