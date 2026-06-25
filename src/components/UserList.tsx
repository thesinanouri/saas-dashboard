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
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.active ? "Online" : "Offline"}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
