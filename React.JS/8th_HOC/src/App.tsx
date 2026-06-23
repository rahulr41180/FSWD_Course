import {
  useState,
} from "react";

import Dashboard from "./pages/Dashboard";

import withAuth from "./HOC/withAuth";

const ProtectedDashboard =
  withAuth(Dashboard);

function App() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  return (
    <div>
      <button
        onClick={() =>
          setIsLoggedIn(
            !isLoggedIn
          )
        }
      >
        {isLoggedIn
          ? "Logout"
          : "Login"}
      </button>

      <hr />

      <ProtectedDashboard
        isLoggedIn={isLoggedIn}
        username="Rahul"
      />
    </div>
  );
}

export default App;