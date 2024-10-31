import styles from "./App.module.css";
import Content from "./Content/Content";
import { Server } from "./types/ServerType";
import BigFeature from "./Modal/BigFeature";
import { useCallback } from "react";

function App() {
  if (import.meta.env.MODE == "development") {
    document.getElementsByTagName("title")[0].innerText =
      "[DEV] Project Sekai Updates";
  }

  const server = Server.en

  return (
    <>
      <div className={styles.container}>
        <Content
          server={server}
          setDisplayFeature={useCallback((value) => {
            window.location.hash = value;
          }, [])}
        />
      </div>
      <BigFeature server={server} />
    </>
  );
}

export default App;
