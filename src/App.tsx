import StatCard from "./components/StatCard";
import NotificationBell from "./components/NotificationBell";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const stats = [
    { label: "Total Users", value: "1,250" },
    { label: "Monthly Revenue", value: "$10,500" },
    { label: "Active Projects", value: "80" },
  ];

  const users = [
    { id: 1, name: "John Doe", active: true },
    { id: 2, name: "Sina Nouri", active: false },
    { id: 3, name: "John Smith", active: true },
  ];

  const filteredStats = stats.filter((stat) =>
    stat.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h1>SaaS Dashboard</h1>
      <input placeholder="Search stats..." onChange={handleSearch} />
      {filteredStats.map((stat, index) => (
        <StatCard key={index} label={stat.label} value={stat.value} />
      ))}
      <NotificationBell />
      <UserList users={users} />
    </>
  );
}

export default App;
