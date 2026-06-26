import StatCard from "./components/StatCard";
import NotificationBell from "./components/NotificationBell";
import UserList from "./components/UserList";
import { useState, useEffect } from "react";
import PageLayout from "./components/PageLayout";

function App() {
  const [search, setSearch] = useState("");
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    console.log("Dashboard loaded");
  }, []);
  useEffect(() => {
    console.log("User Searched for:", search);
  }, [search]);

  const stats = [
    { label: "Total Users", value: "1,250" },
    { label: "Monthly Revenue", value: "$10,500" },
    { label: "Active Prsojects", value: "80" },
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
    <PageLayout>
      <input placeholder="Search Stats..." onChange={handleSearch} />
      {filteredStats.map((stat, index) => (
        <StatCard key={index} label={stat.label} value={stat.value} />
      ))}
      <NotificationBell />
      <UserList users={users} />
    </PageLayout>
  );
}

export default App;
