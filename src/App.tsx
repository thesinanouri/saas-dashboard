import StatCard from "./components/StatCard";
import NotificationBell from "./components/NotificationBell";

function App() {
  const stats = [
    { label: "Total Users", value: "1,250" },
    { label: "Monthly Revenue", value: "$10,500" },
    { label: "Active Projects", value: "80" },
  ];
  return (
    <>
      <h1>SaaS Dashboard</h1>
      {stats.map((stat, index) => (
        <StatCard key={index} label={stat.label} value={stat.value} />
      ))}
      <NotificationBell />
    </>
  );
}

export default App;
