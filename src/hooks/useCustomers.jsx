import { useMemo, useState } from "react";
import { mockCustomers } from "../utils/mockCustomers";

export function useCustomers() {
  const [customers, setCustomers] = useState(mockCustomers);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return customers;

    return customers.filter((c) => {
      return (
        c.name.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        (c.email || "").toLowerCase().includes(q)
      );
    });
  }, [customers, query]);

  function addCustomer(customer) {
    const newCustomer = { ...customer, id: `c_${Date.now()}` };
    setCustomers((prev) => [newCustomer, ...prev]);
  }

  function updateCustomer(id, updated) {
    setCustomers((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  }

  function deleteCustomer(id) {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  }

  return {
    customers,
    filtered,
    query,
    setQuery,
    addCustomer,
    updateCustomer,
    deleteCustomer,
  };
}