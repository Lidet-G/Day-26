import Dish from './Dish';

function Header() {
  return (
    <header className="header">
      <h1>Addis Eats</h1>
      <p>Welcome to our static menu!</p>
    </header>
  );
}

export default function App() {
  const dishes = [
    { id: 1, name: 'Doro Wat', price: 450 },
    { id: 2, name: 'Beyaynet', price: 250 },
    { id: 3, name: 'Tibs', price: 500 },
    { id: 4, name: 'Shiro Wat', price: 200 },
  ];

  return (
    <div className="app-container">
      <Header />
      <main className="menu-list">
        {dishes.map((dish) => (
          <Dish 
            key={dish.id} 
            name={dish.name} 
            price={dish.price} 
          />
        ))}
      </main>
    </div>
  );
}