import { useRef, useState } from "react";

import styles from "./Content.module.css";
import updates from "../updates/updates";
import Update from "./Update";
import { Server } from "../types/ServerType";
import { useLocalStorage } from "react-use";

type Props = {
  server: Server;
  showPastUpdates: boolean;
  setDisplayFeature: (newHash: string) => void;
};

export default function Content(props: Props): React.ReactElement {
  const [search, setSearch] = useState("");
  const [searchDescription, setSearchDescription] = useState(false);
  const [displayGrid, setDisplayGrid] = useLocalStorage("displayGrid", true);

  const searchRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.optionscontainer}>
          <span className={styles.searchcontainer}>
            <label htmlFor="searchInput">Filter: </label>
            <input
              type="text"
              id="searchInput"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={(e) => {
                if ((e.key == "Enter" || e.key == " ") && searchRef.current) {
                  searchRef.current.blur();
                }
              }}
              ref={searchRef}
            />
          </span>
          <span className={styles.checkboxcontainer}>
            <input
              type="checkbox"
              id="searchDescription"
              checked={searchDescription}
              onChange={(e) => {
                setSearchDescription(e.target.checked);
              }}
            />
            <label htmlFor="searchDescription">Search Descriptions</label>
          </span>
          <span className={styles.checkboxcontainer}>
            <input
              type="checkbox"
              id="gridDisplay"
              checked={displayGrid}
              onChange={(e) => {
                setDisplayGrid(e.target.checked);
              }}
            />
            <label htmlFor="gridDisplay">Display in Grid</label>
          </span>
        </div>
        <div
          className={displayGrid ? styles.updatecontainergrid : styles.updatecontainer}
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
              showPastUpdates={props.showPastUpdates}
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
