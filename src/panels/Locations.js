import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMap } from "../features/counter";

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
  Icon28LocationMapOutline,
} from "@vkontakte/icons";

const LocationsPanel = (props) => {
  const count = useSelector((state) => state.counter.value);
  const locations = useSelector((state) => state.counter.locations);
  console.log(locations);
  const dispatch = useDispatch();
  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderBack onClick={() => props.goTo(props.panels.gamePanel)} />
        }
      >
        Set location
      </PanelHeader>
      <Group>
        {Object.keys(locations).map((loc, index) => {
          return (
            <Cell
              onClick={() => {
                dispatch(setMap(loc));
                props.goTo(props.panels.gamePanel);
              }}
              key={index + "w"}
              expandable
              before={<Icon28LocationMapOutline />}
            >
              {loc}
            </Cell>
          );
        })}
      </Group>
    </Panel>
  );
};

export default LocationsPanel;
