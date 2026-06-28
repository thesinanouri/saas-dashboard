import { useUser } from "@clerk/clerk-react";
import UserFeed from "../components/UserFeed";

export default function DashboardPage() {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
      <p className="text-white/50 mb-8">
        Welcome back, {user?.firstName ?? user?.emailAddresses[0].emailAddress}
      </p>
      <UserFeed />
    </div>
  );
}
