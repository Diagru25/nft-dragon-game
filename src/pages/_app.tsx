import Layout from "@/components/layout-section/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  polygon,
  polygonMumbai,
  bscTestnet,
} from "wagmi/chains";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

const chains = [arbitrum, mainnet, polygon, polygonMumbai, bscTestnet];
const projectId = "3efa42884d756748bc7e374d7b3499ac";

import "@mantine/core/styles.css";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <MantineProvider>
        <ModalsProvider>
          <Layout>
            <Component {...pageProps} />
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              limit={3}
              theme="light"
            />
          </Layout>
        </ModalsProvider>
      </MantineProvider>
    </WagmiConfig>
  );
}
