interface StatCardProps {
  label: string;
  value: string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div>
      <p>{label}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;
