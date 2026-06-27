import StatCard from "./components/StatCard";
import NotificationBell from "./components/NotificationBell";
import UserList from "./components/UserList";
import { useState, useEffect } from "react";
import PageLayout from "./components/PageLayout";
import UserFeed from "./components/UserFeed";

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
    <PageLayout>
      <input
        className="w-full mb-4 px-4 py-2 rounded-lg bg-transparent border-2 border-gray-800 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Stats..."
        onChange={handleSearch}
      />
      <div className="grid grid-cols-3 gap-4 mb-8">
        {filteredStats.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
      <NotificationBell />
      <UserList users={users} />
      <UserFeed />
    </PageLayout>
  );
}

export default App;
