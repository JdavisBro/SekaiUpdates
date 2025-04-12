import { Server } from "../types/ServerType.ts";
import { UpdateType } from "../types/UpdateType.ts";

const v3_0_0: UpdateType = {
  version: "3.0.0",
  description: "3rd Anniversary",
  features: [
    {
      name: "Character Advancement",
      description: `
![Project SEKAI Colorful Stage feat. Hatsune Miku Brand New World Title Screen](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_nheouas.png)

## CharacterVisuals;New Character Visuals
- With the game's 3rd Anniversary, all characters will be going up a year.
- They will also receive new character visuals.
- This change will also apply to the characters' Live2D sprites & chibi sprites
  - See bottom of page for images
- The characters will also receive new unit 3D costumes. They will be available for free.

## UnitsSongsStages;New Unit Songs & Stages
- All 6 units, including VIRTUAL SINGER, will be receiving their own new unit songs
- One song will be announced each month. The first unit song for VIRTUAL SINGER has also been announced:
  - I'm Mine by halyosy
- New unit stages will also be added alongside the new unit songs.

## TwoStars;New 2* Cards
-  New 2* cards using the new character visuals will now appear in the gacha after the update. (September 30th)
## Profiles;Updated Character Profiles
- Character profiles will be updated with info after the characters' advancement.

![New Character Profiles](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_yteatbf.png)

## 1koma;New In-Game 1-Koma Manga
- New 1-koma manga (loading screens) will be added to the game.
- These new 1-komas will be replacing the old ones. In addition, the old 1-koma manga will be available on Project Sekai's official website.

## AreaConvos;New Area Convos
- Around new 180 area convos will be added to the game.
- These new area convos will take place after the characters' advancement
- New Area Feature: Memory Fragment
  - A new feature called "Memory Fragment" will be available in the home/area screen.
  - By tapping on the Memory Fragment, you'll be able to go back and forth between the old & new timelines. (before & after advancement)
  - This is so that players will still be able to read/check old area convos.

![New Memory Fragment Feature](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_hjalaa.png)
## Titles;Update the "Use X Years" title achievements.
- New title achievement missions for "2nd Years" & "3rd Years" will be available after the update.
- In addition, the conditions for the old "1st Years" & "2nd Years" title achievement mission will not change.

## Other;Other Updates
  - Renew some character voice lines.
  - Add new materials for Custom Profile (Please note this update may change the current materials and layout used/saved for our Custom Profiles)

## DesignImages;Updated Design Images
### VSImage;Virtual Singer
![Virtual Singer Updated Designs](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_njwebi.png)
### LNImage;Leo/need
![Leo/need Updated Designs](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_cffsfs.png)
### MMJImage;MORE MORE JUMP!
![MORE MORE JUMP! Updated Designs](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_piqhn.png)
### VBSImage;Vivid BAD SQUAD
![Vivid BAD SQUAD Updated Designs](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_jebjaa.png)
### WXSImage;Wonderlands x Showtime
![Wonderlands x Showtime Updated Designs](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_znvnzv.png)
### N25Image;Nightcord at 25:00
![Nightcord at 25:00 Updated Designs](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_iyioqheq.png)
### VSSubImage;Virtual Singers with Subunits
![Virtual Singer Subunit Updated Designs](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_nbuagu.png)
      `,
      tags: [
        "2*",
        "2 stars",
        "key art",
        "portrait",
        "live2d",
        "chibi",
        "map sprites",
        "unit costume",
        "unit songs",
        "unit stages",
        "new profiles",
      ],
    },
    {
      name: "3D Graphics Update",
      description: `
## Updated3DModels;Updated 3D Character Models

### AntiAliasing;Anti-Aliasing
- Added anti-aliasing for the character models to achieve smoother outlines for the models.
- Anti-aliasing will NOT be reflected for 3DMVs during rhythm gameplay (Lives), but instead only for when you're watching the 3DMVs by themselves.

![Updated Character Models](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_qerqsg.png)

### Eyes;Eyes will show through hair

![Showing Eyes Through Hair](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_ncsgss.png)
## StagingEffect;Staging & Effect Updates
- These updates may not be reflected properly on some devices.
- Some of the new staging & effect updates will not be reflected during rhythm gameplay (Lives) and only be reflected when you watch the 3DMVs by themselves.

### Lighting;More Realistic Lighting

![Lighting Update Image 1](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_wqgssa.png)
![Lighting Update Image 2](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_ajdanka.png)
![Shadow Update](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_quwhg.png)

### Blur;Improved blur/depth of field effects

![Depth of Field Update](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_bnjalnk.png)
      `,
      tags: ["3dmv", "shaders"],
    },
    {
      name: "Polished 3DMV",
      description: `
- 5 3DMVs that have been voted the most by players have been updated polished.
- The 3DMVs are the following: Umiyuri Kaiteitan, IF, Cinema, TONDEMO-WONDERZ, IDSMILE
- The above 3DMVs are also already available on Project Sekai's official YouTube channel.
      `,
      tags: [
        "tale of the deep sea lily",
        "if",
        "cinema",
        "tondemo wonderz",
        "idsmile",
      ],
    },
    {
      name: "Device Compatibility",
      description: `
- Currently, it's been confirmed that users who use some iPad devices (6th generation) can no longer play the game properly.
- As such, the 6th generation iPad devices have been excluded from the list of compatible/supported devices and changed to iPad (7th generation)
      `,
      tags: ["ipad 6th generation"],
    },
    {
      name: "UI Overhaul",
      description: `
- With the game's 3rd Anniversary, the game UI will be receiving a complete overhaul.
- UI for menu, options, settings, etc. will be moved to the right side of the screen.
- Pop-up screens will now close when you tap anywhere outside of the pop-up screens instead of tapping the "close" button.
- Combine the "Main Story" & "Event Story" categories into one
- Add "Side Story" category in the Story screen.
  - Other than checking a character's side stories, you'll now be able to check other side stories that the featured character is involved in (ex: You can now check other side stories Ichika is involved in, such as her appearing in Saki's side stories)
- 2 type of views for Song Selection list (Jacket & List)
- Added text search in some screens such as Music Shop and Song Selection screen (you can use this to quickly search for songs or even producers)
- Added more options for sorting.
- You can now switch the position of the unit members you're using easily from the Unit Formation screen.
- The amount of Live Bonus you use can now be adjusted right before a Live.
- Skill activation and other displays during Lives will now be displayed outside of gameplay lane's range.
- Added the change Hairstyle option in the "View MV" screen.
- Hide items that you no longer have (0 in number/amount).
- Several areas have been updated.
- Other improvements.

![New Song List UI](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_kaakak.png)
      `,
      tags: ["view mv", "change hairstyle", "mastery"],
    },
    {
      name: "Updated Gacha Animation",
      description: `
- Along with the new 3D graphics update, the gacha animation will also be updated.

![Updated Gacha Animation Image](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_ioqhqn.png)
      `,
      tags: [],
    },
    {
      name: "Removal of Extra Card Talent Parameters",
      description: `
- The "Performance", "technique", and "Stamina" parameters that are usually shown as card stats will be removed completely as there is no specific use for them.
- The "Overall Power" parameter will stay and renamed to "Performance."
      `,
      tags: [],
    },
    {
      name: "Unit Rank Complete Removal",
      description: `
## Removal of Unit Ranks
- Back in the early days of the game, Unit Ranks are used to unlock each unit's Main Story, but all Main Stories are automatically unlocked now (since ver. 2.6.0) and in turn, Unit Ranks are no longer useful and will be removed.
- In addition, the "Hako Oshi" Title achievement mission that requires you to rank up all Unit Ranks to 20 will be changed.

## "Fan of All" Title Achievement Mission Change
- BEFORE: Rank up all Unit Ranks to Rank 20
- AFTER: Read all unit Main Stories WITHOUT using the SKIP and/or FAST-FORWARD button.
      `,
      tags: [],
    },
    {
      name: "APPEND Difficulty",
      description: `
## Overview;New Difficulty: APPEND
- A brand new difficulty called "APPEND" will be added to the game.
- APPEND difficulty will feature song charts that require you to play with 3 or more fingers.
- APPEND difficulty can be compared to the current EXPERT-MASTER difficulties, with its' difficulty ranging from Lv.23-38.
- APPEND difficulty will not be included in Rank Match's starting rank song selection, but will be available for players in the Diamond Rank and above.
- 12 APPEND songs will be available starting from September 30th.
## Songs;APPEND Songs Available (as of September 30th)
- Tell Your World
- NEO
- Hibana -Reloaded-
- Stella
- More! Jump! More!
- Vampire
- Cinema
- TONDEMO-WONDERZ
- Telecaster B-BOY
- I am you (Inandesu)
- Gehenna
## Notes;Notes
- When playing APPEND songs, please turn off any device functions that require 3 or more fingers (iOS: gesture function, etc.) to avoid any malfunctions.
- The difficulty level range for APPEND is said to be from Lv.23-38, however, this is not the range for the currently available APPEND songs, but the difficulty level range overall as the devs add more APPEND songs in the future.

![APPEND Song Image](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_njqwjba.png)
      `,
      tags: [],
    },
    {
      name: "Trace Notes",
      description: `
- A new type of note, Trace, will be added to the game.
- Unlike slide notes where you're require to time and tap at the start and release at the end of the note, trace notes only require you to have your finger held down when each note passes.

![Trace Notes Image](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_yujasb.png)
      `,
      tags: [],
    },
    {
      name: "Note Skins and Sound Effects",
      description: `
- One new note skin and sound effects will be added. You will now be able to change your default note skin & SE to a new one.

![New Note Skin Settings Image](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_njnbjaa.png)
      `,
      tags: [],
    },
    {
      name: "Character Rank EX Missions",
      description: `
- A character's EX mission will be unlocked once you've reached the max cap of that character's regular character mission.
- You can freely switch between regular mission and EX mission at any time you want.
- Any leftover/extra progress from regular missions can be optionally transferred to EX mission's progress.
## Upcoming EX Missions
### Play lives by having [featured characterl as the leader in the team for a certain number of times
- 500 times / 500 times / 500 times / 600 times / 600 times / 600 times / 700 times / 700 times / 700 times / 800 times / 800 times / 800 times / 900 times / 900 times / 900 times / 1000 times / 1000 times / 1000 times / 1100 times / 1100 times / 1100 times / 1200 times / 1200 times / 1200 times / 1200 times / 1300 times / 1300 times / 1300 times / 1400 times / 1400 times / 1400 times / 1500 times / loops '1500 times'.
- Reward Details
  - 500 to 1400 times: Character Rank EXP+I
  - After 1500 times: Wish Pieces x100
### Have [featured character] be sent to the green room a certain number of times
- 20 times / 20 times / 20 times / 23 times / 23 times / 23 times / 26 times / 26 times / 26 times / 29 times / 29 times / 29 times / 32 times / 32 times / 32 times / 35 times / 35 times / 35 times / 38 times / 38 times / 38 times / 41 times / 41 times / 41 times / 44 times / 44 times / 44 times / 47 times / 47 times / 47 times / 50 times / loops '50 times'.
- Reward Details
  - 20 to 47 times: Character Rank EXP + 1
  - After 50 times: Wish Pieces x100

![EX Missions in the Character Archive](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_hjinaa.png)
      `,
      tags: ["leader live", "green room"],
    },
    {
      name: "Character Rank Mission Caps Increase",
      description: `
- Collect a certain amount of [featured character's] cards
  - 62 cards / 64 cards / 66 cards / 68 cards / 70 cards / 72 cards / 74 cards / 76 cards
- Unlock a certain number of Live Costumes for [featured characterl
  - 460 costumes / 470 costumes / 480 costumes / 490 costumes / 500 costumes / 510 costumes / 520 costumes
- Collect a certain number of [featured character's] covers.
  - 21 / 22 / 23 / 24 / 25
- Play Lives by having [featured characterl as the leader in the team for a certain number of times
  - 22000 times / 22500 times / 23000 times / 23500 times / 24000 times / 24500 times / 25000 times / 25500 times / 26000 times / 26500 times / 27000 times / 27500 times / 28000 times / 28500 times / 29000 times / 29500 times
- Have [featured character] be sent to the green room a certain number of times
  - 480 times / 500 times / 520 times / 540 times / 560 times / 580 times / 600 times / 620 times / 640 times / 660 times / 680 times / 700 times
- Read a certain number of [featured character's] Side Story Part 1
  - 36 stories / 37 stories / 38 stories / 39 stories / 40 stories / 41 stories / 42 stories / 43 stories / 44 stories / 45 stories / 46 stories / 47 stories / 48 stories / 49 stories/ 50 stories
- Read a certain number of [featured character's] Side Story Part 2
  - 36 stories / 37 stories / 38 stories / 39 stories / 40 stories / 41 stories / 42 stories / 43 stories / 44 stories / 45 stories / 46 stories / 47 stories / 48 stories / 49 stories/ 50 stories
      `,
      tags: [],
    },
    {
      name: "Character Rank Cap Increase",
      description: `
- The Character Rank cap will be increased from 110 to 135.
      `,
      tags: [],
    },
    {
      name: "Trust Rank Cap Increase",
      description: `
- The Kizuna Rank cap will be increased from 55 to 75.
- In addition, you will receive a Stamp at Rank 66.
- Getting a Stamp from Trust Rank will count to *each* featured character's Character Mission.
- Please note that any extra Trust EXP earned before the cap increase will not be accumulated.
      `,
      tags: ["kizuna", "stamp"],
    },
    {
      name: "Player Rank Cap Increase",
      description: `
- The Player Rank cap will be increased from 500 to 600.
- Rank up rewards from 500 to 600 are the same as from 400 to 500.
- You will receive a new title for getting to Player Rank 600 (Sapphire).
      `,
      tags: ["sapphire", "rank 600"],
    },
    {
      name: "Old School Achievement Cap Increase",
      description: `
- The "Old School" Title achievement mission cap will be increased from 1095 days to 1460 days.
      `,
      tags: [],
    },
    {
      name: "Login Bonus Renewal",
      description: `
The rewards you get from logging in to the game every day (7 days) will be renewed.
## BEFORE
- Day 1: Crystals x50 / Virtual Coins x50
- Day 2 to 6: Crystals / Virtual Coins
- Day 7: Crystals / Virtual Coins
- TOTAL (7 DAYS): Crystals x300 / Virtual Coins x150
## AFTER
- Day 1 to 7 (every day):  Crystals x50 / Wish Pieces x15
- TOTAL (7 DAYS): Crystals x350 / Wish Pieces x105
## Note
- The amount of [Virtual Coins x300] you can exchange in the "Wish Piece" exchange shop will be increased from 10 times to 15 times per month.
      `,
      tags: ["wish pieces"],
    },
    {
      name: "Virtual Item Price Change",
      description: `
## SupportMessages;Support Messages
- 8 Letters/Characters
  - BEFORE: 100-999 Virtual Coins/Crystals
  - AFTER: 100-999 Virtual Coins; 100-299 Crystals
- 16 Letters/Characters
  - BEFORE: 1,000-4,999 Virtual Coins/Crystals
  - AFTER: 1,000-2,999 Virtual Coins; 300-999 Crystals
- 24 Letters/Characters
  - BEFORE: 5,000-9,999 Virtual Coins/Crystals
  - AFTER: 3,000-4,999 Virtual coins; 1,000-1,999 Crystals
- 32 Letters/Characters
  - BEFORE: 10,000-50,000 Virtual Coins/Crystals
  - AFTER: 5,000-9,999 Virtual coins; 2,000-2,999 Crystals
- 64 Letters/Characters [NEW]
  - 10,000-50,000 Virtual Coins; 3,000~50,000 Crystals
## VirtualItems;Virtual Items
> All prices are per one item
- Party Popper
  - BEFORE: 100 Virtual Coins/Crysta1s
  - AFTER: 30 Virtual Coins; 10 Crystals
- Rocket; Balloon
  - BEFORE: 30 Virtual Coins/Crystals
  - AFTER: 90 Virtual Coins; 30 Crystals
- "Precious" Uchiwa; Heart
  - BEFORE: 500 Virtual Coins/Crystals
  - AFTER: 150 Virtual Coins; 50 Crystals
- Character Item
  - BEFORE: 1,000 Virtual Coins/Crystals
  - AFTER: 300 Virtual Coins; 100 Crystals
- Unit Item; Event Item; Laser
  - BEFORE: 1,500 Virtual Coins/Crystals
  - AFTER: 450 Virtual Coins; 150 Crystals
- Birthday Item; Snowflakes
  - BEFORE: 3,000 Virtual Coins/Crystals
  - AFTER: 900 Virtual coins; 300 Crystals
- SEKAI
  - BEFORE: 10,000 Virtual Coins/Crystals
  - AFTER: 3,000 Virtual Coins; 1,000 Crystals
      `,
      tags: [],
    },
    {
      name: "Virtual Items with Colorful Pass",
      description: `
## Free-of-Charge Support Messages & Virtual Items for Players Who Bought Colorful Pass
- Some Support Messages & Virtual Items you can send during Virtual/Connect Lives will be free for players who bought and have an active Colorful Pass.
- You'll also be able to send them as many times as you want for free.
## Basic;Colorful Pass - Basic
- 8 Letters/Characters Support Messages
- Virtual Item: Party Popper
## Deluxe;Colorful Pass - Deluxe
- 8 Letters/Characters Support Messages
- Virtual Item: Party Popper; Rocket; Balloon
## Precious;Colorful Pass - Precious
- 8 Letters/Characters Support Messages
- Virtual Item: Party Popper; Rocket; Balloon; "Precious" Uchiwa; Heart
## Notes;Notes
- Any messages and/or virtual items sent with Colorful Pass benefits will NOT give you Support pts or wish pieces.
- Players are allowed to send free Support Messages and/or Virtual Items as much as they want, but any weird/trolling behavior will result in said player to be restricted.
      `,
      tags: [],
    },
    {
      name: "Last Event Story Rewards Adjustment",
      description: `
- The rewards you receive for reading the last event story in an ongoing event will be adjusted.
- BEFORE
  - Crystals x50
  - Music Cards x2
  - Memorial Title
- AFTER
  - Crystals x100
  - Music Cards x2
  - Memorial Title
  - Wish Pieces x50
- This update will apply for events after the 3rd Anniversary.
      `,
      tags: [],
    },
    {
      name: "Event Story Pts Requirement Update",
      description: `
- The amount of event pts needed to unlock event stories will be adjusted so that the pts needed to unlock the episodes are more evenly distributed between each episode.
- Adjusted Event pts Required to Unlock Event Stories
  - Episode 2: 6,000 pts (6,000 pts) --> 12,000 pts (12,000 pts)
  - Episode 3: 13,000 pts (+7,000 pts) --> 32,000 pts (+20,000 pts)
  - Episode 4: 30,000 pts (+17,000 pts) --> 52,000 pts (+20,000 pts)
  - Episode 5: 60,000 pts (+30,000 pts) --> 76,000 pts (+24,000 pts)
  - Episode 6: 90,000 pts (6000 pts) --> 100,000 pts (+24,000 pts)
  - Episode 7: 120,000 pts (6000 pts) --> 125,000 pts (+25,000 pts)
  - Episode 8: 150,000 pts (6000 pts) --> 150,000 pts (+25,000 pts)
## Notes
- This update will apply for events after the 3rd Anniversary.
      `,
      tags: [],
    },
    {
      name: "Event Ranking Rewards",
      description: `
- The rewards you receive from ranking in events will be adjusted.
## Top 4-10
- Top 4-10 will no longer receive the "Top 10" Title and instead will be getting their own respective Rank Title (ex: 4th place Title)
## Top 1,000-3,000
- Split into: 1001st-1500th; 1501st-2000th; 2001st-2500th; 2501st-3000th
- Add "Top 1500" & "Top 2500" Titles.
## 11-200,000
- 11-10,000: Skill-Up Scores (Advance) +1
- 10,001-50,000: Skill-Up Scores (Advance) x1
- 50,001-200,000: Skill-Up Scores (Intermediate) +1
## 50,001-300,000
- Crystals x300
## Below 300,000th
- Ranking below 300,000th place will no longer be displayed
- Any players placed below 300,000th place will also no longer receive rewards
## Notes
- This update will apply for events after the 3rd Anniversary.
      `,
      tags: ["tiering"],
    },
    {
      name: "Mastery Rank Event Bonus Ajustment",
      description: `
## FourStar;4*
- MR 0: 00.0% -> 10.0%
- MR 1: 10.0% -> 12.5%
- MR 2: 11.0% -> 15.0%
- MR 3: 12.0% -> 17.5%
- MR 4: 13.0% -> 20.0%
- MR 5: 15.0% -> 25.0%
## Birthday;Birthday/Anniversary
- MR 0: 00.0% -> 05.0%
- MR 1: 05.0% -> 07.0%
- MR 2: 06.0% -> 09.0%
- MR 3: 07.0% -> 11.0%
- MR 4: 08.0% -> 13.0%
- MR 5: 10.0% -> 15.0%
## Notes;Notes
- This update will apply for events after the 3rd Anniversary.
## Chart;Chart

|       |    M0 |    M1 |    M2 |    M3 |    M4 |    M5 |
|:-----:|------:|------:|------:|------:|------:|------:|
|    4* | 10.0% | 12.5% | 15.0% | 17.5% | 20.0% | 25.0% |
| BD/AN |  5.0% |  7.0% |  9.0% | 11.0% | 13.0% | 15.0% |
|    3* |  0.0% |  1.0% |  2.0% |  3.0% |  4.0% |  5.0% |
|    2* |  0.0% |  0.2% |  0.4% |  0.6% |  0.8% |  1.0% |
|    1* |  0.0% |  0.1% |  0.2% |  0.3% |  0.4% |  0.5% |

      `,
      tags: ["mastery bonus"],
    },
    {
      name: "Account Transfer Restriction Update",
      description: `
- BEFORE
  - Players who have reached Top *1000* in ranking AT LEAST ONCE in the first 24 hours after an event has started can transfer their game data to another device TWICE during the event period.
- AFTER
  - Players who have reached Top *300* in ranking AT LEAST ONCE in the first 24 hours after an event has started can transfer their game data to another device TWICE during the event period.
- This update will apply for events after the 3rd Anniversary.
      `,
      tags: ["account sharing", "account syncing", "game data"],
    },
    {
      name: "Event Exchange Item Adjustment",
      description: `
Event Exchange Shop Items Adjustment
## Gems;Attribute Gems
- Quantity: 1 -> 10
- Exchange Limit: 200 -> 20
- Required Badges (One): 100 -> 500
- Required Badges (Total): 20,000 -> 10,000
## Charms;Attribute Charms
- Quantity: 10 -> 100
- Exchange Limit 100 -> 10
- Required Badges (One): 100 -> 500
- Required Badges (Total): 10,000 -> 5,000
## Notes;Notes
- This update will apply for events after the 3rd Anniversary.
      `,
      tags: ["event shop"],
    },
    {
      name: "Multi Live 0 Life Score Penalty Change",
      description: `
- The score that's reflected in the result screen when players HP/Life reach 0 will be reduced from 10% (90% reduction) to 70% (30% reduction).
- This update will apply for events after the 3rd Anniversary.
      `,
      tags: [],
    },
    {
      name: "Tutorial Rewards Increase",
      description: `
- From September 30th, the amount of rewards a player can receive from clearing the game's tutorial will be increased.
- New List of Tutorial Rewards
  - Music Cards x200 [+100]
  - Coins X100,000 [NEW]
  - Attribute Gems x100 each [NEW]
  - Miracle Gems x50 [NEW]
  - Practice Scores (Intermediate) x50 [NEW]
  - Bonus Energy Drink (Large) x5
  - Attribute Charms x100 each
  - Magic Cloth x300
  - Magic Thread x30
  - Wish Pieces x300
  - Stamp Exchange Tickets x3
  - Virtual Coins x5,000
- For players who have already completed the tutorial, the new rewards will be sent to your present box after the update.
      `,
      tags: [],
    },
    {
      name: "Start Dash & Regular Missions Renewal",
      description: `
- Currently existing Regular missions and Start Dash missions will be merged into a brand new Start Dash mission list.
- This change will be applied to players who start playing the game on and/or after September 30th 2023.
- Veteran players will continue to challenge Regular missions and Start Dash missions as usual.
## New Start Dash Missions
- Play Lives 3 times
- Clear either "Multi Live" or "Cheerful Live" 1 time
- Exchange your Music Cards for 1 song from the Music Shop
- Create 1 Costume from the Costume Shop
- Change a character's Live Costume
- Level up a character's card 1 time
- Read a character's Side stories part 1 & part 2
- Unlock an Area Item
- Attend a Virtual Live 1 time
- Send out a Virtual Item during a Virtual Live 1 time
- Watch 1 MV from the "View MV" feature until the end
- Set 3 Titles on your profile
- Clear 1 Challenge Live
- Make 1 friend
- Set your password in the game data transfer option
- Watch the opening for Leo/need's Main Story
- Watch the opening for MORE MORE JUMP!'s Main Story
- Watch the opening for Vivid BAD SQUAD's Main Story
- Watch the opening for Wonderlands x Showtime's Main Story
- Watch the opening for Nightcord at 25:00's Main Story
- Read VIRTUAL SINGER's Main story
- Clear all Start Dash missions

![New Start Dash Missions](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_ybklaa.png)
      `,
      tags: [],
    },
    {
      name: "Pre-release for FPS & Vsync Settings",
      description: `
- To make the rhythm game experience more comfortable, FPS settings (120FPS) and Vsync settings will be added to the game.
- After the update, the FPS setting will be set to "Standard (60FPS)" and Vsync setting will be turned on. This can be changed from the Option menu.
- This feature is still in its' pre-release or trial version as it's still being tested by the devs, so in the unlikely case that you experience any problems with the game when having any of the new settings on, please turn everything back to default.
- Turning ON the Vsync option is recommended, however if the 120FPS setting becomes unstable because of it, please try turning it OFF.
- The 120FPS option may not be available to some devices that don't support 120FPS setting.

![Settings Menu Showing the New FPS and Vsync Settings](https://pjsekai.sega.jp/master-data/image/news/news_thumb_231_ghhbaj.png)
      `,
      tags: [],
    },
    {
      name: "3D Costumes for All Sekai Virtual Singers",
      description: `
- Previously, only the SEKAI-Variant Miku, the initial SEKAI-Variant VS, VBS Rin, and WxS Len have their own 3D costumes, but now all the other SEKAI-Variant VIRTUAL SINGERs will be getting their own 3D costumes as well.
- You can unlock these 3D Costumes by reading through the event stories these SEKAI-Variant VIRTUAL SINGERs were first featured in.
## LN;Leo/need / School SEKAI
- Kagamine Rin: Unnamed Harmony
- Kagamine Len: Putting Feelings Into Words
- MEIKO: Don't Let Doubts Hold You Back
- KAITO: A Bright Future!!
## MMJ;MORE MORE JUMP! / Stage SEKAI
- Kagamine Len: Happy Lovely Everyday!
- Megurine Luka: My Color!
- MEIKO: You Deserve It! Break Time!
- KAITO: MORE MORE Making Chrstmas
## VBS;Vivid BAD SQUAD / Street SEKAI
- Megurine Luka: Same Dreams, Same Colors
- KAITO: STRAY BAD DOGS
## WXS;Wonderlands x Showtime / Wonderland SEKAI
- Kagamine Rin: Musical Twilight Parade
- Megurine Luka: Doll Festival at the Tenma's
- MEIKO: On this Holy Night, I Sing
## N25;Nightcord at 25:00 / Empty SEKAI
- Kagamine Rin: Insatiable Pale Color
- Kagamine Len: What Lies Beyond Guiding a Lost Child
- Megurine Luka: Carnation Recollection
- MEIKO: Secret Distance
- KAITO: Immiscible Discord
## Notes;Notes
- If you have read all the stories above, you will receive the 3D Costumes directly when you log in after the update.
      `,
      tags: [],
    },
    {
      name: "Crystal Shop Renewal",
      description: `
- The Crystal Shop will be getting a renewal. As such, some products that are sold in the Crystal Shop will be discontinued.
- New sets will also be added to the Crystal Shop. 
## Discontinued;Discontinued Sales
- Variety SEKAI Set (Paid Crystals x1500)
## DiscontinuedChange;Discontinued Sales Due to Change in Contents of the Sets
- Sewing Set (Paid Crystals x1500)
- Music Card Set (Paid Crystals x300)
- Sticker Exchange Set (Paid Crystals x300)
- Coin Set (Paid Crystals x1500)
## Renewed;Renewed Sets
- Renewal Commemoration Beginner's Support Set - 5000 Yen (can be bought 2 times)
  - 4* Guaranteed 10-Pull Ticket x1
  - Practice Scores (Advance) x50
  - Miracle Gems x250
- Attribute Gems Set - x500 each
  - Mysterious Seeds x30
  - Coins x300,000
- Sewing & Sticker Set - 3000 Paid Crystals (can be bought I time per month)
  - Gacha Tickets XIO
  - Sticker Exchange Tickets x3
  - Magic Cloth x600
  - Magic Thread x60
- Music Card Set - 1500 Paid Crystals (can be bought 2 times per month)
  - Gacha Tickets x5
  - Music Cards x50
- Coin Set - 3000 Paid Crystals (can be bought 1 time per month)
  - Gacha Tickets x10
  - Coins x300,000
## Renamed;Renamed Sets
- "Welcome SEKAI" Set B, C, D will be renamed to "Beginner's Support" Set A, B, C.
      `,
      tags: [],
    },
  ],
  date: {
    [Server.jp]: new Date(2023, 8, 29),
    [Server.en]: new Date(2024, 8, 30),
  },
};

export default v3_0_0;
