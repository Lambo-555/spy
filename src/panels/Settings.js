import React from "react";

import { Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

const SettingsPanel = (props) => (
  <Panel>
    <PanelHeader
      left={
        <PanelHeaderBack
          onClick={() => props.goTo(props.panelSchema.menuPanel)}
        />
      }
    >
      Wallet
    </PanelHeader>
    <h1>Settings</h1>
  </Panel>
);

export default SettingsPanel;
