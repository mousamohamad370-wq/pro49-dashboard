import { useMemo, useState } from "react";
import { mockProducts } from "../utils/mockProducts";

export function useProducts() {
  const [products, setProducts] = useState(mockProducts);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;

    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
      );
    });
  }, [products, query]);

  function addProduct(product) {
    const newProduct = { ...product, id: `p_${Date.now()}` };
    setProducts((prev) => [newProduct, ...prev]);
  }

  function updateProduct(id, updated) {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return { filtered, query, setQuery, addProduct, updateProduct, deleteProduct };
}