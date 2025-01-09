import { useRef, useEffect } from "react";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactElement;
  displayFeature: string;
  setDisplayFeature: (newHash: string) => void;
  bigTitle: string;
  subTitle?: string;
  dateText?: string | React.ReactElement;
  linkUrl?: string;
};

export default function Modal(props: Props) {
  const closeButton = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (closeButton.current) {
      closeButton.current.focus();
    }
  }, [closeButton]);

  const rootDiv = useRef<HTMLDivElement>(null);
  const descDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (rootDiv.current && closeButton.current) {
        if (e.key == "Tab") {
          if (
            !rootDiv.current.contains(document.activeElement) ||
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

  return (
    <>
      <div
        onClick={() => {
          props.setDisplayFeature("#");
        }}
        className={styles.container}
        role="dialog"
        aria-labelledby="bigTitle"
        ref={rootDiv}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.box}
        >
          <div className={styles.headerBox}>
            <div className={styles.header}>
              <h2 className={styles.bigTitle}>{props.bigTitle}</h2>
              <h3 className={styles.date}>{props.dateText}</h3>
              <div
                tabIndex={0}
                onClick={() => {
                  props.setDisplayFeature("#");
                }}
                onKeyDown={(event) => {
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
              {props.subTitle}
              {props.linkUrl ? (
                <a href={props.linkUrl} className={styles.linkA}>
                  🔗
                </a>
              ) : (
                ""
              )}
            </h2>
          </div>
          <div id="modaldesc" className={styles.description} ref={descDiv}>
            {props.children}
          </div>
          <button
            className={styles.toTop}
            onClick={() => {
              console.log(rootDiv.current);
              if (descDiv.current) {
                descDiv.current.scrollTop = 0;
              }
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </>
  );
}
