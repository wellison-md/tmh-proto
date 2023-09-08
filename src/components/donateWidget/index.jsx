export default function DonateWidget() {
  return (
    <div>
      <h2>Ajude-nos com uma doação</h2>
      <span>
        <button>-</button>
        <input type="number" min='5' step='5' disabled />
        <button>+</button>
      </span>
      <button>Doar</button>
    </div>
  );
}
