import { Ref } from "react";
import styles from "./BigFeature.module.css";

type Props = {
  displayFeature: string;
  setDisplayFeature: (newHash: string) => void;
  rootDivRef: Ref<HTMLDivElement>;
  closeButton: Ref<HTMLDivElement>;
};

export default function AboutPage(props: Props): React.ReactElement {
  return (
    <>
      <div
        onClick={() => {
          props.setDisplayFeature("#");
        }}
        className={styles.container}
        role="dialog"
        aria-labelledby="bigTitle"
        ref={props.rootDivRef}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.box}
        >
          <div className={styles.headerBox}>
            <div className={styles.header}>
              <h2 id="bigTitle" className={styles.updateName}>
                About
              </h2>
              <div
                tabIndex={0}
                onClick={() => {
                  props.setDisplayFeature("#");
                }}
                onKeyDown={(event) => {
                  if (event.key == "Enter") {
                    props.setDisplayFeature("#");
                  }
                }}
                className={styles.close}
                title="Close"
                ref={props.closeButton}
                autoFocus
              >
                ✖
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <br />
            Created by{" "}
            <a href="https://github.com/JdavisBro" target="_blank">
              JdavisBro
            </a>
            <br />
            <br />
            Most translated patch notes from{" "}
            <a href="https://twitter.com/pjsekai_eng" target="_blank">
              pjsekai_eng
            </a>{" "}
            on Twitter.
            <br />
            <br />
            Report issues on{" "}
            <a
              href="https://github.com/JdavisBro/SekaiUpdates/issues"
              target="_blank"
            >
              GitHub
            </a>
            <br />
            <br />
            <img
              src="https://static.wikia.nocookie.net/projectsekai/images/b/bf/Stamp0063.png"
              alt="Thank You Saki Stamp"
            />
          </div>
        </div>
      </div>
    </>
  );
}
