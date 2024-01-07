import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_1_0: UpdateType = {
  version: "3.1.0",
  description: "",
  features: [
    {
      name: "World Link Event Type",
      description: `
## Overview;Overview

A new type of event called "World Link" event will be added to the game after version 3.1.0 update. World Link events will tell the stories of the "change of feelings" within each character and how they'll witness new "possibilities" within the SEKAI.
- The very first "World Link" event will begin on November 8th 2023 at 20:00 JST. The event will feature the unit "Nightcord at 25:00" and titled "Searching for a Reflection Beneath the Waters."
- The event format will be in "Chapters." Each chapter will feature 1 focus character from the featured unit with their own "Chapter Story".
- Each character chapter will also have its own "Chapter Ranking" and "Chapter Exchange (event shop)"
- As for event bonus, an additional unit called "Support Unit" will be available for you to arrange. This Support Unit will give event bonus along with the Main Unit you're using. Each character will have their own Support Unit you can arrange.

![Nightcord at 25:00 World Link - Searching for a Reflection Beneath the Waters](https://pjsekai.sega.jp/master-data/image/news/news_thumb_240_nfjhuha.jpg)

## Ranking;Ranking

- There will be 2 types of ranking in World Link events.  One is "Chapter Ranking", and the other is "Overall Ranking."
- "Chapter Ranking" will be based on each character chapter (pts calculated from a character chapter)
  - "Chapter Ranking" will have specially-designed Title for players who are in TOP 100.
- "Overall Ranking" will be based on all character chapters (pts calculated from all chapters).
## Exchange;Event Exchange/Shop
- There will be 2 types of event exchange/shop. One is "Chapter Exchange", and the other is "Overall/General Exchange."
- You'll earn "Chapter Badges" during a character chapter's event period. Each character chapter will have its own "Chapter Badge." You can only exchange items from the "Chapter Exchange" using the respective "Chapter Badges."
- You'll be able to exchange "Chapter Badges" into "General Badges."
## BottleItem;New Item: Bottle of Feelings
- A brand new item called "Bottle of Feelings" will be available for exchange through "Chapter Exchange."
- This item will give Character Rank EXP after the World Link event is complete for all units.
## SupportUnit;Support Unit
- Support Units will be available for each character chapter. You can arrange them freely.
- A Support Unit can be filled with up to 12 cards.
- You can only put cards that are NOT in your Main Unit into a Support Unit.
- You can also ONLY put featured unit members cards or VIRTUAL SINGER cards with the featured unit's sub-unit into a Support Unit.
- Support Units' total Performance will NOT affect your Main Unit's total Performance. Support Units' skills will also NOT activate during Lives. The only thing that Support Units will affect is the event bonus.
## EventBonus;Event Bonus
- Total event bonus: Main Unit + Support Unit
- The types of bonus differ between Main Unit and Support Units (please look at charts for more details)

|                           |     Main Unit | Support Unit |
|---------------------------|:-------------:|:------------:|
| Featured/Event Card Bonus |       ✓       |              |
| Featured Character Bonus  |       ✓       |       ✓      |
| Type/Attribute Bonus      |       ✓       |              |
| Mastery Rank Bonus        |       ✓       |       ✓      |
| Rarity Bonus              |               |       ✓      |
| Skill Level Bonus         |               |       ✓      |

### MainBonus;Main Unit Bonus
- Featured/Event Card Bonus: 20.0%
- Featured Character Bonus: 25.0%
- Type/Attribute Bonus:
  - 3 Different Types: 75.0%
  - 4 Different Types: 100.0%
  - 5 Different Types: 125.0%
- Mastery Rank Bonus

|       |    M0 |    M1 |    M2 |    M3 |    M4 |    M5 |
|:-----:|------:|------:|------:|------:|------:|------:|
|    4* | 10.0% | 12.5% | 15.0% | 17.5% | 20.0% | 25.0% |
| BD/AN |  5.0% |  7.0% |  9.0% | 11.0% | 13.0% | 15.0% |
|    3* |  0.0% |  1.0% |  2.0% |  3.0% |  4.0% |  5.0% |
|    2* |  0.0% |  0.2% |  0.4% |  0.6% |  0.8% |  1.0% |
|    1* |  0.0% |  0.1% |  0.2% |  0.3% |  0.4% |  0.5% |

### SupportBonus;Support Unit Bonus
- Support Unit Bonus is applied 100% on event points, but 50% on event tokens. (e.g. bonus of 100% total would give 100% more points but only 50% more tokens)
- Featured Chapter Character Bonus: 5.0%
- Rarity, Mastery Rank, Skill Level Bonus

|       | Rarity | Mastery |    M0 |    M1 |    M2 |    M3 |    M4 |    M5 | Skill Level |   SL1 |   SL2 |   SL3 |   SL4 |
|:-----:|:------:|:-------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----------:|:-----:|:-----:|:-----:|:-----:|
|    4* |  10.0% |         |  0.0% |  0.5% |  1.0% |  1.5% |  2.0% |  2.5% |             | 0.00% | 0.25% | 1.00% | 2.50% |
| BD/AN |   5.0% |         |  0.0% |  0.4% |  0.8% |  1.2% |  1.6% |  2.0% |             | 0.00% | 0.20% | 0.80% | 2.00% |
|    3* |   3.0% |         |  0.0% |  0.3% |  0.6% |  0.9% |  1.2% |  1.5% |             | 0.00% | 0.15% | 0.60% | 1.50% |
|    2* |   2.0% |         |  0.0% |  0.2% |  0.4% |  0.6% |  0.8% |  1.0% |             | 0.00% | 0.10% | 0.40% | 1.00% |
|    1* |   1.0% |         |  0.0% |  0.1% |  0.2% |  0.3% |  0.4% |  0.5% |             | 0.00% | 0.05% | 0.20% | 0.50% |

![World Link Support Team Selection Screen](https://pjsekai.sega.jp/master-data/image/news/news_thumb_240_ninfsk.png)

## Notes;Other Things to Note
- Maintenance may occur in case there are problems during the event period. When a problem occurs, maintenance will immediately be performed due to the format and short duration of each chapter ranking.
- In the case of the event cannot run properly during a character chapter for more than 24 hours, a make-up chapter event for the affected character chapter will be scheduled to run after the last character chapter is finished.
      `,
      tags: [],
    },
    {
      name: "Unit Event Limited Cards & 3DMV Another Cut",
      description: `
## Cards;Unit Event Limited Cards
- Just like in every other events, event gachas will be held during World Link events, featuring brand new members/cards.
- The cards added in World Link gachas will be called "Unit Event Limited Members."
- "Unit Event Limited Members" are cards that are LIMITED to Unit-focused gachas ONLY.
- For example: All World Link N25 cards will be available in other event gachas linked to events focusing on the unit N25 ONLY. The cards will NOT be available in MIXED unit event gachas.
## AnotherCut;3DMV Another Cut
- The "Unit Event Limited Members" will also have their own unique feature called "3DMV Another Cut." You'll be able to unlock this by leveling the card's Master Rank to rank 2.
- The "3DMV Another Cut" will take effect when you put the card in your unit and watch the featured 3DMV the card linked to.
- In this case, the "3DMV Another Cut" will be available for each unit's new unit song (Twilight Light for N25, etc.)
- During Multi Lives, only the leader from each player's respective team will play the 3DMV Another Cut (if available), if by chance there are 2 or more players with the same characters, the first player in line's 3DMV Another Cut will be played instead.
- 3DMV Another Cut can be viewed from Solo Live, Multi Live, and the "View MV" feature.
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 10, 8),
  },
};

export default v3_1_0;
