import { Server } from "../types/ServerType";
import type { UpdateType } from "../types/UpdateType";
import styles from "./Content.module.css";
import Feature from "./Feature";

type Props = {
  server: Server;
  showPastUpdates: boolean;
  search: string;
  update: UpdateType;
  setDisplayFeature: (newHash: string) => void;
};

export default function Update(props: Props): React.ReactElement | null {
  const currentDate = new Date(Date.now());

  if (!props.showPastUpdates) {
    const updateDate = props.update.date[props.server];
    if (updateDate !== null) {
      if (updateDate < currentDate) {
        return null;
      }
    }
  }

  let description: React.ReactElement | null = null;
  if (props.update.description) {
    description = (
      <div className={styles.description}>{props.update.description}</div>
    );
  }

  let currentServerDate = "";
  if (props.server != Server.jp && props.update.date[props.server]) {
    currentServerDate = `${Server[
      props.server
    ].toUpperCase()}: ${props.update.date[props.server]?.toLocaleDateString()}`;
  }

  let anyVisible = false;

  const visibleFeatures = props.update.features.map((feature, index) => {
    if (props.server != Server.jp && !props.showPastUpdates) {
      const featureDates = feature.date;
      if (featureDates !== null) {
        const featureDate = featureDates[props.server];
        if (featureDate !== null) {
          if (featureDate < currentDate) {
            return null;
          }
        }
      }
    }
    if (props.search != "") {
      let inSearch = false;
      if (feature.name.toLowerCase().includes(props.search.toLowerCase())) {
        inSearch = true;
      }
      feature.tags.forEach((value) => {
        if (value.toLowerCase().includes(props.search.toLowerCase())) {
          inSearch = true;
        }
      });
      if (
        `version ${props.update.version}`.includes(props.search.toLowerCase())
      ) {
        inSearch = true;
      }
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
        updateName={props.update.version}
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
          <h2 className={styles.left}>Version {props.update.version}</h2>
          <h4 className={styles.right}>
            JP: {props.update.date[Server.jp].toLocaleDateString()}
            <br />
            {currentServerDate}
          </h4>
        </div>
        {description}
        <div className={styles.featurelist}>{visibleFeatures}</div>
      </div>
    </>
  );
}
