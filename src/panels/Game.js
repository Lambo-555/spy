import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  Icon28UserAddOutline,
  Icon28LocationMapOutline,
  Icon28Play,
} from "@vkontakte/icons";

import { playerKick } from "../features/counter";

const GamePanel = (props) => {
  const [menuItems, setMenuItems] = useState();
  const locations = useSelector((state) => state.counter.currentMap);
  const players = useSelector((state) => state.counter.players);
  console.log({ players });
  return (
    <Panel>
      <PanelHeader>Spy Game</PanelHeader>
      <Group>
        <Cell
          expandable
          before={<Icon28LocationMapOutline />}
          onClick={() => props.goTo(props.panels.locationsPanel)}
        >
          {locations ? locations : "Select your location"}
        </Cell>
        <Cell
          expandable
          before={<Icon28UserAddOutline />}
          onClick={() => props.goTo(props.panels.playersPanel)}
        >
          {players.length} + {" "}
          {players.length > 5 ? "Enouth players to start" : "Add more players"}
        </Cell>
        <Cell
          expandable
          before={<Icon28Play />}
          onClick={() => {
            if(players.length > 5 && currentMap) {

            }
          }}
        >
          Start game!
        </Cell>
      </Group>
    </Panel>
  );
};

export default GamePanel;
