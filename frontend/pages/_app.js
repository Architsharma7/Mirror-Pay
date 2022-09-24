import "../styles/globals.css";
import React, { useState } from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
//rainbow imports
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { darkTheme } from "@rainbow-me/rainbowkit";
// rainbow kit chains

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// rainbow kit setup finished

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      authConfig={{
        authUrl: "/api/auth",
        domain: "localhost:3000",
        loginRedirect: "/dashboard",
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
