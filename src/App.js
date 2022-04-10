import React from "react";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { AppRoot, View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import GamePanel from "./panels/Game";
import PlayersPanel from "./panels/Players";
import LocationsPanel from "./panels/Locations";

const panels = {
  gamePanel: "gamePanel",
  locationsPanel: "locationsPanel",
  playersPanel: "playersPanel",
  // settingsPanel: "settingsPanel",
};

const App = () => {
  const [activePanel, setActivePanel] = useState(panels.gamePanel);

  const goTo = (panelName = panels.gamePanel) => {
    setActivePanel(panelName);
  };
  return (
    <Provider store={store}>
      <AppRoot>
        <View activePanel={activePanel}>
          <GamePanel id={panels.gamePanel} goTo={goTo} panels={panels} />
          <LocationsPanel
            id={panels.locationsPanel}
            goTo={goTo}
            panels={panels}
          />
          <PlayersPanel id={panels.playersPanel} goTo={goTo} panels={panels} />
        </View>
      </AppRoot>
    </Provider>
  );
};

export default App;
