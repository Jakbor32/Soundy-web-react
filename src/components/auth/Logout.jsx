import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { icons } from "../../lib/Constants";


function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="mr-2 py-2 pl-2 pr-2 text-[0.65rem] font-bold tracking-wider md:text-xs border flex gap-2 items-center active:scale-95"
        onClick={() => {
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          });
        }}
      >
         {icons[5].unlock}
        Logout
      </button>
    )
  );
}

export default LogoutButton;
