import { Server } from "../types/ServerType";
import type { FeatureType, UpdateType } from "../types/UpdateType";
import JoinElements from "../utils/JoinElements";
import styles from "./Content.module.css";

type Props = {
  server: Server;
  showPastUpdates: boolean;
  search: string;
  feature: FeatureType;
  update: UpdateType;
  setDisplayFeature: (newHash: string) => void;
};

export default function Feature(props: Props): React.ReactElement | boolean {
  let dateText = "";
  if (props.server != Server.jp) {
    const featureDates = props.feature.date;
    if (featureDates !== undefined) {
      const featureDate = featureDates[props.server];
      if (featureDate !== undefined) {
        // only ran if this one is supposed to be visible
        let timeFrame = "Early";
        const updateDates = props.update.date;
        if (updateDates !== undefined) {
          const updateDate = props.update.date[props.server];
          if (updateDate && updateDate < featureDate) {
            timeFrame = "Late";
          }
        }
        dateText = `${timeFrame} ${Server[
          props.server
        ].toUpperCase()}: ${featureDate.toLocaleDateString()}`;
      }
    }
    const notIncludeds = props.feature.notIncluded;
    if (notIncludeds !== undefined && !dateText) {
      const notIncluded = notIncludeds[props.server];
      if (notIncluded !== undefined) {
        dateText = `${Server[props.server].toUpperCase()}: Not Included`;
      }
    }
  }
  function handleSetDisplayFeature() {
    props.setDisplayFeature(`#${props.update.version}/${props.feature.name}`);
  }

  return (
    <>
      <div
        tabIndex={0}
        onClick={handleSetDisplayFeature}
        onKeyDown={(event) => {
          if (event.key == "Enter" || event.key == " ") {
            handleSetDisplayFeature();
          }
        }}
        className={styles.feature}
      >
        <h2 className={styles.featureleft}>{props.feature.name}</h2>
        <div className={styles.featuremiddle}></div>
        <h4 className={styles.featureright}>
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
