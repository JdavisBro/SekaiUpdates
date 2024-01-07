import { useCallback } from "react";

import styles from "./Header.module.css";
import githubDark from "./assets/github-mark.svg";
import githubLight from "./assets/github-mark-white.svg";
import info from "./assets/info.svg";
import { Server, servers } from "./types/ServerType";
import { useMedia } from "react-use";

type Props = {
  setServer: React.Dispatch<React.SetStateAction<Server | undefined>>;
  server: Server;
  setShowPastUpdates: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  showPastUpdates: boolean;
};

export default function Header(props: Props): React.ReactElement {
  const lightMode = useMedia("(prefers-color-scheme: light)");

  const githubLogo = (
    <img
      className={styles.headerLogo}
      alt="GitHub Logo"
      src={lightMode ? githubDark : githubLight}
    />
  );

  const serverOptions: React.ReactElement[] = [];
  servers.forEach((value, key) => {
    serverOptions.push(
      <option
        key={key}
        onClick={() => {
          props.setServer(key);
        }}
        value={key}
      >
        {value}
      </option>,
    );
  });

  return (
    <>
      <div className={styles.header}>
        <div className={styles.item}>Project Sekai Updates</div>
        <div className={`${styles.item} ${styles.middle}`}></div>
        <div className={styles.item}>
          <input
            onChange={useCallback(() => {
              props.setShowPastUpdates(props.showPastUpdates ? false : true);
            }, [props])}
            type="checkbox"
            id="showPastUpdatesBox"
            defaultChecked={props.showPastUpdates}
          />
          <label className={styles.noselect} htmlFor="showPastUpdatesBox">
            Show Past Updates
          </label>
        </div>
        <div className={styles.item}>
          <label className={styles.noselect} htmlFor="serverSelect">
            Server:
          </label>
          <br />
          <select id="serverSelect" defaultValue={props.server}>
            {serverOptions}
          </select>
        </div>
        <a
          className={`${styles.item} ${styles.headerLogoContainer}`}
          href="https://github.com/JdavisBro/SekaiUpdates"
          target="_blank"
        >
          {githubLogo}
        </a>
        <a className={`${styles.item} ${styles.infoButton}`} href="#About">
          <img alt="About Button" src={info} />
        </a>
      </div>
    </>
  );
}
