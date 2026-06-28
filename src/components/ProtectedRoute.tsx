import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <p className="text-white p-6">Loading...</p>;
  }

  if (!isSignedIn) {
    return <Navigate to="/Login" />;
  }

  return <>{children}</>;
}
