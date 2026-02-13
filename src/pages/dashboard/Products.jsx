import { useState } from "react";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import ProductForm from "./ProductForm";
import "../../styles/products.css";
import { useProducts } from "../../hooks/useProducts";

function formatPrice(n) {
  const num = Number(n);
  if (Number.isNaN(num)) return "-";
  return `$${num.toFixed(2)}`;
}

export default function Products() {
  const { filtered, query, setQuery, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleDelete(id) {
    const ok = confirm("Delete this product?");
    if (!ok) return;
    deleteProduct(id);
  }

  function stockBadge(stock) {
    if (stock === 0) return <span className="badge badge-out">Out of stock</span>;
    if (stock > 0 && stock <= 10) return <span className="badge badge-low">Low</span>;
    return <span className="badge badge-ok">OK</span>;
  }

  const columns = [
    { key: "name", header: "Name" },
    { key: "sku", header: "SKU" },
    { key: "price", header: "Price", render: (row) => formatPrice(row.price) },
    { key: "stock", header: "Stock", render: (row) => <span className="stock-cell">{row.stock} {stockBadge(row.stock)}</span> },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="actions">
          <button
            className="btn btn-small"
            onClick={() => {
              setEditing(row);
              setShowForm(true);
            }}
          >
            Edit
          </button>
          <button className="btn btn-small btn-danger" onClick={() => handleDelete(row.id)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="stack">
      <Card title="Products">
        <div className="products-toolbar">
          <input
            className="search"
            placeholder="Search by name or SKU..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="btn btn-primary"
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
          >
            + Add Product
          </button>
        </div>

        <Table columns={columns} rows={filtered} renderRowKey={(row) => row.id} />
      </Card>

      {showForm && (
        <ProductForm
          initialValue={editing}
          onSubmit={(data) => {
            if (editing) updateProduct(editing.id, data);
            else addProduct(data);

            setEditing(null);
            setShowForm(false);
          }}
          onCancel={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}