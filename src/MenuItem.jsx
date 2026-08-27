function MenuItem({ name, price, description, category }) {
  return (
    <article className="menu-card">
      <h3>{name}</h3>

      <p className="description">
        {description}
      </p>

      <p className="category">
        {category}
      </p>

      <p className="price">
        {price} ETB
      </p>
    </article>
  );
}

export default MenuItem;