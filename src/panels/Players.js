import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Panel,
  Header,
  PanelHeader,
  PanelHeaderBack,
  Group,
  FormItem,
  Input,
  Div,
  Cell,
  Button,
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

import { playerAdd, playerKick } from "../features/counter";

const PlayersPanel = (props) => {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);

  const players = useSelector((state) => state.counter.players);
  const dispatch = useDispatch();
  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderBack onClick={() => props.goTo(props.panels.gamePanel)} />
        }
      >
        Add players
      </PanelHeader>
      <Group>
        <FormItem
          top='Name'
          value={name}
          onInput={(e) => setName(e.target.value)}
          status={!isError ? "valid" : "error"}
          bottom={!isError ? "Enter name" : "Name is to short!"}
        >
          <Input type='text'/>
        </FormItem>
        <Div>
          <Button
            stretched
            size='l'
            mode='secondary'
            onClick={() => {
              if (name.length >= 3) {
                dispatch(playerAdd(name));
                setIsError(false);
                setName("");
              } else {
                setIsError(true);
              }
            }}
          >
            Add
          </Button>
        </Div>
      </Group>
      {/* <button onClick={() => dispatch(increment())}>
        Increment {count} {count + 1}
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement {count} {count - 1}
      </button> */}
      <Group header={<Header>Players {players && players.length}</Header>}>
        {players.map((player, index) => {
          return (
            <Cell
              mode='removable'
              onRemove={() => {
                dispatch(playerKick(name));
                setName("");
              }}
              key={index + "wx"}
              expandable
              before={<Icon28LocationMapOutline />}
            >
              {player.name.toString()}
            </Cell>
          );
        })}
      </Group>
    </Panel>
  );
};

export default PlayersPanel;
