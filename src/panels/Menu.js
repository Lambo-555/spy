import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Cell,
  Group,
} from "@vkontakte/vkui";
import {
  Icon24Cancel,
  Icon28UserOutline,
  Icon28UsersOutline,
  Icon28MusicOutline,
  Icon28WalletOutline,
  Icon28HistoryBackwardOutline,
  Icon28SettingsOutline,
} from "@vkontakte/icons";

const MenuPanel = (props) => {
  const [menuItems, setMenuItems] = useState();
  return (
    <Panel>
      <PanelHeader>Blockchain App</PanelHeader>
      <Group>
        <Cell
          expandable
          before={<Icon28WalletOutline />}
          onClick={() => props.goTo(props.panelSchema.walletPanel)}
        >
          Wallet
        </Cell>
        <Cell
          expandable
          before={<Icon28HistoryBackwardOutline />}
          onClick={() => props.goTo(props.panelSchema.historyPanel)}
        >
          History
        </Cell>
        <Cell
          expandable
          before={<Icon28SettingsOutline />}
          onClick={() => props.goTo(props.panelSchema.settingsPanel)}
        >
          Settings
        </Cell>
      </Group>
    </Panel>
  );
};

export default MenuPanel;
