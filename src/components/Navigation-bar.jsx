import NavigationItem from "./Navigation-item";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "Home" },
    { title: "Products", link: "products" },
  ];
  return (
    <nav>
      <ul>{navigation.map((navItem, index))}</ul>
    </nav>
  );
}
