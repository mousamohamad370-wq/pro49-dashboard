import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="logo">PRO49</h3>

      <nav>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/" end className="sidebar-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/customers" className="sidebar-link">
              Customers
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className="sidebar-link">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className="sidebar-link">
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}