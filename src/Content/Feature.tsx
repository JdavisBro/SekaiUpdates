import { Server } from "../types/ServerType";
import type { FeatureType } from "../types/UpdateType";
import JoinElements from "../utils/JoinElements";
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
  let dateText = "";
  if (props.server != Server.jp) {
    const featureDates = props.feature.date;
    if (featureDates !== null) {
      const featureDate = featureDates[props.server];
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
        <h2 className={styles.left}>{props.feature.name}</h2>
        <h4 className={styles.right}>
          {JoinElements(
            dateText.split("/"),
            <>
              <wbr />/
            </>,
            true,
          )}
        </h4>
      </div>
    </>
  );
}
