import { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import "../../styles/form.css";

const empty = { name: "", sku: "", price: 0, stock: 0 };

export default function ProductForm({ initialValue, onSubmit, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (initialValue) setForm(initialValue);
  }, [initialValue]);

  function handleChange(e) {
    const { name, value } = e.target;

    // price/stock أرقام
    if (name === "price" || name === "stock") {
      setForm((prev) => ({ ...prev, [name]: value === "" ? "" : Number(value) }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) return alert("Product name is required");
    if (!form.sku.trim()) return alert("SKU is required");
    if (form.price < 0) return alert("Price must be >= 0");
    if (form.stock < 0) return alert("Stock must be >= 0");

    onSubmit(form);
    setForm(empty);
  }

  return (
    <Card title={initialValue ? "Edit Product" : "Add Product"}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Product name" />
        </div>

        <div className="form-row">
          <label>SKU</label>
          <input name="sku" value={form.sku} onChange={handleChange} placeholder="SKU code" />
        </div>

        <div className="form-row">
          <label>Price</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Stock</label>
          <input name="stock" type="number" value={form.stock} onChange={handleChange} />
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit">
            {initialValue ? "Save" : "Add"}
          </button>
          <button className="btn" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}