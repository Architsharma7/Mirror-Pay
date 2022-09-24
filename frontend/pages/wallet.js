import { ConnectWallet, useAddress, useLogin } from "@thirdweb-dev/react";
import { useState } from "react";

export default function Wallet() {
  const address = useAddress();
  const login = useLogin();
  const [addressFromServer, setAddressFromServer] = useState("");

  const getAddressFromServer = async () => {
    const response = await fetch("../api/secret");

    if (!response.ok) return alert("Not authenticated");

    const data = await response.json();

    setAddressFromServer(data.walletAddress);
  };

  return (
    <div className="bg-white flex justify-center items-center">
      {address ? (
        <>
          <button
            onClick={() => login()}
            className="bg-blue-300 h-12 w-1/2 font-bold border border-blue-400 rounded-xl hover:bg-blue-500 hover:text-white mt-12"
          >
            Login with Wallet
          </button>
        </>
      ) : (
        <div className="flex justify-center items-center mt-12">
          <ConnectWallet colorMode="dark" accentColor="#4E7EF3" />
        </div>
      )}
    </div>
  );
}

/*
<button onClick={getAddressFromServer}>Get address from server</button>
      <div>{addressFromServer}</div>
*/
