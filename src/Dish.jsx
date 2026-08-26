export default function Dish({ name, price }) {
  return (
    <div className="dish-card">
      <h3>{name}</h3>
      <p>Price: ETB {price}</p>
    </div>
  );
}