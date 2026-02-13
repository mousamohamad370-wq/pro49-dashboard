import { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import "../../styles/form.css";

const empty = { name: "", phone: "", email: "", status: "Active" };

export default function CustomerForm({ initialValue, onSubmit, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (initialValue) setForm(initialValue);
  }, [initialValue]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) return alert("Name is required");
    if (!form.phone.trim()) return alert("Phone is required");

    onSubmit(form);
    setForm(empty);
  }

  return (
    <Card title={initialValue ? "Edit Customer" : "Add Customer"}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Customer name" />
        </div>

        <div className="form-row">
          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" />
        </div>

        <div className="form-row">
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" />
        </div>

        <div className="form-row">
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
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