import Markdown from "react-markdown";
import styles from "./BigFeature.module.css";
import { Server } from "./types/ServerType";
import { FeatureType, UpdateType } from "./types/UpdateType";
import updates from "./updates/updates";
import { useEffect, useRef } from "react";

type Props = {
  server: Server;
  displayFeature: string;
  setDisplayFeature: (newHash: string) => void;
};

export default function BigFeature(props: Props): React.ReactElement | null {
  if (props.displayFeature == "" || props.displayFeature == "#") {
    return null;
  }

  var [versionName, featureName] = props.displayFeature
    .slice(1)
    .split("/");
  featureName = decodeURI(featureName)
  console.log(versionName, featureName);
  var update: UpdateType | null = null;
  for (const upd of updates) {
    if (upd.version == versionName) {
      update = upd;
    }
  }
  if (update == null) {
    return null;
  }

  var feature: FeatureType | null = null;
  for (const feat of update.features) {
    if (feat.name == featureName) {
      feature = feat;
    }
  }
  if (feature == null) {
    return null;
  }

  var dateText = "";
  if (props.server != Server.jp) {
    var featureDates = feature.date;
    if (featureDates !== null) {
      var featureDate = featureDates[props.server];
      if (featureDate !== null) {
        // only ran if this one is supposed to be visible
        dateText = `Early ${Server[
          props.server
        ].toUpperCase()}: ${featureDate.toLocaleDateString()}`;
      }
    }
  }

  const closeButton = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (closeButton.current) {
      closeButton.current.focus()
    }
  }, [])

  return (
    <>
      <div
        onClick={() => {
          props.setDisplayFeature("#");
        }}
        className={styles.container}
        role="dialog"
        aria-labelledby="bigTitle"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.box}
        >
          <div className={styles.header}>
            <h1 className={styles.name}>Version {update.version} - {feature.name}</h1>
            <div
              tabIndex={0}
              onClick={() => {
                props.setDisplayFeature("#");
              }}
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  props.setDisplayFeature("#")
                }
              }}
              className={styles.close}
              title="Close"
              ref={closeButton}
            >
              ✖
            </div>
          </div>
          <div className={styles.description}>
            <Markdown>{feature.description.replace(/^ +(\^| )/gm, "")}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}
