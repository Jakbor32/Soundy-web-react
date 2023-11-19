import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { icons } from "../../lib/Constants";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={loginWithRedirect}
        className="mr-2 py-2 pl-1 pr-2 text-[0.65rem] font-bold tracking-wider md:text-xs border flex gap-2 items-center active:scale-95"
      >
        {icons[1].lock}
        Login
      </button>
    )
  );
}

export default LoginButton;
