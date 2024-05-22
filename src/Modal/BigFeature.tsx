import Markdown, { ExtraProps, defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";

import Modal from "./Modal";
import updates from "../updates/updates";
import JoinElements from "../utils/JoinElements";
import styles from "./Modal.module.css";
import { Server } from "../types/ServerType";
import { FeatureType, UpdateType } from "../types/UpdateType";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import TableOfContents from "./TableOfContents";
import { useHash } from "react-use";
import AboutPage from "./AboutPage";

type Props = {
  server: Server;
};

const MarkdownMemo = memo(Markdown);

export default function BigFeature(props: Props): React.ReactElement | null {
  const [displayFeature, setDisplayFeature] = useHash();

  const featureSplit = displayFeature.slice(1).split("/");

  const selectedHeader = useRef<Element | null>(null);

  const versionName = featureSplit[0];
  const [featureName, scrollTo] = decodeURI(featureSplit.slice(1).join("/"))
    .replace("_", " ")
    .split("#");

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

  const headingComponent = useCallback(
    (Header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
      return (componentProps: JSX.IntrinsicElements["h1"] & ExtraProps) => {
        if (
          typeof componentProps.children !== "string" ||
          !componentProps.children ||
          !componentProps.children.includes(";")
        ) {
          return <Header>{componentProps.children}</Header>;
        }
        const [id, text] = componentProps.children.split(";");
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
      };
    },
    [versionName, featureName],
  );

  const remarkPlugins = useMemo(() => [remarkGfm], []);
  const components = useMemo(() => {
    return {
      h1: headingComponent("h1"),
      h2: headingComponent("h2"),
      h3: headingComponent("h3"),
      h4: headingComponent("h4"),
      h5: headingComponent("h5"),
      h6: headingComponent("h6"),
      table: (componentProps: JSX.IntrinsicElements["h1"] & ExtraProps) => (
        <div className={styles.tablecontainer}>
          <table>{componentProps.children}</table>
        </div>
      ),
    };
  }, [headingComponent]);

  const urlTranform = useCallback(
    (url: string) => {
      if (url.startsWith("h#")) {
        return `#${versionName}/${featureName}#${url.slice(2)}`;
      }
      return defaultUrlTransform(url);
    },
    [versionName, featureName],
  );

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
      linkUrl={`#${versionName}/${featureName}`}
    >
      <>
        <TableOfContents
          versionName={versionName}
          featureName={featureName}
          description={feature.description}
        />
        <MarkdownMemo
          remarkPlugins={remarkPlugins}
          components={components}
          urlTransform={urlTranform}
        >
          {feature.description}
        </MarkdownMemo>
      </>
    </Modal>
  );
}
