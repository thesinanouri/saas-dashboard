import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function UserFeed() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <p className="text-white/50">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <p className="text-white/400">{error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <p className="text-white/50">No users found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="bg-white/5 rounded-lg p-4">
            <p className="text-white font-medium">{user.name}</p>
            <p className="text-white/50 text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
