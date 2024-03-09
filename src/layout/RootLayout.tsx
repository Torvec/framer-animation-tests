import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 relative overflow-hidden">
      <Navigation />
      <Outlet />
    </div>
  );
}
