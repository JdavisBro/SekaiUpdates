import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Modal from "./Modal";
import updates from "../updates/updates";
import JoinElements from "../utils/JoinElements";
import { Server } from "../types/ServerType";
import { FeatureType, UpdateType } from "../types/UpdateType";

type Props = {
  server: Server;
  displayFeature: string;
  setDisplayFeature: (newHash: string) => void;
};

export default function BigFeature(props: Props): React.ReactElement | null {
  if (props.displayFeature == "" || props.displayFeature == "#") {
    return null;
  }

  const featureSplit = props.displayFeature.slice(1).split("/");
  const versionName = featureSplit[0];
  let featureName = decodeURI(featureSplit[1]);
  featureName = decodeURI(featureName);
  let update: UpdateType | null = null;
  for (const upd of updates) {
    if (upd.version == versionName) {
      update = upd;
    }
  }
  if (update == null) {
    props.setDisplayFeature("#"); // Publicly executed for this
    return null;
  }

  let feature: FeatureType | null = null;
  for (const feat of update.features) {
    if (feat.name == featureName) {
      feature = feat;
    }
  }
  if (feature == null) {
    props.setDisplayFeature("#"); // Publicly executed for this
    return null;
  }

  let dateText = "";
  if (props.server != Server.jp) {
    const featureDates = feature.date;
    if (featureDates !== undefined) {
      const featureDate = featureDates[props.server];
      if (featureDate !== undefined) {
        dateText = `Early ${Server[
          props.server
        ].toUpperCase()}: ${featureDate.toLocaleDateString()}`;
      }
    }
    const notIncludeds = feature.notIncluded;
    if (notIncludeds !== undefined && !dateText) {
      const notIncluded = notIncludeds[props.server];
      if (notIncluded !== undefined) {
        dateText = `${Server[props.server].toUpperCase()}: Not Included`;
      }
    }
    if (!dateText) {
      const updateDate = update.date[props.server];
      if (updateDate !== undefined) {
        dateText = `${Server[
          props.server
        ].toUpperCase()}: ${updateDate.toLocaleDateString()}`;
      }
    }
  }

  return (
    <Modal
      displayFeature={props.displayFeature}
      setDisplayFeature={props.setDisplayFeature}
      bigTitle={`Version ${update.version}`}
      subTitle={feature.name}
      dateText={
        <>
          JP:{" "}
          {JoinElements(
            update.date[Server.jp].toLocaleDateString().split("/"),
            <>
              <wbr />/
            </>,
            true,
          )}
          <br />
          {JoinElements(
            dateText.split("/"),
            <>
              <wbr />/
            </>,
            true,
          )}
        </>
      }
    >
      <Markdown remarkPlugins={[remarkGfm]}>{feature.description}</Markdown>
    </Modal>
  );
}
