import { useState } from "react";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";
import CustomerForm from "./CustomerForm";
import "../../styles/customers.css";
import { useCustomers } from "../../hooks/useCustomers";

export default function Customers() {
  const { filtered, query, setQuery, addCustomer, updateCustomer, deleteCustomer } = useCustomers();

  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleDelete(id) {
    const ok = confirm("Delete this customer?");
    if (!ok) return;
    deleteCustomer(id);
  }

  const columns = [
    { key: "name", header: "Name" },
    { key: "phone", header: "Phone" },
    { key: "email", header: "Email" },
    { key: "status", header: "Status" },
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
      <Card title="Customers">
        <div className="customers-toolbar">
          <input
            className="search"
            placeholder="Search by name, phone, or email..."
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
            + Add Customer
          </button>
        </div>

        <Table columns={columns} rows={filtered} renderRowKey={(row) => row.id} />
      </Card>

      {showForm && (
        <CustomerForm
          initialValue={editing}
          onSubmit={(data) => {
            if (editing) updateCustomer(editing.id, data);
            else addCustomer(data);

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