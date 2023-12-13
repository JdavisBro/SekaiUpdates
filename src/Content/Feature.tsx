import { Server } from "../types/ServerType";
import type { FeatureType } from "../types/UpdateType";
import styles from "./Content.module.css";

type Props = {
  server: Server;
  showPastUpdates: boolean;
  search: string;
  feature: FeatureType;
  updateName: string;
  setDisplayFeature: (newHash: string) => void;
};

export default function Feature(props: Props): React.ReactElement | boolean {
  var dateText = "";
  if (props.server != Server.jp) {
    var featureDates = props.feature.date;
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
  function handleSetDisplayFeature() {
    props.setDisplayFeature(`#${props.updateName}/${props.feature.name}`);
  }

  return (
    <>
      <div
        tabIndex={0}
        onClick={handleSetDisplayFeature}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            handleSetDisplayFeature();
          }
        }}
        className={styles.feature}
      >
        <div className={styles.featureheader}>
          <h2 className={styles.left}>{props.feature.name}</h2>
          <h4 className={styles.right}>{dateText}</h4>
        </div>
      </div>
    </>
  );
}
