import { useRef } from "react";
import { Server } from "../types/ServerType";
import type { UpdateType } from "../types/UpdateType";
import styles from "./Content.module.css";
import Feature from "./Feature";

type Props = {
  server: Server;
  showPastUpdates: boolean;
  search: string;
  searchDescription: boolean;
  update: UpdateType;
  setDisplayFeature: (newHash: string) => void;
};

export default function Update(props: Props): React.ReactElement | null {
  const featureContainerRef = useRef<HTMLDivElement>(null);

  const currentDate = new Date(Date.now());

  if (!props.showPastUpdates) {
    const updateDate = props.update.date[props.server];
    if (updateDate !== undefined) {
      if (updateDate < currentDate) {
        return null;
      }
    }
  }

  const currentServerDate =
    props.server != Server.jp && props.update.date[props.server] ? (
      <div>
        {Server[props.server].toUpperCase()}:{" "}
        {props.update.date[props.server]?.toLocaleDateString()}
      </div>
    ) : (
      ""
    );

  let anyVisible = false;

  const search = props.search.toLowerCase();
  const versionSearched =
    `version ${props.update.version.toLowerCase()}`.includes(search) ||
    props.update.description.toLowerCase().includes(search);

  const visibleFeatures = props.update.features.map((feature, index) => {
    if (props.server != Server.jp && !props.showPastUpdates) {
      const featureDates = feature.date;
      if (featureDates !== undefined) {
        const featureDate = featureDates[props.server];
        if (featureDate !== undefined) {
          if (featureDate < currentDate) {
            return null;
          }
        }
      }
    }
    if (props.search != "") {
      let inSearch = false;
      if (
        versionSearched ||
        feature.name.toLowerCase().includes(search) ||
        (props.searchDescription &&
          feature.description.toLowerCase().includes(search))
      ) {
        inSearch = true;
      }
      feature.tags.forEach((value) => {
        if (value.toLowerCase().includes(search)) {
          inSearch = true;
        }
      });
      if (!inSearch) {
        return null;
      }
    }
    anyVisible = true;
    return (
      <Feature
        key={index}
        server={props.server}
        showPastUpdates={props.showPastUpdates}
        search={props.search}
        feature={feature}
        update={props.update}
        setDisplayFeature={props.setDisplayFeature}
      />
    );
  });

  if (!anyVisible) {
    return null;
  }

  return (
    <>
      <div className={styles.update}>
        <div className={styles.splitline}>
          <div className={styles.left}>
            <h2>Version {props.update.version}</h2>
            {props.update.description ? (
              <div className={styles.description}>
                {props.update.description}
              </div>
            ) : null}
          </div>
          <div className={styles.right}>
            <div>JP: {props.update.date[Server.jp].toLocaleDateString()}</div>
            {currentServerDate}
          </div>
        </div>

        <div
          className={styles.featurelist}
          onWheel={(e) => {
            if (featureContainerRef.current) {
              if (
                featureContainerRef.current.scrollHeight >
                featureContainerRef.current.clientHeight
              ) {
                e.stopPropagation();
              }
            }
          }}
          ref={featureContainerRef}
        >
          {visibleFeatures}
        </div>
      </div>
    </>
  );
}
