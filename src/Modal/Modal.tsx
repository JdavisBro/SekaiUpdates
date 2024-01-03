import { useRef, useEffect } from "react";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactElement;
  displayFeature: string;
  setDisplayFeature: (newHash: string) => void;
  bigTitle: string;
  subTitle?: string;
  dateText?: string | React.ReactElement;
};

export default function Modal(props: Props) {
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
              <h2 className={styles.bigTitle}>{props.bigTitle}</h2>
              <h3 className={styles.date}>{props.dateText}</h3>
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
              {props.subTitle}
            </h2>
          </div>
          <div className={styles.description}>{props.children}</div>
        </div>
      </div>
    </>
  );
}