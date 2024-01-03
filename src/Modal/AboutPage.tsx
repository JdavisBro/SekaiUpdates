import Modal from "./Modal";

type Props = {
  displayFeature: string;
  setDisplayFeature: (newHash: string) => void;
};

export default function AboutPage(props: Props): React.ReactElement {
  return (
    <>
      <Modal
        displayFeature={props.displayFeature}
        setDisplayFeature={props.setDisplayFeature}
        bigTitle="About"
      >
        <>
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
            alt="'Thank You' Saki Stamp"
          />
        </>
      </Modal>
    </>
  );
}
