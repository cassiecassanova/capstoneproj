import { Link } from "react-router-dom";
import "./Navigation-item.css";

const NavigationItem = ({ link, title }) => {
  return (
    <li className="nav-links">
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default NavigationItem;
