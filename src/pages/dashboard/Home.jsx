import Card from "../../components/ui/Card";

export default function Home() {
  return (
    <div className="stack">
      <Card title="Welcome">
        <p>This is the dashboard overview page.</p>
      </Card>

      <Card title="Next Steps">
        <ul>
          <li>Day 2: Customers CRUD + Forms</li>
          <li>Later: Firebase Auth + Firestore</li>
          <li>Later: n8n automations</li>
        </ul>
      </Card>
    </div>
  );
}