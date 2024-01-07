import { useHash, useLocalStorage } from "react-use";

import styles from "./App.module.css";
import Header from "./Header";
import Content from "./Content/Content";
import { Server } from "./types/ServerType";
import BigFeature from "./Modal/BigFeature";
import AboutPage from "./Modal/AboutPage";
import { useCallback } from "react";

function App() {
  if (import.meta.env.MODE == "development") {
    document.getElementsByTagName("title")[0].innerText =
      "[DEV] Project Sekai Updates";
  }

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

  return (
    <>
      <div className={styles.container}>
        <Header
          setServer={setServer}
          server={server}
          setShowPastUpdates={setShowPastUpdates}
          showPastUpdates={showPastUpdates}
        />
        <Content
          server={server}
          showPastUpdates={showPastUpdates}
          setDisplayFeature={useCallback((value) => {
            window.location.hash = value;
          }, [])}
        />
      </div>
      {/* {displayFeature == "#About" ? (
        <AboutPage
          displayFeature={displayFeature}
          setDisplayFeature={setDisplayFeature}
        />
      ) : ( */}
      <BigFeature server={server} />
      {/* )} */}
    </>
  );
}

export default App;
