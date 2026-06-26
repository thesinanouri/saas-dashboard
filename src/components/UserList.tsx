interface User {
  id: number;
  name: string;
  active: boolean;
}

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-sm font-medium text-gray-400 mb-4">Team Members</h2>
      <div className="flex flex-col gap-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0"
          >
            <p className="text-white font-medium">{user.name}</p>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${user.active ? "bg-green-500/20 text-green-400" : "bg-gray-800 text-gray-500"}`}
            >
              {user.active ? "Active" : "Offline"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
