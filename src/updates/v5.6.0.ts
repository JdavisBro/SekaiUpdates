import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v5_6_0: UpdateType = {
  version: "5.6.0",
  description: "",
  features: [
    {
      name: "Memoria Exchange for Virtual Singers",
      description: `
# OCtoVS;OC -> Virtual Singer Exhange

Due to the Virtual Singer character's Memoria being difficult to obtain, they can now be bought in exchange for the other 20 characters Memoria.

Virtual Singer Memoria cannot be bought with other Virtual Singer Memoria.

![Miku Memoria being purchased](https://pjsekai.sega.jp/master-data/image/news/news_thumb_647_nDmBgbhb.png)

# InMySekai;Exchange within MySekai

In addition, the Memoria exchange menu will be available from the MySekai menu.

![Memoria exchange button in MySekai's menu](https://pjsekai.sega.jp/master-data/image/news/news_thumb_647_vWHvXRbe.png)
`,
      tags: [],
    },
    {
      name: "Banner Frame",
      description: `
Frames are rewards from the World Link Finale Chapter scheduled to be held from September 25th.

By setting a Frame, you can decorate the banner of your player in Coop Show, Event Ranking, and Friend screens. 

- Frames can be toggled from [Menu] -> [Profile] -> [Frame]
- Player information on Ranked Match, some virtual show waiting areas, MySekai, etc. will not display frames.

![Frames shown on the Coop Show and Event Rankings screen](https://pjsekai.sega.jp/master-data/image/news/news_thumb_647_dkinAHcn.png)
`,
      tags: ["finale"],
    },
  ],
  date: {
    [Server.jp]: new Date(2025, 8, 3),
  },
};

export default v5_6_0;
