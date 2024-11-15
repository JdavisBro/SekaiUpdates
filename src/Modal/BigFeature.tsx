import Markdown, { ReactRenderer } from "marked-react";
import { useHash } from "react-use";
import type { JSXInternal } from "node_modules/preact/src/jsx";

import Modal from "./Modal";
import updates from "../updates/updates";
import JoinElements from "../utils/JoinElements";
import styles from "./Modal.module.css";
import { Server } from "../types/ServerType";
import { FeatureType, UpdateType } from "../types/UpdateType";
import { memo, useEffect, useMemo, useRef } from "react";
import TableOfContents from "./TableOfContents";
import AboutPage from "./AboutPage";

type Props = {
  server: Server;
};

const MarkdownMemo = memo(Markdown);

export default function BigFeature(props: Props): React.ReactElement | null {
  const [displayFeature, setDisplayFeature] = useHash();

  const featureSplit = decodeURI(displayFeature).slice(1).split("/");

  const selectedHeader = useRef<Element | null>(null);

  const versionName = featureSplit[0];
  const [featureName, scrollTo] = featureSplit.slice(1).join("/")
    .replace("_", " ")
    .split("#");

  console.log(versionName, featureName, scrollTo);

  useEffect(() => {
    if (
      selectedHeader.current &&
      selectedHeader.current.classList.contains(styles.selectedHeader)
    ) {
      selectedHeader.current.classList.remove(styles.selectedHeader);
      selectedHeader.current = null;
    }
    const desc: HTMLElement | null = document.getElementById("modaldesc");
    if (desc === null) {
      return;
    }
    if (scrollTo) {
      const elem = document.getElementById(scrollTo);
      if (!desc.contains(elem)) {
        return;
      }
      elem?.scrollIntoView();
      if (!elem?.classList.contains(styles.selectedHeader)) {
        elem?.classList.add(styles.selectedHeader);
      }
      selectedHeader.current = elem;
    } else {
      desc.scrollTop = 0;
    }
  }, [scrollTo]);

  const renderer = useMemo<Partial<ReactRenderer>>(() => {
    return {
      heading: (children: string[], level: number) => {
        const child = children[0]
        const Header = ("h" + level) as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; 
        if (
          typeof child !== "string" ||
          !child ||
          !child.includes(";")
        ) {
          return <Header>{child}</Header>;
        }
        const [id, text] = child.split(";");
        return (
          <Header id={id}>
            {text}
            <a
              href={`#${versionName}/${featureName}#${id}`}
              className={styles.linkA}
            >
              🔗
            </a>
          </Header>
        );
      },
      table: (children: JSXInternal.Element[]) => (
        <div className={styles.tablecontainer}>
          <table>{children}</table>
        </div>
      ),
    };
  }, [featureName, versionName]);

  // const urlTranform = useCallback(
  //   (url: string) => {
  //     if (url.startsWith("h#")) {
  //       return `#${versionName}/${featureName}#${url.slice(2)}`;
  //     }
  //     return defaultUrlTransform(url);
  //   },
  //   [versionName, featureName],
  // );

  if (displayFeature == "" || displayFeature == "#") {
    return null;
  }

  if (displayFeature == "#About") {
    return (
      <AboutPage
        displayFeature={displayFeature}
        setDisplayFeature={setDisplayFeature}
      />
    );
  }

  let update: UpdateType | null = null;
  for (const upd of updates) {
    if (upd.version == versionName) {
      update = upd;
    }
  }
  if (update == null) {
    setDisplayFeature("#");
    return null;
  }

  let feature: FeatureType | null = null;
  for (const feat of update.features) {
    if (feat.name == featureName) {
      feature = feat;
    }
  }
  if (feature == null) {
    setDisplayFeature("#");
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
      displayFeature={displayFeature}
      setDisplayFeature={setDisplayFeature}
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
      linkUrl={encodeURI(`#${versionName}/${featureName}`)}
    >
      <>
        <TableOfContents
          versionName={versionName}
          featureName={featureName}
          description={feature.description}
        />
        <MarkdownMemo renderer={renderer}
        >
          {feature.description}
        </MarkdownMemo>
      </>
    </Modal>
  );
}
