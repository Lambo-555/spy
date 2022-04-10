import React, { useState, useEffect } from "react";
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Group,
  List,
  Cell,
  SplitLayout,
  ScreenSpinner,
  ModalRoot,
  ModalPage,
  ModalCard,
} from "@vkontakte/vkui";
import {
  Icon24UserIncoming,
  Icon24BriefcaseOutline,
  Icon24UserOutgoing,
  Icon56MoneyTransferOutline,
} from "@vkontakte/icons";

const HistoryPanel = (props) => {
  const [history, setHistory] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [transaction, setTransaction] = useState(null);
  // [web3, address, setAddress] = props.blockchain;

  useEffect(async () => {
    setIsLoading(true);
    let lastBlock = await props.blockchain.web3.eth.getBlockNumber();

    props.blockchain.web3.eth
      .getPastLogs({
        address: props.blockchain.address,
        fromBlock: lastBlock - 150,
        toBlock: lastBlock,
      })
      .then((data) => {
        setHistory(data.splice(0, 50));
      })
      .finally(() => setIsLoading(false));
  }, []);

  const getTransaction = (transactionHash) => {
    setIsLoading(true);
    props.blockchain.web3.eth
      .getTransaction(transactionHash)
      .then((data) => {
        setTransaction(data);
        console.log("TRANSACTION", data);
        setActiveModal("transaction");
      })
      .finally(() => setIsLoading(false));
  };

  const refreshHistory = () => setRefresh(!refresh);

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <ModalCard
        id='transaction'
        onClose={() => setActiveModal(null)}
        icon={<Icon56MoneyTransferOutline />}
        header={"Value: " + transaction?.value}
        subheader={"Gas: " + transaction?.gas}
      >
        <Cell expandable before={<Icon24UserIncoming />}>
          From: {transaction?.from}
        </Cell>
        <Cell expandable before={<Icon24UserOutgoing />}>
          To: {transaction?.to}
        </Cell>
      </ModalCard>
    </ModalRoot>
  );

  // <Cell expandable before={<Icon24UserIncoming />} key={text + "" + 1}>
  //   {text}
  // </Cell>
  // <Cell expandable before={<Icon24UserIncoming />}>
  //   {text}
  // </Cell>

  return (
    <SplitLayout popout={isLoading && <ScreenSpinner />} modal={modal}>
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
          <List>
            {history.map((item, index) => {
              return (
                <Cell
                  onClick={async () => {
                    await getTransaction(item.transactionHash);
                  }}
                  key={index + "xdawdsa"}
                  expandable
                  before={<Icon24BriefcaseOutline />}
                >
                  {item.transactionHash}
                </Cell>
              );
            })}
          </List>
        </Group>
      </Panel>
    </SplitLayout>
  );
};

export default HistoryPanel;
