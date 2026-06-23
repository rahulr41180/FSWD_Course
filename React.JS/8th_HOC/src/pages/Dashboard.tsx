import React from "react";

interface DashboardProps {
  username: string;
  isLoggedIn: boolean;
}

const Dashboard: React.FC<
  DashboardProps
> = ({ username }) => {
  return (
    <div>
      <h1>Dashboard</h1>

      <h2>
        Welcome {username}
      </h2>
    </div>
  );
};

export default Dashboard;