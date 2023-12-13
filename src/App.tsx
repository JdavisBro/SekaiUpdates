import { useHash, useLocalStorage, useMedia } from "react-use";

import styles from "./App.module.css";
import Header from "./Header";
import Content from "./Content/Content";
import { Server } from "./types/ServerType";
import BigFeature from "./BigFeature";

function App() {
  const lightMode = useMedia("(prefers-color-scheme: light)");

  const [server = Server.en, setServer] = useLocalStorage<Server>(
    "server",
    Server.en,
    { raw: false, deserializer: Number, serializer: String },
  );

  const [showPastUpdates = false, setShowPastUpdates] = useLocalStorage(
    "showPastUpdates",
    false,
    {
      raw: false,
      deserializer: (value) => value == "true",
      serializer: String,
    },
  );

  const [displayFeature, setDisplayFeature] = useHash();

  return (
    <>
      <div className={styles.container}>
        <Header
          lightMode={lightMode}
          setServer={setServer}
          server={server}
          setShowPastUpdates={setShowPastUpdates}
          showPastUpdates={showPastUpdates}
        />
        <Content
          server={server}
          showPastUpdates={showPastUpdates}
          setDisplayFeature={setDisplayFeature}
        />
      </div>
      <BigFeature
        server={server}
        displayFeature={displayFeature}
        setDisplayFeature={setDisplayFeature}
      />
    </>
  );
}

export default App;
