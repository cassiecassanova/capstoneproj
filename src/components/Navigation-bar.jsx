import NavigationItem from "./Navigation-item";
import "./Navigation-bar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  const navigation = [
    { title: "Home", link: "Home" },
    { title: "Products", link: "Products" },
    { title: "Cart", link: "Cart" },
  ];
  return (
    <nav>
      <ul className="nav-items">
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={index}
            link={navItem.link}
            title={navItem.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
