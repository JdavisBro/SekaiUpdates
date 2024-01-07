import { memo } from "react";
import styles from "./TableOfContents.module.css";

type Props = {
  description: string;
  versionName: string;
  featureName: string;
};

type HeadingType = {
  level: number;
  id: string;
  text: string;
  children: HeadingType[];
};

export default memo(function TableOfContents(
  props: Props,
): React.ReactElement | null {
  let lowest_level = 6;

  const headings = props.description
    .split("\n")
    .filter((value) => value.startsWith("#") && value.includes(";"))
    .map((value) => {
      const [id, text] = value.replace(/^#+? /, "").split(";");
      const headinglevel = value.split(" ")[0].length;
      lowest_level = lowest_level > headinglevel ? headinglevel : lowest_level;
      return {
        level: headinglevel,
        id: id.trim(),
        text: text.trim(),
        children: [],
      };
    });

  if (headings.length == 0) {
    return null;
  }

  // Make tree
  let root: HeadingType[] = [];
  let previous: HeadingType = headings[0];
  let parents: {
    [key: number]: HeadingType;
  } = {};
  headings.forEach((value) => {
    if (value.level == lowest_level) {
      root.push(value);
      previous = root[root.length - 1];
      parents[value.level] = root[root.length - 1];
      return;
    }

    // Going UP
    if (previous.level < value.level) {
      parents[previous.level] = previous;
      parents[previous.level].children.push(value);
      previous =
        parents[previous.level].children[
          parents[previous.level].children.length - 1
        ];
      console.log(parents, previous.level);
      return;
    }

    // Going DOWN
    if (previous.level > value.level) {
      for (let i = value.level; i <= previous.level; i++) {
        delete parents[i];
      }
    }
    var i = 1;
    while (!(value.level - i in parents) || i > lowest_level) {
      i -= 1;
    }
    parents[value.level - i].children.push(value);
    previous =
      parents[value.level - i].children[
        parents[value.level - i].children.length - 1
      ];
  });

  function createChildren(heading: HeadingType) {
    return (
      <li key={heading.id}>
        <a href={`#${props.versionName}/${props.featureName}/${heading.id}`}>
          {heading.text}
        </a>
        {heading.children.length == 0 ? null : (
          <ul>{heading.children.map(createChildren)}</ul>
        )}
      </li>
    );
  }

  return (
    <div className={styles.contents}>
      <p>Table of Contents</p>
      <div className={styles.tree}>
        <ul>{root.map(createChildren)}</ul>
      </div>
    </div>
  );
});
