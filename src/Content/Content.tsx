import { useRef, useState } from "react";
import { useLocalStorage, useMedia } from "react-use";

import styles from "./Content.module.css";
import updates from "../updates/updates";
import Update from "./Update";
import { Server } from "../types/ServerType";

import saki from "../assets/sakisakisakisakisakisaki.webp";
import githubDark from "../assets/github-mark.svg";
import githubLight from "../assets/github-mark-white.svg";
import info from "../assets/info.svg";

type Props = {
  server: Server;
  setDisplayFeature: (newHash: string) => void;
};

export default function Content(props: Props): React.ReactElement {
  const [search, setSearch] = useState("");
  const [searchDescription, setSearchDescription] = useState(false);
  const [displayGrid, setDisplayGrid] = useLocalStorage("displayGrid", true);
  const [showPastUpdates = false, setShowPastUpdates] = useLocalStorage(
    "showPastUpdates",
    false,
    {
      raw: false,
      deserializer: (value) => value == "true",
      serializer: String,
    },
  );

  const lightMode = useMedia("(prefers-color-scheme: light)");

  const githubLogo = (
    <img
      className={styles.headerLogo}
      alt="GitHub Logo"
      src={lightMode ? githubDark : githubLight}
    />
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.optionscontainer}>
            <span className={styles.searchcontainer}>
              <img src={saki} alt={"Saki Tenma Motivated Stamp"} />&nbsp;Project Sekai Updates
            </span>
            <span className={styles.searchcontainer}>
              <label>
                Filter:{" "}
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyUp={(e) => {
                    if (
                      (e.key == "Enter" || e.key == " ") &&
                      searchRef.current
                    ) {
                      searchRef.current.blur();
                    }
                  }}
                  ref={searchRef}
                />
              </label>
            </span>
            <span className={styles.checkboxcontainer}>
              <label>
                <input
                  type="checkbox"
                  checked={searchDescription}
                  onChange={(e) => {
                    setSearchDescription(e.target.checked);
                  }}
                />
                Search Descriptions
              </label>
            </span>
            <span className={styles.checkboxcontainer}>
              <label>
                <input
                  type="checkbox"
                  checked={displayGrid}
                  onChange={(e) => {
                    setDisplayGrid(e.target.checked);
                  }}
                />
                Grid Display
              </label>
            </span>
            <span className={styles.checkboxcontainer}>
              <label className={styles.noselect}>
                <input
                  onChange={() =>
                    setShowPastUpdates(showPastUpdates ? false : true)
                  }
                  type="checkbox"
                  defaultChecked={showPastUpdates}
                />
                Past Updates
              </label>
            </span>
          </div>
          <span className={styles.endItems}>
            <a
              className={styles.headerLogoContainer}
              href="https://github.com/JdavisBro/SekaiUpdates"
              target="_blank"
            >
              {githubLogo}
            </a>
            <a className={styles.infoButton} href="#About">
              <img alt="About Button" src={info} />
            </a>
          </span>
        </div>
        <div
          className={
            displayGrid ? styles.updatecontainergrid : styles.updatecontainer
          }
          onWheel={(e) => {
            if (containerRef.current) {
              containerRef.current.scrollLeft += e.deltaY;
            }
          }}
          ref={containerRef}
        >
          {updates.map((update) => (
            <Update
              key={update.version}
              server={props.server}
              showPastUpdates={showPastUpdates}
              search={search}
              searchDescription={searchDescription}
              update={update}
              setDisplayFeature={props.setDisplayFeature}
            />
          ))}
        </div>
      </div>
    </>
  );
}
