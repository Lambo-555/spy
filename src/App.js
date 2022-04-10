import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  useAppearance,
  AppRoot,
  View,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import MenuPanel from "./panels/Menu";
import WalletPanel from "./panels/Wallet";
import HistoryPanel from "./panels/History";
import SettingsPanel from "./panels/Settings";

const web3 = new Web3(
  "https://rinkeby.infura.io/v3/3c32cdd37b124fed85037dd52f7a70c5"
);
const panelSchema = {
  menuPanel: "menuPanel",
  walletPanel: "walletPanel",
  historyPanel: "historyPanel",
  settingsPanel: "settingsPanel",
};

const App = () => {
  const [activePanel, setActivePanel] = React.useState(panelSchema.menuPanel);
  const [address, setAddress] = React.useState(
    "0xA0c7fD770A3961128B115Cca24C2f08ACE7438D8"
  );

  const goTo = (panelName = panelSchema.menuPanel) => {
    setActivePanel(panelName);
  };

  return (
    <AppRoot>
      <View activePanel={activePanel}>
        <MenuPanel
          id={panelSchema.menuPanel}
          goTo={goTo}
          panelSchema={panelSchema}
        />
        <WalletPanel
          id={panelSchema.walletPanel}
          goTo={goTo}
          panelSchema={panelSchema}
          blockchain={{ web3, address, setAddress }}
        />
        <SettingsPanel
          id={panelSchema.settingsPanel}
          goTo={goTo}
          panelSchema={panelSchema}
        />
        <HistoryPanel
          id={panelSchema.historyPanel}
          goTo={goTo}
          panelSchema={panelSchema}
          blockchain={{ web3, address, setAddress }}
        />
      </View>
    </AppRoot>
  );
};

export default App;