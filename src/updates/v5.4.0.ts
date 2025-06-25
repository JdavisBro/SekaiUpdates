import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v5_4_0: UpdateType = {
  version: "5.4.0",
  description: "",
  features: [
    {
      name: "MV Viewer with Duplicate Characters",
      description: `
To be able to use the same character multiple times in one 3DMV, the "MV formation unit" will be added.

Unlike the rhythm game formation unit, MV formation unit can have duplicates of characters where each duplicate character can also have a separate costume and hairstyle.

![MV formation unit demonstration with 5 Mikus in the Miku Anamanaguchi 3DMV](https://pjsekai.sega.jp/master-data/image/news/news_thumb_646_VMfRFy3q.png)

## Notes

- The characters and costumes in the MV formation unit will not affect the normal formation unit.
- MV formation unit cannot be used in 3DMV playback during the rhythm game.
- MV formation unit configuration will be reset when cache is cleared or the account is transferred. 
`,
      tags: [],
    },
    {
      name: "MV Viewer Screenshot Function",
      description: `
Screenshot function added to MV Viewer.
`,
      tags: [],
    },
    {
      name: "Master Difficulty Unlocked by Default",
      description: `
The unlock condition for the MASTER difficulty of songs (Clear Expert difficulty with 7 or less goods) was initially added as a progress indicator in the rhythm game.

Because of the addition of APPEND difficulty, which doesn't have an unlock condition, the unlock condition for MASTER difficulty will be removed.

After the update, you will be able to play MASTER difficulty in all previous and future songs.

Alongside this change, the "MASTER not unlocked" filter for songs will be removed.
`,
      tags: [],
    },
    {
      name: "Player Rank EXP Display",
      description: `
By tapping your Player Rank, you can view the XP required to rank up.
`,
      tags: [],
    },
    {
      name: "Other Changes + Bug Fixes",
      description: `
- MySekai - You will now be able to placed L-size furniture on top of other furniture.
- MySekai - Adjust the game to reduce the load on the number of furniture/path/fence that can be placed on the screen.
- MySekai - Fixed a bug where an error message would pop up when using chainsaw and/or stone drilling machine to gather materials and drop items may not be acquired correctly.
- MySekai - Fixed a bug where the reaction of some furniture may keep running while on Layout mode.
- MySekai - Fixed a bug where the game would crash in certain devices when trying to search for specific character reactions.
- MySekai - Fixed a bug where tabs and selection would reset whenever an item is recycled.
- MySekai - Fixed a bug where a furniture's placement will be reflected incorrectly when put on top a colored block.
- Show - Fixed a bug where the numbers of event pts would be displayed incorrectly when it reaches more than 100,000+ pts.
- Ranked Match - Fixed a bug where the [April Fool's] version of some songs would play even after April 1st.
- Fixed a bug where the icon for [The Boundary Where Two Worlds Meet] 4* Hatsune Miku (From Touhou Project collab) would not be displayed in the Character Archives.
- Fixed a bug in some screens where when a card is set to its untrained illustration, the rarity stars would go back to its untrained color as well.
- Fixed a bug where Game Mode would not start properly on iOS devices.
- Other bug fixes.
`,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2025, 5, 23),
  },
};

export default v5_4_0;
