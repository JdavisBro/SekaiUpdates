import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_5_0: UpdateType = {
  version: "3.5.0",
  description: "",
  features: [
    {
      name: "More Precise Offset Settings",
      description: `
- Offset granularity now increased to two decimal points (can now increase/decrease by 0.01)
- Min number is 0.01
      `,
      tags: [],
    },
    {
      name: "Show Option: Lane Cover",
      description: `
- You can now adjust where the notes appear.
- The range is adjustable between 1 and 100.

![Lane Cover settings screen with the option set to 3](https://pjsekai.sega.jp/master-data/image/news/news_thumb_470_rMEWPfJiruL.PNG)
      `,
      tags: [],
    },
    {
      name: "Trace Note Guidelines Transparency",
      description: `
- You can now adjust the transparency of Trace note guidelines.
- The transparency is adjustable between 10% and 100%.
      `,
      tags: [],
    },
    {
      name: "'Light' Show Effect Options",
      description: `
## Tap Effect Settings
- You can now set the tap effect setting to "Light".
- This will reduce the amount of effects used when you tap the notes during Lives.
## FEVER Effect Settings
- You can now set the FEVER effect setting to "Light".
- This will reduce the amount of effects used for FEVER/SUPER FEVER during Lives.
      `,
      tags: ["fever", "super fever"],
    },
    {
      name: "Updated In-Show Skill Display",
      description: `
- During Lives, activated skills will now be displayed by their level first, then followed by their effects.

![Skill Activation during a Show displaying its effect.](https://pjsekai.sega.jp/master-data/image/news/news_thumb_471_SbccNUpUkN.PNG)
      `,
      tags: [],
    },
    {
      name: "Full Combo + All Perfect Character Voice Lines",
      description: `
- New character voicelines for "FULL COMBO' and "ALL PERFECT" results will be added to Character Archive.
- This will be available for all characters, which include the different SEKAl-variant VIRTUAL SINGERs.

![Miku's new Full Combo and All Perfect voice lines in the Character Archive](https://pjsekai.sega.jp/master-data/image/news/news_thumb_472_RWtDiPybvs.PNG)
      `,
      tags: [],
    },
    {
      name: "Unique Sekai VS Show End Animations",
      description: `
- New unique character motions will be added for all SEKAl-variant VIRTUAL SINGERs to match their unique voicelines (except for Miku).
- These motions will play on the Live results screen.
      
![Show Result screen with Nightcord at 25:00 Rin's new animation](https://pjsekai.sega.jp/master-data/image/news/news_thumb_473_IpoKGtcrdw.PNG)
      `,
      tags: [],
    },
    {
      name: "Bug Fixes",
      description: `
- [AREA CONVO] Fixed a bug where character icons for several area convos wouldn't show up on the map.
- [OTHER] Fixed a bug where the Titles of blocked players wouldn't get hidden in certain screens.
- [RANK MATCH] Fixed a bug where players' card illustration and Titles couldn't be displayed properly on the results screen.
- [SONG SELECTION] Fixed a bug where the jacket art for certain songs wouldn't change even when switched to a different vocal/version.
- [VIRTUAL LIVE] Fixed a bug where audio wouldn't play properly after sending out/throwing items during a Virtual/Connect Live.
- [OTHER] Fixed a bug where the cancel sound effect played was different in certain pop-ups.
- [OTHER] Fixed a bug where 3D models were overlapping the UI on the Premium Mission Pass purchase screen.
- [STORY] Fixed a display bug where the [!] icon would still show up even when there's no new story to read.
- [CUSTOM PROFILE] Fixed a bug where illustrations and shapes of created profiles in the Custom Profile TOP screen were displayed vertically.
- [STORY] Fixed a bug where certain actions could cause the dialogue in the story to be in a different order than it was supposed to be.
- Other minor bug fixes
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2024, 3, 30),
  },
};

export default v3_5_0;
