import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_6_5: UpdateType = {
  version: "3.6.5",
  description: "",
  features: [
    {
      name: "Show Results Screenshot Button",
      description: `
A button to screenshot results will be added to the Show Results page.
      `,
      tags: [],
    },
    {
      name: "Hairstyle on Costume Shop Preview",
      description: `
The currently worn hairstyle will be shown when purchasing costumes for a character.
      `,
      tags: [],
    },
    {
      name: "Card Filtering Options",
      description: `
Adds options for filtering card lists.
- Rarity
  - 4 Star
  - Birthday/Anniversary
  - 3 Star
  - 1 Star
  - 2 Star
- Hairstyle
- Costume
- No Costume
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2024, 5, 6),
  },
};

export default v3_6_5;
