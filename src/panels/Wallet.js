import React, { useState, useEffect } from "react";
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  SimpleCell,
} from "@vkontakte/vkui";
import {
  Icon56WalletOutline,
  Icon28WalletOutline,
  Icon28KeyOutline,
  Icon24Copy,
  Icon28CheckShieldDeviceOutline,
  Icon24MoneyCircleOutline,
} from "@vkontakte/icons";

const WalletPanel = (props) => {
  const [balance, setBalance] = useState(0);
  useEffect(async () => {
    let newBalance = await props.blockchain.web3.eth.getBalance(
      props.blockchain.address
    );
    setBalance(newBalance);
  }, []);

  return (
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

      <Group>
        <Group mode='plain'>
          <SimpleCell
            indicator={props.blockchain.address.slice(0, 13).concat("...")}
            before={<Icon28WalletOutline />}
          >
            Address
          </SimpleCell>
          <SimpleCell before={<Icon28KeyOutline />} after={<Icon24Copy />}>
            Private Key
          </SimpleCell>
        </Group>
        <Group mode='plain'>
          <SimpleCell
            indicator={balance ? balance : "loading..."}
            before={<Icon24MoneyCircleOutline />}
          >
            Balance
          </SimpleCell>
          <SimpleCell
            indicator='true'
            before={<Icon28CheckShieldDeviceOutline />}
          >
            Password is save
          </SimpleCell>
        </Group>
      </Group>
    </Panel>
  );
};

export default WalletPanel;
