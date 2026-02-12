import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="logo">PRO49</h3>

      <ul className="sidebar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/orders">Orders</Link></li>
      </ul>
    </div>
  );
}