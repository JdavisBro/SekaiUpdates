import { useRef, useState } from "react";

import styles from "./Content.module.css";
import updates from "../updates/updates";
import Update from "./Update";
import { Server } from "../types/ServerType";

type Props = {
  server: Server;
  showPastUpdates: boolean;
  setDisplayFeature: (newHash: string) => void;
};

export default function Content(props: Props): React.ReactElement {
  const [search, setSearch] = useState("");
  const [searchDescription, setSearchDescription] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.searchcontainer}>
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
          <span className={styles.nobreak}>
            <label htmlFor="searchDescription"> Search Descriptions:</label>
            <input
              type="checkbox"
              id="searchDescription"
              checked={searchDescription}
              onChange={(e) => {
                setSearchDescription(e.target.checked);
              }}
            />
          </span>
        </div>
        <div
          className={styles.updatecontainer}
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
