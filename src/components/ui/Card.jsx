import "../../styles/card.css";

export default function Card({ title, children }) {
  return (
    <section className="card">
      {title ? <h3 className="card-title">{title}</h3> : null}
      <div>{children}</div>
    </section>
  );
}