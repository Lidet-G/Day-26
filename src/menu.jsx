import MenuItem from "./MenuItem";

const menu = [
  {
    id: 1,
    name: "Buna",
    price: 80,
    description: "Traditional Ethiopian coffee",
    category: "Drink",
  },
  {
    id: 2,
    name: "Shiro",
    price: 150,
    description: "Traditional Ethiopian chickpea stew",
    category: "Main",
  },
  {
    id: 3,
    name: "Tibs",
    price: 250,
    description: "Sautéed beef with vegetables",
    category: "Main",
  },
  {
    id: 4,
    name: "Firfir",
    price: 130,
    description: "Injera pieces mixed with berbere sauce",
    category: "Breakfast",
  },
  {
    id: 5,
    name: "Chechebsa",
    price: 120,
    description: "Torn flatbread with butter and honey",
    category: "Breakfast",
  },
];

function Menu() {
  return (
    <main className="menu-section">
      <h2>Our Menu</h2>

      <div className="menu-list">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;