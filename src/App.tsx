import WormholeConnect, {
  WormholeConnectConfig,
  WormholeConnectTheme,
  nttRoutes,
} from '@wormhole-foundation/wormhole-connect';
import './App.css';  // Make sure to import the CSS file

const theme: WormholeConnectTheme = {"mode":"dark","input":"#181a2d","primary":"#9E77ED","secondary":"#667085","text":"#ffffff","textSecondary":"#79859e","error":"#F04438","success":"#12B76A","badge":"#010101","font":"\"Inter\", sans-serif"};

const wormholeConfig: WormholeConnectConfig = {
  rpcs: {
    Solana: "https://rosette-6rof3i-fast-mainnet.helius-rpc.com",
    Ethereum: "https://eth-mainnet.g.alchemy.com/v2/RUJuXtO3TWJLHABDmymGBU1ugu0076Vz",
  },
  network: 'Mainnet',
  chains: ['Ethereum', 'Solana'],
  tokens: ['ELooPIN', 'SLooPIN'],
  ui: {
    title: 'Wormhole LooPIN Bridge',
    defaultInputs: {
      fromChain: 'Solana',
      toChain: 'Ethereum'
    },
    showHamburgerMenu: false,
  },
  routes: [
    ...nttRoutes({
      tokens: {
        BRZ_NTT: [
          {
            chain: 'Ethereum',
            manager: '0x6bE6CC3825f29EbBD014487B30512984b2C0cDf3',
            token: '0x975dA7b2325F815F1dE23C8B68f721fb483B8071',
            transceiver: [
              {
                address: '0x42e3ec587dE57b2b28C054DF785a863E3A1b55CF',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Solana',
            manager: 'nTtyAzdYmpLwAWGWCK3PFqfrsKaPpZgbghy7qiqDb7H',
            token: 'CHX3FSxGYSJ2LHeQTcGp2oMAoBNngtJ73jsuamMUnZQx',
            transceiver: [
              {
                address: '84J5SnqJTCyFzVX6DM9srpr12Rbzz7m87xcemGLkwjon',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {
    ELooPIN: {
      key: 'ELooPIN',
      symbol: 'LooPIN',
      nativeChain: 'Ethereum',
      displayName: 'LooPIN',
      tokenId: {
        chain: 'Ethereum',
        address: '0x975dA7b2325F815F1dE23C8B68f721fb483B8071'
      },
      coinGeckoId: 'loopin',
      icon: 'https://files.loopin.network/logo/transparent.png',
      decimals: 18
    },
    SLooPIN: {
      key: 'SLooPIN',
      symbol: 'LooPIN',
      nativeChain: 'Solana',
      displayName: 'LooPIN',
      tokenId: {
        chain: 'Solana',
        address: 'CHX3FSxGYSJ2LHeQTcGp2oMAoBNngtJ73jsuamMUnZQx'
      },
      coinGeckoId: 'loopin',
      icon: 'https://files.loopin.network/logo/transparent.png',
      decimals: 9
    }
  }
}

function App() {
  return (
      <div className="app-container">
        <WormholeConnect config={wormholeConfig} theme={theme} />
      </div>
  )
}


export default App