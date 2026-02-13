import { useLocation } from "react-router-dom";
import "../../styles/navbar.css";

const TITLES = {
  "/": "Overview",
  "/customers": "Customers",
  "/products": "Products",
  "/orders": "Orders",
};

export default function Navbar() {
  const location = useLocation();
  const title = TITLES[location.pathname] ?? "Dashboard";

  return (
    <header className="navbar">
      <h4 className="navbar-title">{title}</h4>

      <div className="navbar-right">
        <span className="navbar-user">Mohamad</span>
        <button className="navbar-btn" type="button">
          Logout
        </button>
      </div>
    </header>
  );
}