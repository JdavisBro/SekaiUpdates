import Markdown from "react-markdown";
import styles from "./BigFeature.module.css";
import { Server } from "./types/ServerType";
import { FeatureType, UpdateType } from "./types/UpdateType";
import updates from "./updates/updates";
import { useEffect, useRef } from "react";
import JoinElements from "./utils/JoinElements";
import AboutPage from "./AboutPage";
import remarkGfm from "remark-gfm";

type Props = {
  server: Server;
  displayFeature: string;
  setDisplayFeature: (newHash: string) => void;
};

export default function BigFeature(props: Props): React.ReactElement | null {
  const closeButton = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (closeButton.current) {
      closeButton.current.focus();
    }
  }, [closeButton]);

  const rootDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (rootDivRef.current && closeButton.current) {
        if (e.key == "Tab") {
          if (
            !rootDivRef.current.contains(document.activeElement) ||
            (document.activeElement == closeButton.current &&
              e.getModifierState("Shift"))
          ) {
            closeButton.current.focus();
            e.preventDefault();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (props.displayFeature == "" || props.displayFeature == "#") {
    return null;
  }

  if (props.displayFeature == "#About") {
    return (
      <AboutPage
        displayFeature={props.displayFeature}
        setDisplayFeature={props.setDisplayFeature}
        rootDivRef={rootDivRef}
        closeButton={closeButton}
      />
    );
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
    <>
      <div
        onClick={() => {
          props.setDisplayFeature("#");
        }}
        className={styles.container}
        role="dialog"
        aria-labelledby="bigTitle"
        ref={rootDivRef}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.box}
        >
          <div className={styles.headerBox}>
            <div className={styles.header}>
              <h2 className={styles.updateName}>Version {update.version}</h2>
              <h3 className={styles.date}>
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
              </h3>
              <div
                tabIndex={0}
                onClick={() => {
                  props.setDisplayFeature("#");
                }}
                onKeyDown={(event) => {
                  console.log(event.key);
                  if (event.key == "Enter" || event.key == " ") {
                    props.setDisplayFeature("#");
                  }
                }}
                className={styles.close}
                title="Close"
                ref={closeButton}
                autoFocus
              >
                ✖
              </div>
            </div>
            <h2 id="bigTitle" className={styles.name}>
              {feature.name}
            </h2>
          </div>
          <div className={styles.description}>
            <Markdown remarkPlugins={[remarkGfm]}>
              {feature.description.replace(/^ +(\^| )/gm, "")}
            </Markdown>
          </div>
        </div>
      </div>
    </>
  );
}
