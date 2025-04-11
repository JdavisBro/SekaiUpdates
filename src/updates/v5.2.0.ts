import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v5_2_0: UpdateType = {
  version: "5.2.0",
  description: "",
  features: [
    {
      name: "MySekai - Block Furniture",
      description: `
- A new furniture called [Block] will be added to MySekai. Blocks can be crafted and placed to decorate your SEKAI.
- Blocks are stackable and you can place small furniture on top of them.
- There will be 2 types of blocks, [colored] and [clear]. There will be 20 different colored blocks and 1 clear block.
- [Colored Blocks], as the name suggests, are solid colored blocks, while [Clear Blocks] are colorless/transparent blocks. Players and characters can pass through [Clear Blocks].
- Blocks come in 2 sizes, [1x1] and [2x2]. You will be able to stack up to 15 [1x1] blocks in your garden, and up to 10 [1x1] blocks inside your house.

![Block Furniture demonstration](https://pjsekai.sega.jp/master-data/image/news/news_thumb_623_CuVQoyQiPB.jpg)
![Edit menu showing the transparent clear blocks](https://pjsekai.sega.jp/master-data/image/news/news_thumb_624_pdIqRnafdw.png)

## Notes

- There may be height/stack difference for each furniture that can be placed on top of the blocks depending on the furniture's size.
- Some furniture has specific position that will trigger character's reaction, so there may be chances that characters won't be able to react/interact with some furniture when placed on top of a block.`,
      tags: ["floating"],
    },
    {
      name: "MySekai - World Pass Invitation Adjustment",
      description: `
- For players who have bought the [World Pass], after the update, the amount of character Memoria you can get per day from the character you personally invited to your SEKAI using the [Invitation Letter] feature will be increased to 2.
- This effect will ONLY apply to characters you have personally invited to your SEKAI, you will still get 1 Memoria per day from other characters that are visiting to your SEKAI randomly.

![](https://pjsekai.sega.jp/master-data/image/news/news_thumb_625_spPqXlkubf.jpg)
`,
      tags: [],
    },
    {
      name: "MySekai - Other Changes",
      description: `
# gate;Unit Gates Balance

- Due to each unit having different number of visiting characters, the amount of Memoria required to level up gates for some units are a lot more than others.
- After the update, the amount of Memoria required to level up gates for all units will be adjusted to be roughly the same while reducing the amount of character Memoria required to level up the unit gates with a lot of visiting characters.
- Compensation Memoria will also be sent to players who have leveled up their gates (Amount will be based on each unit's gate level and the amount of Memoria you have used before the update)

# load;Furniture Load

- Reduces load for placing furniture in MySekai.
- The limit of the amount of furniture, path, fence you can placed in your SEKAI will also be gradually increased as the devs continue to monitor the traffic/heavy load in My SEKAI.

# music;Music for each floor

- You can now set individual music for each floor in your house.
`,
      tags: [],
    },
    {
      name: "MySekai Character Convos in Character Archive",
      description: `
- After the update, you will be able to view each character's convos/talks from MySekai via the Character Archive.
- There are 2 types of MySekai convos: [Normal] convos and [Furniture] convos
  - [Normal] Convos will cover conversations such as: daily convos, weather-specific convos, convos that happened depending on the number of visits, event-specific convos.
  - [Furniture] Convos will cover conversations such as: convos that triggered when interacting with specific furniture.

![Showcase of Leo/need Miku's MySekai furniture convos in the Character Archive](https://pjsekai.sega.jp/master-data/image/news/news_thumb_626_KfshvWpULH.PNG)

## Notes

- Convos that you have unlocked before the update will be unlocked automatically after the update.
- Some convos such as the character convos during MySekai tutorial or unvoiced speech bubbles will NOT be included in the Character Archive.
`,
      tags: ["talk", "furniture"],
    },
    {
      name: "MySekai Character Missions",
      description: `
After the update, new Character Missions related to MySekai will be added to the game.
- Craft furniture that will trigger character interactions and view [certain number] of character convos.
- Craft [certain number] of furniture with [specific character] tag in MySekai (plushies)
- Craft [certain number] of [specific character] Canvas in MySekai (cards)

Untrained & Trained character Canvas will be counted as 1, so even if you've created 2 canvases (untrained & trained) of the same card, it'll still be counted as 1 and not 2.
`,
      tags: ["character rank", "cr"],
    },
    {
      name: "World Link Event Changes",
      description: `
# summary;Summary

As announced before, the 2nd round of [World Link] events will be held this year, with the first one starting in April.

This time, the [World Link] events will depict various "what-if" stories, stories that could have been. These were triggered by the small trees that grow in each unit's SEKAI.

A new chapter called the [FINALE CHAPTER] will also be held at the end after all [World Link] events have concluded. This will be a chapter that put everything together into one.

# schedule;Schedule

- Vivid BAD SQUAD: April 8th -> April 20th
- Wonderlands×Showtime: May 9th -> May 21st
- Nightcord at 25:00: Mid June
- Leo/need: Late June
- MORE MORE JUMP!: Mid August
- VIRTUAL SINGER: Mid September
- Finale Chapter: After VIRTUAL SINGER World Link Event.

![2nd World Link schedule](https://pjsekai.sega.jp/master-data/image/news/news_thumb_627_oRVoTLcwNa.jpg)

# support;Support Unit Adjustments

- The card slots for each character's [Support Unit] in World Link events will be increased from 12 to 20.
- Unit-Limited (WL) cards from the previous round of World Link events will now give +20% event bonus when put in Support Units.
  - However, please do note that the cards have to match the character's Support Unit [Example: You have to put Kohane's previous Unit-Limited (WL) card in Kohane's Support Unit slot, it will NOT give the +20% bonus when put in any other character's Support Unit slot].
  - The *new* Unit-Limited (WL) cards will NOT give the +20% bonus when put in any character's Support Unit(s).
- Balance adjustments have also been made to the overall bonus % that cards give when put in Support Units.

![Support Team page for Akito's Chapter, showing the old unit-limited cards with an increased bonus](https://pjsekai.sega.jp/master-data/image/news/news_thumb_628_QHOfFTevXh.jpg)
![](https://pjsekai.sega.jp/master-data/image/news/news_thumb_629_AUevVhogPE.jpg)
![Table showing updated bonus for support unit cards](https://pjsekai.sega.jp/master-data/image/news/news_thumb_630_hsUhMdfbLR.jpg)

## balance;Balance Adjustments

|       | Rarity | Mastery |    M0 |    M1 |    M2 |    M3 |    M4 |    M5 | Skill Level |   SL1 |   SL2 |   SL3 |   SL4 |
|:-----:|:------:|:-------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----------:|:-----:|:-----:|:-----:|:-----:|
|    4* |   7.5% |         |  0.0% |  0.5% |  1.0% |  1.5% |  2.0% |  2.5% |             | 0.00% | 0.25% | 1.00% | 2.50% |
| BD/AN |   5.0% |         |  0.0% |  0.4% |  0.8% |  1.2% |  1.6% |  2.0% |             | 0.00% | 0.20% | 0.80% | 2.00% |
|    3* |   2.0% |         |  0.0% |  0.3% |  0.4% |  0.6% |  0.8% |  1.0% |             | 0.00% | 0.15% | 0.40% | 1.00% |
|    2* |   1.0% |         |  0.0% |  0.2% |  0.2% |  0.3% |  0.4% |  0.5% |             | 0.00% | 0.10% | 0.20% | 0.50% |
|    1* |   0.5% |         |  0.0% |  0.1% |  0.1% |  0.2% |  0.2% |  0.3% |             | 0.00% | 0.05% | 0.10% | 0.30% |

# exchange;Event Exchange Adjustments

- Character Exchanges:
  - Added Character Memoria x1 (2 total) to each character's exchange.
- Items moved from character to overall exchange:
  - Bonus Energy Drink (S)
  - Miracle Gem x5
  - Magic Seeds 
- Overall Exchange:
  - Removed 2 star character(s).
  - Added Wish Jewel x1 (1 total)
  - Added Skill-Up Score (Advanced) x1 (3 total)
  - Added Practice Score (Advanced) x1 (20 total)

# finale;Finale Chapter

- By setting a TOP 1000 or above title from 2nd World Link events, you will recieve a +50% event bonus during the Finale Chapter.

![](https://pjsekai.sega.jp/master-data/image/news/news_thumb_631_yWnnMmmpCA.jpg)
`,
      tags: [],
    },
    {
      name: "Player Banner Frame from Finale Chapter",
      description: `
# World Link: New Feature [Frame]

- A new feature called [Frame] will be introduced in this new round of World Link events. You will be able to use [Frames] to decorate your player's banner in [Multi Live].
- You will be able to get these [Frames] from placing in either [TOP 100] or [TOP 1000] in the [FINALE CHAPTER] of World Link event.
- The Frames will also come in various colors. The color of the frame you can get will be one based on the character you have as your leader the most during the period of the [FINALE CHAPTER]. (Example: Pink frame for Kohane)

![](https://pjsekai.sega.jp/master-data/image/news/news_thumb_632_lJLTBmGvrn.jpg)

# Notes

- Please note that you will ONLY get these frames from ranking in the [FINALE CHAPTER] of World Link event that will be held in mid-September (After all other World Link events have concluded).
- You will NOT get any frames from ranking in other World Link events.
`,
      tags: [],
    },
    {
      name: "Bonus Energy Limit Increase",
      description: `
Increased the limit for natural bonus energy generation from 15 -> 25, or from 30 -> 50 with the Colorful+ boost.
`,
      tags: [],
    },
    {
      name: "Party Trust Rank Checking",
      description: `
Added the ability to check the current party's Trust Rank levels on the Edit screen and before Solo shows.

![](https://pjsekai.sega.jp/master-data/image/news/news_thumb_633_sHKjytxilV.jpg)
`,
      tags: [],
    },
    {
      name: "Improved Costume Shop Filtering",
      description: `
- Add more filter/sort options: Can be made, Already made, Not yet made
- A costume will now be marked as "Completed" in the shop once you have unlocked and made all available colors for the costume.
`,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2025, 2, 30),
  },
};

export default v5_2_0;
