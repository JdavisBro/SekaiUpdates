import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_7_0: UpdateType = {
  version: "3.7.0",
  description: "",
  features: [
    {
      name: "Bloom Festival",
      description: `
# Gacha;Bloom Festival Gacha
- Starting from June 30th, a renewed "Colorful Festival Gacha" called "Bloom Festival Gacha" will be held.
- Similar to "Colorful Festival Gacha", "Bloom Festival Gacha" will have doubled 4* rates, as well as featuring brand new "BloomFes-exclusive" 4*. These new "BloomFes" 4* will also be available in every "Bloom Festival Gacha"
- Despite the name change, all past "ColorFes-exclusive" 4* will still be available in "Bloom Festival Gacha"
- The new "BloomFes" 4* will feature a new gimmick: Double Skills. As the name suggests, each "BloomFes" 4* will have 2 skills. Skill A is available for the card's untrained and Skill B is available for the card's trained. You'll be able to switch these skills anytime by switching the card's illustration.
- In addition to the usual training materials, 3 "Wish Drops" will be required to "special train" a 4* card.
- To commemorate the new "Bloom Festival Gacha", 3 "Wish Drops" will be given to all players on June 30th at 12:00.

![Bloom Festival Logo and Announcement](https://pjsekai.sega.jp/master-data/image/news/news_thumb_491_TdHJdZbguD.jpg)

![Bloom Festival Skill Swapping](https://pjsekai.sega.jp/master-data/image/news/news_thumb_492_TXKXZTpuMc.jpg)

![Bloom Festival Skill Explanation](https://images-ext-1.discordapp.net/external/c6Et0JiRxbAWoGhQLE7ifNTPECTQaT3kLaFdXC9qHyQ/%3Fformat%3Djpg%26name%3Dlarge/https/pbs.twimg.com/media/GROdZlWaIAAOSDv?format=webp&width=1061&height=597)

# Skill;BloomFes Skills
## VS;VIRTUAL SINGER - Untrained
[70% - 90%] score boost for 5 seconds. Gain additional 30% boost for every different unit type in your team (except for oneself) (up to 2 unit types)
### Examples
| Team Composition                                                                 | Skill Score Boost |
|----------------------------------------------------------------------------------|-------------------|
| BloomFes VS + 4 members of L/N                                                   | Base boost + 30%  |
| BloomFes VS + 2 members of L/N, 2 members of MMJ                                 | Base boost + 60%  |
| BloomFes VS + 1 member of L/N, 1 member of MMJ, 1 member of WxS, 1 member of N25 | Base boost + 60%  |

## OC;ORIGINAL CHARACTERS - Untrained
[60% - 80%] score boost for 5 seconds. Select 1 other random card in your team and gain additional boost by half of the selected card's max skill score. (Up to 150% total boost)
- If a card with the skill [For 5 seconds, 90% score boost if life is less than 800 or 120% score boost if life is 800. For every +10 life above 800, score boost increased by +1% (up to 140%)] was chosen then gain additional 70% score boost (150% total score boost).

## Trained;All Trained
[90% - 110%] score boost for 5 seconds. Gain additional boost based on the character's Character Rank (+1% for every 2 ranks up to 100; up to 160% boost total)
- Hatsune Miku's Character Rank is 51 = additional 25% score boost
- Hatsune Miku's Character Rank is 102 = additional 50% score boost
      `,
      tags: ["bloomfes", "colorful festival", "colofes", "colorfes"],
    },
    {
      name: "Increase event bonus for no subunit Virtual Singers",
      description: `
- After the update, during events, the Character Bonus for VIRTUAL SINGER members without sub-units will be increased from 15% => 25%.
- There will be NO CHANGE to the amount of Character Bonus for VIRTUAL SINGER members WITH sub-units.

![No subunit Virtual Singer change example](https://pjsekai.sega.jp/master-data/image/news/news_thumb_494_GUKLuHnviy.jpg)
      `,
      tags: [],
    },
    {
      name: "Bonus Mission Rewards Increase",
      description: `
- After the update and starting from the event that will begin on June 30th, the amount of rewards you can get from clearing Bonus Missions will be increased.
- Clearing Each Bonus Mission
  - [BEFORE CHANGE] Live Pts x50
  - [AFTER CHANGE] Live pts x50 + Crystals x10
- Clearing All Bonus Missions
  - [BEFORE CHANGE] Live pts x150
  - [AFTER CHANGE] You can now CHOOSE 1 item between 8 available items
    - Crystals x100
    - Wish Pieces x100
    - Virtual Coins x300
    - Bonus Energy Drinks (Large) x3
    - Miracle Gems x50
    - Practice Scores (Intermediate) x50
    - Skill-Up Scores (Intermediate) x3
    - Show pts x150
      - Show pts is only available as a choice for players who bought "Colorful Pass"

![All Bonus Mission reward choices](https://pjsekai.sega.jp/master-data/image/news/news_thumb_495_HmMRJquZoK.PNG)
      `,
      tags: [],
    },
    {
      name: "Additional Favorite Stamp Tabs & Better Sorting",
      description: `
- After the update, 2 additional "Favorite Stamp" tab will be added to the "Sticker" page.
- In addition filter/sort options will also be added, making it easier for players to search for the stamps they want.

![New favorite stamp tab UI](https://pjsekai.sega.jp/master-data/image/news/news_thumb_496_AbyzNfOpjB.png)
      `,
      tags: ["stickers"],
    },
    {
      name: "Bug Fixes",
      description: `
- [CHEERFUL LIVE] Fixed a bug where the order or stickers shown during a Cheerful Live is different than expected.
- [AREA] Fixed a bug where players are able to go to certain areas before having them unlocked.
- [AREA] Fixed a bug where players may be redirected to a different area than expected when there are areas with unread area convos.
- [GACHA] Fixed a bug where a picture of gacha ticket will be shown in the "Pull Again" button, despite the player(s) having no more gacha tickets left.
- [VIRTUAL LIVE] Fixed a bug where the order of stickers set was not shown in the Virtual Live waiting lobby.
- [MULTI LIVE/CHEERFUL LIVE] Fixed an issue with the sort button in the "Favorite" and "History" sticker tabs.
- [CHEERFUL LIVE] Fixed a bug that prevented players from entering private rooms that had not been opened in "Cheerful Live" when they left the room after a team has been selected.
- [CUSTOM PROFILE] Fixed a bug where some character illustrations were not the expected sizes.
- [CUSTOM PROFILE] Fixed a bug where a dotted line may appear when editing the border size of "Shape" in a custom profile.
- [PROFILE] Fixed a bug where member illustrations were not the expected size when displayed vertically on each profile screen.
- [LIVE COSTUME] Fixed a bug where sometimes only the head model of a character will be displayed on the "Live Costume" screen and where characters could wear costumes that they weren't supposed to be able to wear during unstable network.
- [STORY] Fixed a bug where unintended characters would continue to be displayed in certain stories.
- Other minor bug fixes
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2024, 5, 30),
    [Server.en]: new Date(2025, 5, 30),
  },
};

export default v3_7_0;
