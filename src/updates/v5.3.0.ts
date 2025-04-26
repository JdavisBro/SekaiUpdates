import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v5_3_0: UpdateType = {
  version: "5.3.0",
  description: "",
  features: [
    {
      name: "Memorabilia Shop",
      description: `
In the Virtual Show lobby a Memorabilia Shop will be added including Memorabilia Boxes for previous Connect Shows

- Memorabilia Boxes are included at least one year after initially being added.
- Some Memorabilia Boxes are not included.

![Virtual Show lobby with the Memorabilia Shop and the Memorabilia Shop UI showing previous Connect Shows](https://pjsekai.sega.jp/master-data/image/news/news_thumb_644_MQtPZged.png)
`,
      tags: ["connect live", "connect show", "collection", "custom profile"],
    },
    {
      name: "Custom Profile Page Copying",
      description: `
The ability to copy Custom Profile pages has been added. You can copy pages to the same profile, or a different numbered one.

If there is no free space in the profile for the page, or Memorabilia is included in the page and you don't have an extra one of the same type, the page won't be copied.

![Demonstration of a page being copied](https://pjsekai.sega.jp/master-data/image/news/news_thumb_644_RGnpzfzL.png)
`,
      tags: ["profile copying"],
    },
    {
      name: "Feature Improvements",
      description: `
- Added the list of characters that react to an item to the Secret Shop UI
- Improves quantity selection bar in the transformation machine so that the number that can be transformed is the limit.
- Added Virtual Show joined/not joined filter to past event list.
`,
      tags: ["mysekai", "virtual show", "event list"],
    },
  ],
  date: {
    [Server.jp]: new Date(2025, 3, 25),
  },
};

export default v5_3_0;
