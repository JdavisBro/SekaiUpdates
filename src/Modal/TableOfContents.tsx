import styles from "./TableOfContents.module.css";

type Props = {
  description: string;
  versionName: string;
  featureName: string;
};

export default function TableOfContents(
  props: Props,
): React.ReactElement | null {
  let lowestlevel = 6;

  const headings = props.description
    .split("\n")
    .filter((value) => value.startsWith("#") && value.includes(";"))
    .map((value) => {
      const [id, text] = value.replace(/^#+? /, "").split(";");
      const headinglevel = value.split(" ")[0].length;
      lowestlevel = lowestlevel > headinglevel ? headinglevel : lowestlevel;
      return { level: headinglevel, id: id.trim(), text: text.trim() };
    });

  if (headings.length == 0) {
    return null;
  }

  return (
    <div className={styles.contents}>
      <p>Table of Contents</p>
      <ul>
        {headings.map((value) => (
          <li className={styles[`level${value.level - lowestlevel + 1}`]}>
            <a href={`#${props.versionName}/${props.featureName}/${value.id}`}>
              {value.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
